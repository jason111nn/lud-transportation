# LUD - Low-head Up Display SYSTEM
### 道路交通號誌主動式提醒系統

LUD 系統是一套基於 IoT 物聯網技術的智慧交通解決方案，旨在解決「Smombie (低頭族)」在路口停等紅燈時，因分心操作手機而忽略號誌切換，導致起步延遲甚至引發後車追撞的社會痛點。

---

## 🚀 核心技術 (Technical Highlights)

- **V2I 車路協同**：透過 ESP32 號誌端主動廣播數據，實現基礎設施與個人終端的即時通訊。
- **BLE 非連線式廣播**：利用藍牙廣播（Non-connectable Advertising）技術，確保多台裝置可同時接收，且具備低於 200ms 的極低延遲。
- **5-Byte 自定義封包**：精簡化通訊協定，將號誌相位與秒數封裝於製造商特定數據 (Manufacturer Specific Data) 區域。
- **現代化 Web 展現**：前端採用 Vue 3 + Vite + Tailwind CSS，並結合 GSAP 實現高質感的技術監控介面。

## 📂 專案結構 (Project Structure)

- `project_web/`: 網頁端原始碼，包含 PDF 生成工具與專題官網。
- `firmware/`: ESP32 (NodeMCU-32S) 韌體程式碼。
- `.github/workflows/`: 自動化部署與報告生成腳本。

## 🛠️ 開發環境

- **微控制器**: ESP32 (C++/Arduino)
- **前端框架**: Vue.js 3 (Composition API)
- **動畫引擎**: GSAP (GreenSock)
- **自動化**: GitHub Actions / Node.js (Puppeteer)

## ✉️ 網站開發者
Jason111nn - [jason5j288@gmail.com](mailto:jason5j288@gmail.com)