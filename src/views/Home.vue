<template>
  <div class="min-h-screen bg-[#F8F9FA] text-[#1F2937] font-sans selection:bg-[#4A677D] selection:text-white relative">
    
    <nav class="fixed top-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 transition-all duration-500"
      :class="showHeader ? 'bg-[#111827]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto flex justify-between items-center text-white">
        <h2 class="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2">
          LUD <span class="hidden sm:inline-block text-[#4A677D] text-xs font-bold tracking-[0.2em] uppercase border-l border-white/20 pl-2">Low-head Up Display</span>
        </h2>
        <div class="flex items-center gap-4 md:gap-8">
          <div class="hidden sm:flex items-center gap-2">
            <a :href="apkUrl" download="LUD.apk"
              class="bg-[#4A677D] hover:bg-white hover:text-[#111827] text-white px-5 py-2 text-xs font-bold transition-all rounded-full border border-white/10 shadow-lg flex items-center gap-2">
              <i class="fa-brands fa-android"></i> APK 下載
            </a>
            <a :href="specUrl" target="_blank" rel="noreferrer"
              class="bg-white/10 hover:bg-white/20 text-white px-5 py-2 text-xs font-bold transition-all rounded-full border border-white/10 flex items-center gap-2">
              <i class="fa-solid fa-file-pdf"></i> 作品說明書
            </a>
            <router-link to="/pdf"
              class="bg-white/10 hover:bg-white/20 text-white px-5 py-2 text-xs font-bold transition-all rounded-full border border-white/10">
              海報工作區
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <header class="relative min-h-screen w-full bg-[#111827] flex items-center justify-center overflow-hidden py-20">
      <div class="absolute inset-0 opacity-10 pointer-events-none" 
        style="background-image: linear-gradient(#4A677D 1px, transparent 1px), linear-gradient(90deg, #4A677D 1px, transparent 1px); background-size: 50px 50px;">
      </div>
      
      <div class="z-10 max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div class="lg:col-span-7 text-left space-y-8 hero-text">
          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#4A677D]/20 border border-[#4A677D]/30 text-[#4A677D] font-black text-[10px] tracking-[0.3em] uppercase">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-[#4A677D] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#4A677D]"></span>
            </span>
            V2I Smart Traffic Infrastructure
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
            低頭顯示器<br/><span class="text-[#4A677D]">交通號誌提醒系統</span>
          </h1>
          <p class="text-lg md:text-xl font-bold text-gray-300 leading-[1.1] tracking-tighter">
            智慧預警 - LUD 系統
          </p>
          <p class="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-xl">
            將傳統交通號誌「主動化」。透過低功耗藍牙 (BLE) 廣播技術，為低頭族打造零延遲的安全防線，有效解決路口起步延遲問題。
          </p>
          <div class="flex flex-wrap gap-4 items-start">
            <a :href="apkUrl" download="LUD.apk"
              class="px-8 py-4 bg-[#4A677D] text-white font-bold rounded-xl hover:bg-white hover:text-[#111827] transition-all shadow-xl flex items-center gap-3 group">
              <i class="fa-brands fa-android text-lg"></i>
              Android APK 下載
              <span class="ml-1 text-[10px] font-black tracking-widest px-2 py-1 rounded bg-black/30 border border-white/10">{{ apkVersion }}</span>
              <i class="fa-solid fa-download group-hover:translate-y-[1px] transition-transform"></i>
            </a>
          
            <a :href="inoUrl" download="LUD_Firmware_v1.0.ino"
              class="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10 flex items-center gap-3 group">
              <i class="fa-solid fa-microchip text-lg text-[#8C7355]"></i>
              ESP32 韌體原始碼 (.ino)
              <i class="fa-solid fa-code opacity-80 group-hover:scale-110 transition-transform"></i>
            </a>
          
            <a :href="specUrl" target="_blank" rel="noreferrer"
              class="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10 flex items-center gap-3">
              <i class="fa-solid fa-file-pdf text-lg text-[#E53935]"></i>
              查看作品說明書 (PDF)
              <i class="fa-solid fa-arrow-up-right-from-square opacity-80"></i>
            </a>
            <button type="button" disabled
              class="px-8 py-4 rounded-xl border border-white/15 text-white/60 font-bold bg-white/5 backdrop-blur-sm cursor-not-allowed flex items-center gap-3">
              <i class="fa-brands fa-apple text-lg"></i>
              iOS 測試版本
              <span class="ml-1 text-[10px] font-black tracking-widest px-2 py-1 rounded bg-white/10 border border-white/10">規劃測試中</span>
            </button>
            
            <router-link to="/pdf"
              class="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10 flex items-center gap-3 group">
              海報預覽與導出工作區
              <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </router-link>
          </div>
          <div class="mt-2 text-white/70 text-sm md:text-base font-medium max-w-xl">
            <span class="inline-flex items-center gap-2">
              <i class="fa-solid fa-bolt text-[#4A677D]"></i>
              {{ releaseHighlight }}
            </span>
          </div>
        </div>

        <div class="lg:col-span-5 relative hero-visual hidden lg:block">
          <div class="bg-gray-800/40 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <div class="flex justify-between items-center mb-8">
              <div class="space-y-1">
                <p class="text-white font-bold tracking-widest text-sm">數據廣播狀態</p>
                <p class="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em]">Advertising: 5-Byte Packet</p>
              </div>
              <i class="fa-solid fa-tower-broadcast text-[#4A677D] text-2xl animate-pulse"></i>
            </div>
            
            <div class="space-y-10">
              <div class="flex items-center gap-6">
                <div class="flex-shrink-0 w-20 h-20 rounded-full border-4 border-[#4A677D]/30 flex items-center justify-center shadow-[0_0_20px_rgba(74,103,125,0.3)]">
                  <div class="text-white text-4xl font-black font-mono leading-none">{{ mockTimer }}</div>
                </div>
                <div class="min-w-0">
                  <p class="text-[#4A677D] font-mono text-[10px] font-bold uppercase tracking-widest mb-1">Packet Byte 4</p>
                  <p class="text-white text-xl font-black truncate">即時相位倒數</p>
                </div>
              </div>
              
              <div class="bg-black/60 p-5 rounded-2xl font-mono text-[10px] md:text-xs border border-white/5 space-y-2 shadow-inner">
                <p class="text-gray-500">// BLE Raw Data Package</p>
                <p class="text-[#4A677D] text-base md:text-lg tracking-[0.2em] whitespace-nowrap">
                  0xFFFF 0x01 0x0{{ mockTimer.toString(16).toUpperCase() }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <button type="button" @click="scrollToId('problem')"
        class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2 group">
        <span class="text-[10px] tracking-[0.5em] uppercase font-mono opacity-60 group-hover:opacity-100 transition-opacity">Report & Details</span>
        <div class="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-lg animate-soft-pulse">
          <i class="fa-solid fa-arrow-down animate-bounce-soft"></i>
        </div>
      </button>
    </header>

    <main class="relative z-10">
      <section id="resources" class="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="text-center mb-14 md:mb-20 space-y-4">
          <h2 class="text-3xl md:text-4xl font-black tracking-widest text-[#111827]">RESOURCES</h2>
          <p class="text-[#4A677D] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
            學習紀錄 · 技術網誌 · 心得感想
          </p>
        </div>
      
        <div class="hidden md:grid grid-cols-2 gap-8">
          <a href="https://jason111nn.github.io/" target="_blank" rel="noreferrer"
            class="group relative h-[400px] rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <img src="https://jason111nn.github.io/og-image.jpg"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="BLOG 作品集" loading="lazy" decoding="async" width="1200" height="630">
            <div class="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>
            <div class="absolute bottom-10 left-10 right-10">
              <p class="text-[10px] font-mono tracking-[0.5em] text-white/50 uppercase mb-2">Portfolio</p>
              <h3 class="text-3xl font-black text-white">我的 BLOG 作品集</h3>
              <p class="text-white/60 font-medium mt-2">個人技術紀錄與專案整合 <span class="text-[#4A677D]">(製作整理中)</span></p>
              <div class="mt-6 inline-flex items-center gap-2 text-[#4A677D] font-bold text-sm">
                Visit Blog <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
              </div>
            </div>
          </a>
        
          <div class="relative h-[400px] rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl cursor-not-allowed opacity-80 group">
            <img :src="siteImg('og-image.png')"
              class="absolute inset-0 w-full h-full object-cover grayscale"
              alt="專題紀錄" loading="lazy" decoding="async" width="1200" height="630">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
            <div class="absolute bottom-10 left-10 right-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/50 text-[10px] font-black uppercase tracking-widest mb-4">
                <i class="fa-solid fa-lock text-[8px]"></i> Organizing
              </div>
              <h3 class="text-3xl font-black text-white/70">專題紀錄、心得與感想</h3>
              <p class="text-white/30 font-medium mt-2">開發歷程與學習點滴 (內容整理中)</p>
            </div>
          </div>
        </div>
      
        <div class="flex flex-col gap-4 md:hidden">
          <a href="https://jason111nn.github.io/" target="_blank" rel="noreferrer"
            class="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 shadow-lg active:scale-95 transition-transform">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-[#4A677D]/10 flex items-center justify-center text-[#4A677D]">
                <i class="fa-solid fa-layer-group"></i>
              </div>
              <div>
                <h4 class="font-black text-[#111827]">我的 BLOG 作品集</h4>
                <p class="text-[10px] text-[#4A677D] font-bold uppercase tracking-widest">製作整理中</p>
              </div>
            </div>
            <i class="fa-solid fa-chevron-right text-gray-300"></i>
          </a>
        
          <div class="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm opacity-60">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-600">
                <i class="fa-solid fa-pen-nib"></i>
              </div>
              <div>
                <h4 class="font-black text-gray-600">專題紀錄、心得與感想</h4>
                <p class="text-[10px] text-gray-600 font-bold uppercase tracking-widest">整理中 (尚未開放)</p>
              </div>
            </div>
            <i class="fa-solid fa-lock text-gray-300 text-xs"></i>
          </div>
        </div>
      </section>

      <!-- Section 1: 問題定義與研究動機 (The Problem) -->
      <section id="problem" class="section-reveal py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div class="lg:col-span-5 space-y-7">
            <div class="space-y-3">
              <p class="text-[10px] font-mono tracking-[0.5em] uppercase text-gray-600">The Problem</p>
              <h2 class="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">等紅燈滑手機</h2>
              <div class="w-16 h-1.5 bg-[#4A677D] rounded-full"></div>
            </div>
            <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              路口停等期間，低頭操作手機會造成「燈號切換 → 起步反應」的延遲，累積成後方車流衝突與追撞風險。
              LUD 將號誌資訊以 <strong>V2I</strong> 思維轉成<strong>主動提醒</strong>，讓使用者不用抬頭搜尋燈號，也能同步掌握倒數。
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="tag in ['場景再現：分心造成起步延遲', '痛點數據：事故統計佐證', '解法定義：V2I 主動提醒', '目標：降低路口衝突風險']" :key="tag"
                class="flex items-center gap-3 font-black text-xs text-[#4A677D] bg-[#4A677D]/5 p-4 rounded-xl border border-[#4A677D]/10">
                <i class="fa-solid fa-circle-check"></i> {{ tag }}
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden group">
              <div class="p-6 flex items-center justify-between">
                <div>
                  <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Evidence</p>
                  <p class="text-xl font-black tracking-tight text-[#111827] mt-1">歷年交通事故統計</p>
                </div>
                <i class="fa-solid fa-chart-simple text-[#4A677D]"></i>
              </div>
              <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                <img :src="siteImg('behavior_analysis.png')" class="w-full h-[240px] object-contain rounded-xl" alt="歷年交通事故統計圖" loading="lazy" decoding="async" width="800" height="240">
              </div>
            </div>

            <div class="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden group">
              <div class="p-6 flex items-center justify-between">
                <div>
                  <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Context</p>
                  <p class="text-xl font-black tracking-tight text-[#111827] mt-1">場景與報導引用</p>
                </div>
                <i class="fa-solid fa-newspaper text-[#8C7355]"></i>
              </div>
              <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                <img :src="siteImg('news.png')" class="w-full h-[240px] object-cover rounded-xl" alt="低頭族情境與報導" loading="lazy" decoding="async" width="800" height="240">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: 核心技術與數據協議 (The Technology) -->
      <section id="tech" class="py-24 md:py-32 bg-white/50 border-y border-gray-200 px-6 md:px-12">
        <div class="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div class="text-center space-y-4">
            <h2 class="text-3xl md:text-4xl font-black tracking-widest text-[#111827]">THE TECHNOLOGY</h2>
            <p class="text-[#4A677D] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">ESP32 · Optocoupler · BLE 5-Byte · Android Receiver</p>
          </div>

          <!-- Hardware: ESP32 + Optocoupler -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div class="lg:col-span-5 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
              <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Hardware (RSU)</p>
              <h3 class="text-2xl md:text-3xl font-black tracking-tight text-[#111827] mt-2">ESP32 控制端</h3>
              <p class="text-gray-600 font-medium mt-4 leading-relaxed">
                以 ESP32 作為路側單元核心，負責同步處理交通號誌的邏輯控制與資料傳輸。系統在執行燈號切換與秒數倒數的同時，透過 <strong>BLE (低功耗藍牙) 非連線式廣播</strong>技術，將相位狀態與剩餘秒數即時推播至使用者的行動裝置，於模型中完美驗證了低延遲的 V2I 車路協同架構。
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <span class="px-3 py-1 rounded-full bg-[#8C7355]/10 text-[#8C7355] text-xs font-black">Optocoupler Isolation</span>
                <span class="px-3 py-1 rounded-full bg-[#4A677D]/10 text-[#4A677D] text-xs font-black">Non-connectable Advertising</span>
                <span class="px-3 py-1 rounded-full bg-[#111827]/5 text-[#111827] text-xs font-black border border-gray-200">1s Push Update</span>
              </div>
            </div>

            <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                <div class="p-6 flex items-center justify-between">
                  <div>
                    <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Circuit</p>
                    <p class="text-xl font-black tracking-tight text-[#111827] mt-1">電路配置圖</p>
                  </div>
                  <i class="fa-solid fa-microchip text-[#8C7355]"></i>
                </div>
                <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                  <img :src="siteImg('circuit_design.png')" class="w-full h-[240px] object-cover rounded-xl" alt="電路配置圖" loading="lazy" decoding="async" width="800" height="240">
                </div>
              </div>

              <div class="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                <div class="p-6 flex items-center justify-between">
                  <div>
                    <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Wiring</p>
                    <p class="text-xl font-black tracking-tight text-[#111827] mt-1">麵包板接線實測</p>
                  </div>
                  <i class="fa-solid fa-plug-circle-bolt text-[#4A677D]"></i>
                </div>
                <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                  <img :src="siteImg('breadboard.png')" class="w-full h-[240px] object-cover rounded-xl" alt="麵包板接線" loading="lazy" decoding="async" width="800" height="240">
                </div>
              </div>
            </div>
          </div>

          <!-- Protocol: 5 bytes -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div class="lg:col-span-6 bg-[#111827] rounded-[2rem] p-8 border border-white/5 shadow-xl text-white overflow-hidden">
              <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-white/70">BLE Advertising Payload</p>
              <h3 class="text-2xl md:text-3xl font-black mt-2">5-Byte 極簡封包協議</h3>
              <p class="text-white/70 font-medium mt-4 leading-relaxed">
                將辨識碼、相位與倒數高度壓縮，讓訊息在高干擾環境下仍能穩定、快速、可解析。
              </p>

              <div class="mt-6 bg-black/40 rounded-2xl p-5 border border-white/10 font-mono text-xs">
                <p class="text-white/70">// Example (live simulated)</p>
                <p class="mt-2 tracking-[0.25em] text-base">0xFFFF 0x01 0x0{{ mockTimer.toString(16).toUpperCase() }}</p>
              </div>

              <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p class="text-[10px] tracking-[0.3em] uppercase font-mono text-white/70">Byte 0-1</p>
                  <p class="mt-2 font-black">識別碼</p>
                  <p class="text-white/60 text-sm mt-1">固定標記，用於接收端過濾來源。</p>
                </div>
                <div class="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p class="text-[10px] tracking-[0.3em] uppercase font-mono text-white/70">Byte 2-3</p>
                  <p class="mt-2 font-black">號誌相位</p>
                  <p class="text-white/60 text-sm mt-1">承載路口狀態/相位資訊。</p>
                </div>
                <div class="rounded-2xl bg-white/5 border border-white/10 p-4 sm:col-span-2">
                  <p class="text-[10px] tracking-[0.3em] uppercase font-mono text-white/70">Byte 4</p>
                  <p class="mt-2 font-black">即時倒數</p>
                  <p class="text-white/60 text-sm mt-1">每秒更新，UI 直接同步顯示。</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Protocol Diagram</p>
                  <h3 class="text-2xl font-black tracking-tight text-[#111827] mt-2">封包結構圖</h3>
                </div>
                <i class="fa-solid fa-box-open text-[#8C7355]"></i>
              </div>
              <div class="mt-6 bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100">
                <img :src="siteImg('packet_5byte.png')" class="w-full h-[320px] object-contain rounded-xl" alt="5-Byte 封包結構" loading="lazy" decoding="async" width="900" height="320">
              </div>
            </div>
          </div>

          <!-- Android Receiver -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div class="lg:col-span-5 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
              <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Android Receiver</p>
              <h3 class="text-2xl md:text-3xl font-black tracking-tight text-[#111827] mt-2">Jetpack Compose 解析與同步</h3>
              <p class="text-gray-600 font-medium mt-4 leading-relaxed">
                Android 端以 Jetpack Compose 實作 UI，解析 BLE 廣播後即時更新倒數與提示狀態，確保體感零時差的同步體驗。
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <span class="px-3 py-1 rounded-full bg-[#4A677D]/10 text-[#4A677D] text-xs font-black">BLE Scan Filter</span>
                <span class="px-3 py-1 rounded-full bg-[#4A677D]/10 text-[#4A677D] text-xs font-black">State-driven UI</span>
                <span class="px-3 py-1 rounded-full bg-[#8C7355]/10 text-[#8C7355] text-xs font-black">Compose</span>
              </div>
            </div>
            <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                <div class="p-6 flex items-center justify-between">
                  <div>
                    <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Dev</p>
                    <p class="text-xl font-black tracking-tight text-[#111827] mt-1">Android 開發畫面</p>
                  </div>
                  <i class="fa-brands fa-android text-[#4A677D]"></i>
                </div>
                <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                  <img :src="siteImg('android_dev.png')" class="w-full h-[240px] object-cover rounded-xl" alt="Android 開發畫面" loading="lazy" decoding="async" width="800" height="240">
                </div>
              </div>
              <div class="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                <div class="p-6 flex items-center justify-between">
                  <div>
                    <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">UI</p>
                    <p class="text-xl font-black tracking-tight text-[#111827] mt-1">接收端提示介面</p>
                  </div>
                  <i class="fa-solid fa-mobile-screen-button text-[#8C7355]"></i>
                </div>
                <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                  <img :src="siteImg('app_mockup.png')" class="w-full h-[240px] object-contain rounded-xl" alt="App 介面" loading="lazy" decoding="async" width="800" height="240">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: 實作成果與模型驗證 (The Prototype) -->
      <section id="prototype" class="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="text-center mb-14 md:mb-20 space-y-4">
          <h2 class="text-3xl md:text-4xl font-black tracking-widest text-[#111827]">THE PROTOTYPE</h2>
          <p class="text-[#4A677D] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">硬體原型 · 十字路口模型 · 實測數據</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div class="lg:col-span-4 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
            <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Field Result</p>
            <h3 class="text-2xl font-black tracking-tight text-[#111827] mt-2">實測數據</h3>
            <div class="grid grid-cols-1 gap-4 mt-6">
              <div class="rounded-2xl bg-[#F8F9FA] border border-gray-100 p-5 text-center shadow-inner">
                <p class="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-600">傳輸延遲</p>
                <p class="mt-3 text-4xl font-black tracking-tighter text-[#111827]">&lt;200<span class="text-lg opacity-70">ms</span></p>
              </div>
              <div class="rounded-2xl bg-[#F8F9FA] border border-gray-100 p-5 text-center shadow-inner">
                <p class="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-600">通訊範圍</p>
                <p class="mt-3 text-4xl font-black tracking-tighter text-[#111827]">3<span class="text-lg opacity-70">m</span></p>
              </div>
              <div class="rounded-2xl bg-[#F8F9FA] border border-gray-100 p-5 text-center shadow-inner">
                <p class="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-600">封包</p>
                <p class="mt-3 text-4xl font-black tracking-tighter text-[#111827]">5<span class="text-lg opacity-70">B</span></p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
              <div class="p-6 flex items-center justify-between">
                <div>
                  <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Firmware</p>
                  <p class="text-xl font-black tracking-tight text-[#111827] mt-1">Arduino / 韌體實作</p>
                </div>
                <i class="fa-solid fa-code text-[#4A677D]"></i>
              </div>
              <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                <img :src="siteImg('arduino_code.png')" class="w-full h-[240px] object-cover rounded-xl" alt="Arduino 程式碼" loading="lazy" decoding="async" width="800" height="240">
              </div>
            </div>
            <div class="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
              <div class="p-6 flex items-center justify-between">
                <div>
                  <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Manufacturing</p>
                  <p class="text-xl font-black tracking-tight text-[#111827] mt-1">3D 列印外殼</p>
                </div>
                <i class="fa-solid fa-cube text-[#8C7355]"></i>
              </div>
              <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                <img :src="siteImg('3d_print.png')" class="w-full h-[240px] object-cover rounded-xl" alt="3D 列印外殼" loading="lazy" decoding="async" width="800" height="240">
              </div>
            </div>
            <div class="md:col-span-2 bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
              <div class="p-6 flex items-center justify-between">
                <div>
                  <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">Validation</p>
                  <p class="text-xl font-black tracking-tight text-[#111827] mt-1">十字路口模型驗證</p>
                </div>
                <i class="fa-solid fa-road text-[#111827]"></i>
              </div>
              <div class="bg-[#F8F9FA] border-t border-gray-100 p-5">
                <img :src="siteImg('final_model.png')" class="w-full h-[320px] object-contain rounded-xl" alt="十字路口模型完工照" loading="lazy" decoding="async" width="960" height="320">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: 未來展望與擴充方向 (The Vision) -->
      <section id="vision" class="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="text-center mb-14 md:mb-20 space-y-4">
          <h2 class="text-3xl md:text-4xl font-black tracking-widest text-[#111827]">THE VISION</h2>
          <p class="text-[#4A677D] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">iOS · Data · V2I · In-vehicle devices</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          <div class="lg:col-span-4 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
            <div class="w-14 h-14 rounded-2xl bg-[#4A677D]/10 text-[#4A677D] flex items-center justify-center border border-[#4A677D]/10">
              <i class="fa-brands fa-apple text-2xl"></i>
            </div>
            <h3 class="text-2xl font-black tracking-tight text-[#111827] mt-5">iOS 版開發進度</h3>
            <p class="text-gray-600 font-medium mt-3 leading-relaxed">
              以穩定的接收與 UI 同步為目標，補齊跨平台能力。
            </p>
          </div>

          <div class="lg:col-span-4 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
            <div class="w-14 h-14 rounded-2xl bg-[#8C7355]/10 text-[#8C7355] flex items-center justify-center border border-[#8C7355]/10">
              <i class="fa-solid fa-database text-2xl"></i>
            </div>
            <h3 class="text-2xl font-black tracking-tight text-[#111827] mt-5">大數據交通分析</h3>
            <p class="text-gray-600 font-medium mt-3 leading-relaxed">
              透過去識別化數據，量化「起步延遲」改善幅度，反饋到路口優化策略。
            </p>
          </div>

          <div class="lg:col-span-4 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
            <div class="w-14 h-14 rounded-2xl bg-[#111827]/10 text-[#111827] flex items-center justify-center border border-gray-200">
              <i class="fa-solid fa-road-circle-check text-2xl"></i>
            </div>
            <h3 class="text-2xl font-black tracking-tight text-[#111827] mt-5">V2I 深度介接</h3>
            <p class="text-gray-600 font-medium mt-3 leading-relaxed">
              與城市路口控制箱整合，提升部署彈性與可擴充性。
            </p>
          </div>

          <div class="lg:col-span-12 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p class="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-600">In-vehicle</p>
                <h3 class="text-2xl md:text-3xl font-black tracking-tight text-[#111827] mt-2">整合進車載設備（行車記錄器）</h3>
                <p class="text-gray-600 font-medium mt-3 leading-relaxed max-w-3xl">
                  未來將接收邏輯封裝至行車記錄器或車載顯示器，透過 Overlay/提示音等方式，打造更直覺的抬頭/低頭提醒體驗。
                </p>
              </div>
              <router-link to="/pdf" class="shrink-0 px-6 py-3 rounded-xl bg-[#111827] text-white font-bold hover:bg-[#4A677D] transition-colors flex items-center justify-center gap-2">
                查看完整海報與匯出
                <i class="fa-solid fa-arrow-right"></i>
              </router-link>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div class="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-5 overflow-hidden">
                <div class="flex items-center justify-between mb-4">
                  <p class="text-sm font-black text-[#111827]">資料結構升級</p>
                  <i class="fa-solid fa-layer-group text-[#8C7355]"></i>
                </div>
                <img :src="siteImg('data_structure.png')" class="w-full h-[220px] object-contain rounded-xl" alt="資料結構升級" loading="lazy" decoding="async" width="800" height="220">
              </div>
              <div class="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-5 overflow-hidden">
                <div class="flex items-center justify-between mb-4">
                  <p class="text-sm font-black text-[#111827]">V2I 概念</p>
                  <i class="fa-solid fa-network-wired text-[#4A677D]"></i>
                </div>
                <img :src="siteImg('v2i_concept.png')" class="w-full h-[220px] object-contain rounded-xl" alt="V2I 概念圖" loading="lazy" decoding="async" width="800" height="220">
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#111827] py-20 text-center px-8 border-t border-white/5">
      <div class="max-w-4xl mx-auto space-y-10">
        <div class="space-y-3">
          <h2 class="text-3xl font-black text-white tracking-[0.2em]">LUD System</h2>
          <p class="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase">新北高工資訊科 / 朱冠昇 (JASON111NN) / 2026</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a href="https://github.com/jason111nn/lud-transportation" target="_blank" rel="noreferrer"
            class="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-xl transition-all border border-white/10">
            <i class="fa-brands fa-github text-[#4A677D] text-lg"></i>
            <span class="font-bold tracking-[0.1em] font-mono text-xs">GitHub Repo</span>
          </a>
          <a href="mailto:jason5j288@gmail.com"
            class="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-xl transition-all border border-white/10">
            <i class="fa-solid fa-envelope text-[#4A677D] text-lg"></i>
            <span class="font-bold tracking-[0.1em] font-mono text-xs">Email</span>
          </a>
          <a href="https://jason111nn.github.io/lud-transportation/" target="_blank" rel="noreferrer"
            class="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-xl transition-all border border-white/10">
            <i class="fa-solid fa-globe text-[#4A677D] text-lg"></i>
            <span class="font-bold tracking-[0.1em] font-mono text-xs">Live Demo</span>
          </a>
        </div>

        <div class="text-white/60 text-xs font-mono leading-relaxed max-w-3xl mx-auto">
          Website developed by <span class="text-white/80 font-bold">Jason111nn</span> using Vue 3, Vite, and GSAP for dynamic monitoring simulation.
        </div>

        <div class="text-white/50 text-xs font-mono">
          <a class="underline hover:text-white/80 transition-colors"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hant" target="_blank" rel="noreferrer">
            CC BY-NC-SA 4.0
          </a>
          <span class="mx-2">·</span>
          © {{ currentYear }} All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { gsap } from 'gsap'
import { siteImg } from '../utils/siteImages'

const baseUrl = import.meta.env.BASE_URL

const showHeader = ref(false)
const mockTimer = ref(15)
const apkVersion = 'v1.0.0'
const releaseHighlight = '極低延遲藍牙廣播 1.0：Non-connectable 廣播 · 5-Byte 協議 · 倒數同步'
const currentYear = new Date().getFullYear()

const apkUrl = 'https://github.com/jason111nn/lud-transportation/releases/download/v1.0.0/LUD.apk'
const inoUrl = 'https://github.com/jason111nn/lud-transportation/releases/download/v1.0.0/LUD_Firmware_v1.0.ino'
const specUrl = `${baseUrl}${encodeURIComponent('作品說明書.pdf')}`

let mockIntervalId = null
const startMockData = () => {
  mockIntervalId = window.setInterval(() => {
    if (mockTimer.value > 0) mockTimer.value--
    else mockTimer.value = 15
  }, 1000)
}

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const onScroll = () => {
  showHeader.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  startMockData()

  const tl = gsap.timeline()
  tl.from('.hero-text', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
    .from('.hero-visual', { x: 40, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.7')
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (mockIntervalId) window.clearInterval(mockIntervalId)
})
</script>

<style scoped>
/* 避免特殊符號導致排版崩壞 */
.whitespace-nowrap {
  white-space: nowrap;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes softPulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.4); /* 產生向外擴散的視覺感 */
    opacity: 0;
  }
}
.animate-soft-pulse {
  position: relative; /* 必加，讓光圈以按鈕為中心 */
  z-index: 1;
}

.animate-soft-pulse::after {
  content: '';
  position: absolute;
  inset: 0; /* 填滿整個按鈕範圍 */
  border-radius: inherit; /* 自動繼承按鈕的 rounded-full 或 rounded-xl */
  background: rgba(74, 103, 125, 0.5); /* 你的 LUD 主色調 */
  z-index: -1; /* 躲在按鈕本體後面 */
  animation: softPulse 2.2s ease-out infinite;
}

@keyframes bounceSoft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}
.animate-bounce-soft {
  animation: bounceSoft 1.4s ease-in-out infinite;
}

/* 響應式字體微調 */
@media (max-width: 640px) {
  .hero-title {
    line-height: 1.2;
  }
}
</style>