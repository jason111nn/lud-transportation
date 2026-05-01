# 🚦 低頭顯示器 - 交通號誌提醒系統 (LUD System)
> 更新日期 2026-05-01

<div align="center">

**LUD (Low-head Up Display)** 「既然低頭已成事實，那我們就把資訊送下去。」  
這是專為 **低頭族 (Smombie)** 設計的智慧交通預警系統。

[![LIVE DEMO](https://img.shields.io/badge/LIVE_DEMO-進入網站-4A677D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://jason111nn.github.io/lud-transportation/)
[![REPOSITORY](https://img.shields.io/badge/REPOSITORY-GitHub-0d1117?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jason111nn/lud-transportation)
[![CONTACT](https://img.shields.io/badge/CONTACT-Email-D44638?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jason5j288@gmail.com)

![Vue3](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vuedotjs&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![ESP32](https://img.shields.io/badge/Hardware-ESP32-E7352C?style=flat-square&logo=espressif&logoColor=white)
![License](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey?style=flat-square)

</div>

---

## 📱 專題簡介

LUD 系統是一套基於 **IoT 物聯網技術** 的智慧交通**概念模型**。我們針對現代用路人等紅燈分心操作手機的痛點，將傳統號誌從「被動觀看」轉為「主動提醒」。透過 V2I 技術，在號誌變換瞬間將資訊推播至終端設備，解決起步延遲與路口追撞的風險。

---

## ⚡ 核心技術：快、輕、準

* **V2I (Vehicle-to-Infrastructure) 協作**：基礎設施主動發話，讓路口數據與個人設備達成即時對話。
* **極低延遲藍牙廣播 (BLE Advertising)**：採用 **Non-connectable** 廣播模式，實測延遲低於 **200ms**，確保號誌變換體感零時差同步。
* **自定義 5-Byte 極簡協定**：將關鍵數據封裝在極小封包中，提升在高干擾環境下的傳輸穩定性。
* **Vue 3 + GSAP 監控面板**：前端採用現代化開發架構，將硬體端的 RAW 封包數據轉化為高質感的動態監控介面。

---

## 📊 數據通訊協定 (5-Byte Protocol)

為了達成極速傳輸，我們將數據高度壓縮：

| 位元組 (Byte) | 責任定義 | 說明 |
| :--- | :--- | :--- |
| **Byte 0-1** | **識別碼** | 固定為 `0xFFFF`，確保 App 只接收來自 LUD 系統的數據。 |
| **Byte 2-3** | **號誌相位** | 傳輸路口各向之即時燈號狀態。 |
| **Byte 4** | **即時倒數** | 載入目前的剩餘秒數，供接收端即時顯示。 |

---

## 💡 技術邏輯與實作對策 (Q&A)

針對實際部署的技術挑戰，我們在設計階段就預留了對策：

* **如何實體安裝？**
  不依賴影像辨識，而是直接從交通控制箱擷取信號電平，並透過 **光耦合器 (Optocoupler)** 進行硬體隔離，安全地讀取燈號狀態。
* **多向路口處理？**
  5-Byte 協定具備高度擴充性。利用 **位元遮罩 (Bitmask)** 技術，Byte 2-3 可承載多相位狀態，配合 App 端的地理圖資即可解析複雜路口。
* **秒數異動同步？**
  系統採用「主動推播」機制。發射端每秒皆會擷取最新數據並廣播，App 永遠只顯示最新收到的計時值，無需預載任何路口參數。

---

## 🛠️ 網站選用技術 (Tech Stack)

* **前端核心**：**Vue 3 (Composition API)** + **Vite**。
* **動態演繹**：使用 **GSAP** 處理複雜的數據監控面板動畫。
* **樣式工具**：**Tailwind CSS** 實作響應式佈局。
* **自動化流程**：**GitHub Actions** CI/CD 搭配 **Puppeteer** 處理高精度 PDF 海報匯出。
* **軟硬整合**：精準解析 **ESP32** 發出的藍牙廣播封包數據。

---

## 🚀 快速開始 (Getting Started)

1. 確認已安裝 [Node.js](https://nodejs.org/)。
2. 下載並解壓縮專案。
3. 開啟控制台依序執行以下指令：

```bash
# 進入專案目錄
cd lud-transportation

# 安裝依賴套件
npm install

# 啟動開發伺服器
npm run dev
```

---

## 🔮 未來展望 (Future Outlook)

LUD 系統目前雖然已具備完整的概念驗證，但我們的目標是讓智慧交通走入每個人的生活。接下來，我們將朝以下幾個方向持續進化：

1. **iOS 系統適配 (開發中)** 📱
   目前我們已完成 Android 端的實作，緊接著將針對 iOS 平台進行開發，優化跨平台通訊協議的穩定性，讓更多手機用戶能享受低延遲的號誌提醒服務。

2. **大數據整合與效益分析** 📊
   透過接收端回傳的去識別化數據，我們可以量化分析 LUD 系統在不同時段對「起步延遲」的具體改善程度。這不只是技術展現，更能為未來的智慧交通政策提供有力的數據支持。

3. **深度 V2I 介接與生態系擴充** 🌐
   我們計畫將 LUD 發射端與更多城市的智慧路口控制箱（Traffic Controller）進行深度介接，打造一個更完整、更高精度的車路協同（V2I）交通環境。

4. **支援多元外接設備 (如：行車記錄器)** 🎥
   除了手機 App，我們也計畫將接收邏輯封裝至行車記錄器或其他車載裝置中。透過螢幕疊加 (Overlay) 技術，直接在記錄器畫面上提供號誌預警，達成真正的「車內抬頭顯示」體驗。

---

## 📜 授權協議 (License)

本專案採用 **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hant)** 授權方式。
簡單來說：歡迎分享與修改，但請**標記來源**、**禁止商業使用**，且修改後需以**相同方式分享**。

---

## ✉️ 聯絡我們
**Jason111nn** - 新北高工資訊科

* **Email**: [jason5j288@gmail.com](mailto:jason5j288@gmail.com) (歡迎交流)
* **GitHub**: [Jason111nn](https://github.com/jason111nn)
* **專題網站**: [LUD](https://jason111nn.github.io/lud-transportation/)