import puppeteer from 'puppeteer';
import path from 'path';
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
  console.log('🚀 啟動 export_multi.js：高精度獨立面板匯出 (產出 4 個 PDF 檔案)...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
  });
  
  const page = await browser.newPage();
  
  for (const panel of panels) {
    // 物理尺寸轉換
    const pxWidth = Math.ceil(panel.widthMm * 3.78);
    const pxHeight = Math.ceil(panel.heightMm * 3.78);
    await page.setViewport({ width: pxWidth, height: pxHeight, deviceScaleFactor: 1 });
    
    const targetUrl = `http://localhost:5173/pdf?export=${panel.id}`;
    console.log(`🌐 正在抓取: ${panel.id} (${panel.widthMm}mm 寬)...`);
    
    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 2000));
    
    const outputPath = path.join(__dirname, `lhd_poster_${panel.id}.pdf`);
    
    // 設定精確物理單位
    await page.pdf({
      path: outputPath,
      width: `${panel.widthMm}mm`,
      height: `${panel.heightMm}mm`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    
    console.log(`✅ 面板 ${panel.id} 匯出成功 -> ${outputPath}`);
  }
  
  await browser.close();
  console.log('\n🎉 4 個獨立實體 PDF 檔案匯出完成！');
})();
