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
  console.log('🚀 啟動 Puppeteer 進行單檔多頁面高精度匯出...');
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
    await page.setViewport({ width: pxWidth, height: pxHeight, deviceScaleFactor: 1 });
    
    const targetUrl = `http://localhost:5173/pdf?export=${panel.id}`;
    console.log(`🌐 正在抓取: ${panel.id} (${panel.widthMm}mm 寬)...`);
    
    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 2000));
    
    const tempPath = path.join(__dirname, `_temp_${panel.id}.pdf`);
    await page.pdf({
      path: tempPath,
      width: `${panel.widthMm}mm`,
      height: `${panel.heightMm}mm`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    tempPdfPaths.push(tempPath);
  }
  
  await browser.close();

  // 2. 利用 pdf-lib 合併這四個不同尺寸的 PDF 成為一個檔案
  console.log('\n🔗 開始合併四個不同尺寸的頁面...');
  const mergedPdf = await PDFDocument.create();

  for (const tempPath of tempPdfPaths) {
    const pdfBytes = fs.readFileSync(tempPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
    
    // 刪除暫存檔
    fs.unlinkSync(tempPath);
  }

  const finalOutputPath = path.join(__dirname, 'lhd_poster_merged.pdf');
  const finalPdfBytes = await mergedPdf.save();
  fs.writeFileSync(finalOutputPath, finalPdfBytes);

  console.log(`\n🎉 匯出成功！最終合併檔案已儲存至：${finalOutputPath}`);
  console.log(`(單一 PDF 內含 4 頁，寬度依序為：450mm, 950mm, 950mm, 450mm，高度皆為 1200mm)`);
})();
