<template>
  <div class="min-h-screen bg-[#F8F9FA] text-[#1F2937] font-sans selection:bg-[#4A677D] selection:text-white relative">
    
    <nav class="fixed top-0 w-full z-50 px-8 py-6 transition-all duration-500"
      :class="showHeader ? 'bg-[#111827]/80 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto flex justify-between items-center text-white">
        <h2 class="text-2xl font-black tracking-tighter">
          LUD <span class="text-[#4A677D] text-sm ml-2 font-bold tracking-[0.2em] uppercase">Low-head Up Display</span>
        </h2>
        <div class="flex items-center gap-8">
          <a href="mailto:jason5j288@gmail.com" class="hidden md:block text-xs font-mono opacity-50 hover:opacity-100 transition-opacity">jason5j288@gmail.com</a>
          <router-link to="/pdf" class="bg-[#4A677D] hover:bg-white hover:text-[#111827] text-white px-6 py-2 text-xs font-bold transition-all rounded-full border border-white/10">
            開啟工作區
          </router-link>
        </div>
      </div>
    </nav>

    <header class="relative h-[90vh] w-full bg-[#111827] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 opacity-10" 
        style="background-image: linear-gradient(#4A677D 1px, transparent 1px), linear-gradient(90deg, #4A677D 1px, transparent 1px); background-size: 50px 50px;">
      </div>
      
      <div class="z-10 max-w-7xl w-full px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-7 text-left space-y-10 hero-text">
          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#4A677D]/20 border border-[#4A677D]/30 text-[#4A677D] font-black text-[10px] tracking-[0.3em] uppercase">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-[#4A677D] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#4A677D]"></span>
            </span>
            V2I Smart Traffic Infrastructure
          </div>
          <h1 class="text-7xl md:text-8xl font-black text-white leading-none tracking-tighter">
            智慧預警<br/><span class="text-[#4A677D]">LUD 系統</span>
          </h1>
          <p class="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
            將傳統交通號誌「主動化」。透過低功耗藍牙技術，為用路人打造零延遲的安全防線。
          </p>
          <div class="flex gap-6">
            <router-link to="/pdf" class="px-10 py-5 bg-[#4A677D] text-white font-bold rounded-2xl hover:bg-white hover:text-[#111827] transition-all shadow-xl flex items-center gap-3 group">
              進入專案工作區
              <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </router-link>
          </div>
        </div>

        <div class="lg:col-span-5 relative hero-visual hidden lg:block">
          <div class="bg-gray-800/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <div class="flex justify-between items-center mb-10">
              <div class="space-y-1">
                <p class="text-white font-bold tracking-widest text-sm">數據廣播狀態</p>
                <p class="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em]">Non-connectable Advertising</p>
              </div>
              <i class="fa-solid fa-tower-broadcast text-[#4A677D] text-2xl animate-pulse"></i>
            </div>
            
            <div class="space-y-10">
              <div class="flex items-center gap-8">
                <div class="w-20 h-20 rounded-full border-4 border-[#4A677D]/30 flex items-center justify-center shadow-[0_0_20px_rgba(74,103,125,0.3)]">
                  <div class="text-white text-4xl font-black font-mono">{{ mockTimer }}</div>
                </div>
                <div>
                  <p class="text-[#4A677D] font-mono text-xs font-bold uppercase tracking-widest mb-1">Packet Byte 4</p>
                  <p class="text-white text-2xl font-black">即時相位倒數</p>
                </div>
              </div>
              
              <div class="bg-black/60 p-5 rounded-2xl font-mono text-xs border border-white/5 space-y-2 shadow-inner">
                <p class="text-gray-500">// BLE Raw Data Package</p>
                <p class="text-[#4A677D] text-lg tracking-[0.2em]">
                  0xFFFF 0x01 0x0{{ mockTimer.toString(16).toUpperCase() }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="relative z-10">
      
      <section class="section-reveal py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div class="relative group">
          <div class="overflow-hidden rounded-[3rem] shadow-2xl border-[16px] border-white transition-transform duration-700 group-hover:scale-[1.02]">
            <img src="/img/behavior_analysis.png" class="w-full grayscale hover:grayscale-0 transition-all duration-1000" alt="行為分析">
          </div>
          <div class="absolute -bottom-8 -right-8 bg-[#111827] text-white px-8 py-6 rounded-3xl shadow-2xl">
            <p class="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1">Issue Solving</p>
            <p class="text-xl font-black tracking-tighter">低頭族安全預警</p>
          </div>
        </div>
        
        <div class="space-y-10">
          <div class="space-y-4">
            <h3 class="text-5xl font-black text-[#111827] tracking-tighter">研究動機</h3>
            <div class="w-16 h-1.5 bg-[#4A677D] rounded-full"></div>
          </div>
          <p class="text-xl text-gray-600 leading-relaxed font-medium">
            針對現代人「Smombie (低頭族)」在路口分心操作手機，導致未察覺燈號變換起步延遲的問題。我們開發出 LUD 系統，實現號誌數據的實時主動推播。
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div v-for="tag in ['低延遲廣播', '數據同步化', '高精度預警', 'V2I 車路協同']" :key="tag" 
              class="flex items-center gap-3 font-black text-sm text-[#4A677D] bg-[#4A677D]/5 p-4 rounded-xl">
              <i class="fa-solid fa-circle-check"></i> {{ tag }}
            </div>
          </div>
        </div>
      </section>

      <section class="py-32 bg-white/50 border-y border-gray-200 px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-24 space-y-4">
            <h2 class="text-4xl font-black tracking-widest text-[#111827]">TECHNICAL ARCHITECTURE</h2>
            <p class="text-[#4A677D] font-bold tracking-[0.4em] uppercase text-xs">專案核心技術模組</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div class="lg:col-span-4 space-y-4">
              <button v-for="(section, idx) in technicalSections" :key="idx" 
                @click="activeSection = idx"
                class="w-full text-left p-8 rounded-[2rem] transition-all duration-500 border-2"
                :class="activeSection === idx ? 'bg-[#111827] text-white border-transparent shadow-2xl translate-x-4' : 'bg-white border-gray-100 hover:border-[#4A677D]/30'">
                <span class="block text-[10px] font-mono opacity-40 mb-2 tracking-[0.3em]">MODULE 0{{ idx + 1 }}</span>
                <h4 class="text-2xl font-black tracking-tight">{{ section.title }}</h4>
              </button>
            </div>

            <div class="lg:col-span-8 bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 relative min-h-[500px] flex flex-col justify-center">
              <transition name="fade-slide" mode="out-in">
                <div :key="activeSection">
                  <div v-if="activeSection === 0" class="space-y-8 animate-fade-in">
                    <div class="text-lg leading-relaxed text-gray-600 font-medium" v-html="technicalSections[0].content"></div>
                    <img src="/img/system_arch.png" class="rounded-2xl shadow-lg border-8 border-[#F8F9FA] bg-white p-6 max-h-[300px] w-full object-contain mx-auto">
                  </div>
                  
                  <div v-if="activeSection === 1" class="space-y-10 animate-fade-in">
                    <h4 class="text-2xl font-black text-[#4A677D] border-l-4 border-[#4A677D] pl-4">5-Byte 廣播協定設計</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div v-for="packet in packetStructure" :key="packet.bytes" class="bg-[#111827] p-8 rounded-3xl text-white shadow-2xl">
                        <span class="inline-block px-3 py-1 rounded bg-[#4A677D] text-[10px] font-mono mb-6 uppercase tracking-widest">{{ packet.bytes }}</span>
                        <p class="font-bold text-xl mb-3">{{ packet.label }}</p>
                        <p class="text-xs opacity-50 leading-relaxed">{{ packet.desc }}</p>
                      </div>
                    </div>
                  </div>

                  <div v-if="activeSection === 2" class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-full animate-fade-in">
                    <div v-for="stat in performanceStats" :key="stat.label" class="text-center p-12 bg-[#F8F9FA] rounded-[3rem] border border-gray-100 shadow-inner">
                      <p class="text-[10px] font-black text-[#4A677D] mb-6 uppercase tracking-[0.3em]">{{ stat.label }}</p>
                      <p class="text-6xl font-black text-[#111827] tracking-tighter">{{ stat.value }}</p>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#111827] py-24 text-center px-8 border-t border-white/5">
      <div class="max-w-4xl mx-auto space-y-12">
        <div class="space-y-4">
          <h2 class="text-4xl font-black text-white tracking-[0.2em]">LUD SYSTEM 2026</h2>
          <p class="text-gray-600 font-mono text-xs tracking-[0.4em] uppercase">專題競賽實作紀錄</p>
        </div>
        <div class="flex justify-center">
          <a href="mailto:jason5j288@gmail.com" class="flex items-center gap-5 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl transition-all border border-white/10 group">
            <i class="fa-solid fa-envelope text-[#4A677D] text-xl"></i>
            <span class="font-bold tracking-[0.2em] font-mono text-sm lowercase">jason5j288@gmail.com</span>
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

// 模擬數據更新：15秒循環
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

  // GSAP 快速俐落進場
  const tl = gsap.timeline()
  tl.from('.hero-text', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
    .from('.hero-visual', { x: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.7')
})

// ================= 技術內容定義 =================
const technicalSections = [
  { id: '01', title: '軟硬體系統架構', content: `
    <p>● <strong>核心主控：</strong> 採用 ESP32 NodeMCU-32S 執行 BLE 廣播任務。</p>
    <p>● <strong>硬體驅動：</strong> 利用 IC 7447 驅動七段顯示器，確保號誌數據與物理顯示同步。</p>
    <p>● <strong>韌體開發：</strong> 採用中斷服務程式 (ISR) 機制，確保封包發送的高優先權與精準度。</p>
  `},
  { id: '02', title: '5-Byte 廣播協定' },
  { id: '03', title: '系統性能指標' }
]

const packetStructure = [
  { bytes: 'B0-B1', label: '識別碼', desc: '0xFFFF 識別碼，由 App 進行過濾確保排除雜訊。' },
  { bytes: 'B2-B3', label: '號誌相位', desc: '傳輸路口 A、B 兩向之即時號誌切換狀態。' },
  { bytes: 'B4', label: '倒數秒值', desc: '傳輸目前相位的剩餘秒數，供 App 端渲染。' }
]

const performanceStats = [
  { label: '平均延遲', value: '< 200ms' },
  { label: '穩定半徑', value: '3M' },
  { label: '提醒精度', value: '100%' }
]
</script>

<style scoped>
/* 內容切換過渡 */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from { opacity: 0; transform: translateY(20px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-20px); }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>