<template>
  <div class="min-h-screen bg-[#F8F9FA] text-[#1F2937] font-sans selection:bg-[#4A677D] selection:text-white relative">
    
    <nav class="fixed top-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 transition-all duration-500"
      :class="showHeader ? 'bg-[#111827]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto flex justify-between items-center text-white">
        <h2 class="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2">
          LUD <span class="hidden sm:inline-block text-[#4A677D] text-xs font-bold tracking-[0.2em] uppercase border-l border-white/20 pl-2">Low-head Up Display</span>
        </h2>
        <div class="flex items-center gap-4 md:gap-8">
          <a href="mailto:jason5j288@gmail.com" class="hidden lg:block text-xs font-mono opacity-50 hover:opacity-100 transition-opacity">jason5j288@gmail.com</a>
          <router-link to="/pdf" class="bg-[#4A677D] hover:bg-white hover:text-[#111827] text-white px-5 py-2 text-xs font-bold transition-all rounded-full border border-white/10 shadow-lg">
            開啟海報預覽工作區
          </router-link>
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
          <h1 class="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter">
            智慧預警<br/><span class="text-[#4A677D]">LUD 系統</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
            將傳統交通號誌「主動化」。透過低功耗藍牙 (BLE) 廣播技術，為低頭族打造零延遲的安全防線，有效解決路口起步延遲問題。
          </p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/pdf" class="px-8 py-4 bg-[#4A677D] text-white font-bold rounded-xl hover:bg-white hover:text-[#111827] transition-all shadow-xl flex items-center gap-3 group">
              進入專案工作區
              <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </router-link>
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
    </header>

    <main class="relative z-10">
      <section class="section-reveal py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div class="relative group order-2 md:order-1">
          <div class="overflow-hidden rounded-[2.5rem] shadow-2xl border-[12px] border-white transition-transform duration-700 group-hover:scale-[1.02]">
            <img src="/img/behavior_analysis.png" class="w-full grayscale hover:grayscale-0 transition-all duration-1000" alt="行為分析">
          </div>
          <div class="absolute -bottom-6 -right-6 bg-[#111827] text-white px-6 py-4 md:px-8 md:py-6 rounded-3xl shadow-2xl">
            <p class="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Issue Solving</p>
            <p class="text-lg font-black tracking-tighter">低頭族安全預警</p>
          </div>
        </div>
        
        <div class="space-y-8 order-1 md:order-2">
          <div class="space-y-4">
            <h3 class="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">研究動機</h3>
            <div class="w-16 h-1.5 bg-[#4A677D] rounded-full"></div>
          </div>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            現代用路人等紅燈時常因操作手機而忽略燈號變換。我們利用藍牙廣播技術實作了 <strong>Vehicle-to-Infrastructure (V2I)</strong> 提醒系統，將傳統號誌從「被動觀察」轉向「主動預警」。
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="tag in ['低延遲廣播', '數據同步化', '高精度預警', 'V2I 車路協同']" :key="tag" 
              class="flex items-center gap-3 font-black text-xs text-[#4A677D] bg-[#4A677D]/5 p-4 rounded-xl border border-[#4A677D]/10">
              <i class="fa-solid fa-circle-check"></i> {{ tag }}
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 md:py-32 bg-white/50 border-y border-gray-200 px-6 md:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 md:mb-24 space-y-4">
            <h2 class="text-3xl md:text-4xl font-black tracking-widest text-[#111827]">TECHNICAL ARCHITECTURE</h2>
            <p class="text-[#4A677D] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">專案核心技術模組與邏輯</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div class="lg:col-span-4 space-y-3">
              <button v-for="(section, idx) in technicalSections" :key="idx" 
                @click="activeSection = idx"
                class="w-full text-left p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 border-2"
                :class="activeSection === idx ? 'bg-[#111827] text-white border-transparent shadow-2xl translate-x-2 md:translate-x-4' : 'bg-white border-gray-100 hover:border-[#4A677D]/30'">
                <span class="block text-[10px] font-mono opacity-40 mb-1 md:mb-2 tracking-[0.3em]">MODULE 0{{ idx + 1 }}</span>
                <h4 class="text-lg md:text-2xl font-black tracking-tight">{{ section.title }}</h4>
              </button>
            </div>

            <div class="lg:col-span-8 bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 relative min-h-[450px] md:min-h-[550px] flex flex-col justify-center">
              <transition name="fade-slide" mode="out-in">
                <div :key="activeSection">
                  <div v-if="activeSection === 0" class="space-y-6 md:space-y-8 animate-fade-in">
                    <div class="text-base md:text-lg leading-relaxed text-gray-600 font-medium" v-html="technicalSections[0].content"></div>
                    <div class="bg-[#F8F9FA] rounded-2xl p-4 md:p-6 border border-gray-100">
                      <img src="/img/system_arch.png" class="max-h-[250px] md:max-h-[300px] w-full object-contain mx-auto" alt="架構圖">
                    </div>
                  </div>
                  
                  <div v-if="activeSection === 1" class="space-y-8 md:space-y-10 animate-fade-in">
                    <h4 class="text-xl md:text-2xl font-black text-[#4A677D] border-l-4 border-[#4A677D] pl-4">5-Byte 廣播協定設計</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      <div v-for="packet in packetStructure" :key="packet.bytes" class="bg-[#111827] p-6 rounded-2xl md:rounded-3xl text-white shadow-xl flex flex-col">
                        <span class="inline-block w-fit px-3 py-1 rounded bg-[#4A677D] text-[10px] font-mono mb-4 md:mb-6 uppercase tracking-widest">{{ packet.bytes }}</span>
                        <p class="font-bold text-base md:text-xl mb-2">{{ packet.label }}</p>
                        <p class="text-xs opacity-50 leading-relaxed">{{ packet.desc }}</p>
                      </div>
                    </div>
                  </div>

                  <div v-if="activeSection === 2" class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch h-full animate-fade-in">
                    <div v-for="stat in performanceStats" :key="stat.label" class="flex flex-col justify-center text-center p-8 md:p-10 bg-[#F8F9FA] rounded-[2rem] border border-gray-100 shadow-inner">
                      <p class="text-[10px] font-black text-[#4A677D] mb-4 md:mb-6 uppercase tracking-[0.3em]">{{ stat.label }}</p>
                      <div class="flex items-baseline justify-center gap-1">
                        <span v-if="stat.value.includes('<')" class="text-2xl md:text-3xl font-black text-[#111827] opacity-40">&lt;</span>
                        <span class="text-4xl md:text-6xl font-black text-[#111827] tracking-tighter">
                          {{ stat.value.replace('<', '') }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#111827] py-20 text-center px-8 border-t border-white/5">
      <div class="max-w-4xl mx-auto space-y-10">
        <div class="space-y-3">
          <h2 class="text-3xl font-black text-white tracking-[0.2em]">LUD SYSTEM 2026</h2>
          <p class="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase">專題競賽實作紀錄</p>
        </div>
        <div class="flex justify-center">
          <a href="mailto:jason5j288@gmail.com" class="flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl transition-all border border-white/10 group">
            <i class="fa-solid fa-envelope text-[#4A677D] text-lg"></i>
            <span class="font-bold tracking-[0.1em] font-mono text-xs">jason5j288@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const showHeader = ref(false)
const activeSection = ref(0)
const mockTimer = ref(15)

// 模擬數據更新
const startMockData = () => {
  setInterval(() => {
    if (mockTimer.value > 0) mockTimer.value--
    else mockTimer.value = 15
  }, 1000)
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    showHeader.value = window.scrollY > 200
  })
  startMockData()

  const tl = gsap.timeline()
  tl.from('.hero-text', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
    .from('.hero-visual', { x: 40, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.7')
})

const technicalSections = [
  { id: '01', title: '軟硬體系統架構', content: `
    <p>● <strong>核心主控：</strong> 採用 ESP32 進行 BLE 非連線式廣播，確保數據傳輸具備物理級穩定性。</p>
    <p>● <strong>硬體驅動：</strong> 利用 IC 7447 驅動七段顯示器，實現硬體與軟體端的即時數據同步。</p>
    <p>● <strong>韌體開發：</strong> 採用中斷服務 (ISR) 機制，優化封包發送頻次與倒數精度。</p>
  `},
  { id: '02', title: '5-Byte 廣播協定' },
  { id: '03', title: '系統性能指標' }
]

const packetStructure = [
  { bytes: 'B0-B1', label: '識別碼', desc: '0xFFFF 固定標記，由 App 端進行數據過濾與正確性校驗。' },
  { bytes: 'B2-B3', label: '號誌相位', desc: '標註路口當前相位狀態 (例如：0x01 為通行階段)。' },
  { bytes: 'B4', label: '剩餘秒數', desc: '發送即時計時值，供接收端進行體感零時差的渲染。' }
]

const performanceStats = [
  { label: '平均延遲', value: '< 200ms' },
  { label: '穩定半徑', value: '3M' },
  { label: '提醒精度', value: '100%' }
]
</script>

<style scoped>
/* 避免特殊符號導致排版崩壞 */
.whitespace-nowrap {
  white-space: nowrap;
}

/* 內容切換過渡 */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from { opacity: 0; transform: translateY(15px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-15px); }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

/* 響應式字體微調 */
@media (max-width: 640px) {
  .hero-title {
    line-height: 1.2;
  }
}
</style>