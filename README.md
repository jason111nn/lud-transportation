# LUD - Low-head Up Display SYSTEM
### 道路交通號誌「主動式」提醒系統

LUD 系統是一套基於 IoT 物聯網技術的智慧交通解決方案，旨在解決「Smombie (低頭族)」在路口停等紅燈時，因分心操作手機而忽略號誌切換，導致起步延遲甚至引發後車追撞的社會痛點。

---

## 🚀 核心技術 (Technical Highlights)

- **V2I 車路協同**：透過號誌端 (Roadside Unit) 主動發射 BLE 訊號，實現基礎設施與個人終端的即時通訊。
- **非連線式廣播 (Non-connectable Advertising)**：利用藍牙廣播技術，解決多台裝置連線限制，確保高頻發送且具備 < 200ms 的極低延遲。
- **自定義 5-Byte 極簡協定**：將號誌相位與秒數封裝於製造商特定數據 (Manufacturer Specific Data) 區域，達成數據輕量化與高效傳輸。
- **GSAP 現代化監控介面**：網頁端採用 Vue 3 + Vite 搭配 GSAP 動畫，實現具備工程質感的即時數據監控面板。

## 📂 專案結構 (Project Structure)

本倉庫為網頁端與 PDF 自動化匯出系統之根目錄：
- `src/`: 專題官網與海報工作區原始碼。
- `public/carousel/`: 專案門面背景輪播圖資。
- `.github/workflows/`: 自動化部署與報告生成腳本。
- `export_final.js`: 基於 Puppeteer 的 PDF 渲染匯出腳本。

## 🛠️ 開發環境

- **前端框架**: Vue.js 3 (Composition API)
- **動畫引擎**: GSAP (GreenSock)
- **樣式工具**: Tailwind CSS
- **自動化**: GitHub Actions / Node.js

## ✉️ 網站開發者
Jason111nn - [jason5j288@gmail.com](mailto:jason5j288@gmail.com)