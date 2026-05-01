import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const panels = [
  { id: 'panel-1', widthMm: 450, heightMm: 1200 },
  { id: 'panel-2', widthMm: 950, heightMm: 1200 },
  { id: 'panel-3', widthMm: 950, heightMm: 1200 },
  { id: 'panel-4', widthMm: 450, heightMm: 1200 }
];

(async () => {
  console.log('🚀 啟動 export_final.js：高精度 1:1 合併匯出...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
  });
  
  const page = await browser.newPage();
  const tempPdfPaths = [];
  
  // 1. 產生四份獨立尺寸的 PDF 暫存檔
  for (const panel of panels) {
    const pxWidth = Math.ceil(panel.widthMm * 3.78);
    const pxHeight = Math.ceil(panel.heightMm * 3.78);
    // 設定 deviceScaleFactor: 4，確保網頁內的圖片以 4 倍解析度渲染 (384 DPI)，完全符合且超越印刷廠的 300 DPI 要求
    await page.setViewport({ width: pxWidth, height: pxHeight, deviceScaleFactor: 4 });
    
    const targetUrl = `http://localhost:5173/pdf?export=${panel.id}`;
    console.log(`🌐 正在抓取: ${panel.id} (${panel.widthMm}mm 寬)...`);
    
    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluateHandle('document.fonts.ready');
    // 給予額外時間確保圖片與字體完全渲染，無動畫殘留
    await new Promise(r => setTimeout(r, 2000));
    
    const tempPath = path.join(__dirname, `_temp_${panel.id}.pdf`);
    await page.pdf({
      path: tempPath,
      // 增加實體 3mm 出血 (雙邊共 6mm)
      width: `${panel.widthMm + 6}mm`,
      height: `${panel.heightMm + 6}mm`,
      printBackground: true,
      // 由 PDF 自動向外延展白邊作為出血
      margin: { top: '3mm', right: '3mm', bottom: '3mm', left: '3mm' }
    });
    tempPdfPaths.push(tempPath);
  }
  
  await browser.close();

  // 2. 利用 pdf-lib 合併四個檔案成為單一 PDF
  console.log('\n🔗 開始合併四個不同寬度的面板...');
  const mergedPdf = await PDFDocument.create();

  for (const tempPath of tempPdfPaths) {
    const pdfBytes = fs.readFileSync(tempPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const finalOutputPath = path.join(__dirname, 'lhd_poster_merged_final.pdf');
  const finalPdfBytes = await mergedPdf.save();
  fs.writeFileSync(finalOutputPath, finalPdfBytes);

  console.log(`\n🎉 匯出成功！最終向量合併檔案已儲存至：${finalOutputPath}`);
  console.log(`(內含 4 頁，包含外加 3mm 出血的最終實體尺寸依序為：456x1206mm, 956x1206mm, 956x1206mm, 456x1206mm)`);

  // 統一在最後清理暫存檔，避免 Windows 檔案鎖定 (EBUSY) 錯誤
  for (const tempPath of tempPdfPaths) {
    try {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    } catch (e) {
      console.warn(`[警告] 暫存檔清除失敗，請手動刪除: ${tempPath}`);
    }
  }
})();
