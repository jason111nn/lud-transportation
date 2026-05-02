<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'

const baseUrl = import.meta.env.BASE_URL
const isLoading = ref(true)
const loadingProgress = ref(0)
const loadingStatus = ref('PREPARING_ASSETS')

const imageUrls = [
  `${baseUrl}img/og-image.png`,
  `${baseUrl}img/system_arch.png`,
  `${baseUrl}img/behavior_analysis.png`,
  `${baseUrl}img/final_model.png`,
  `${baseUrl}img/circuit_design.png`,
  `${baseUrl}img/packet_5byte.png`,
  `${baseUrl}img/news.png`,
  `${baseUrl}img/breadboard.png`,
  `${baseUrl}img/android_dev.png`,
  `${baseUrl}img/app_mockup.png`,
  `${baseUrl}img/arduino_code.png`,
  `${baseUrl}img/3d_print.png`,
  `${baseUrl}img/data_structure.png`,
  `${baseUrl}img/v2i_concept.png`,
  'https://jason111nn.github.io/og-image.jpg'
]

const loadedImagesCount = ref(0)
let finishTimerId = null

const formatAssetName = (url) => {
  const cleanUrl = url.split('?')[0]
  return cleanUrl.slice(cleanUrl.lastIndexOf('/') + 1).toUpperCase()
}

const updateScrollLock = (locked) => {
  // index.html 內有把 html/body 預設 overflow 設為 hidden
  // 這裡用 inline style 在載入結束時強制恢復可捲動
  document.documentElement.style.overflow = locked ? 'hidden' : 'auto'
  document.body.style.overflow = locked ? 'hidden' : 'auto'
}

const updateProgress = () => {
  if (imageUrls.length === 0) {
    loadingProgress.value = 100
    return
  }

  loadingProgress.value = Math.round((loadedImagesCount.value / imageUrls.length) * 100)
}

const preloadImage = (url) => new Promise((resolve) => {
  const img = new Image()

  img.onload = () => resolve({ url, ok: true })
  img.onerror = () => resolve({ url, ok: false })
  img.src = url
})

const finishLoading = () => {
  loadingProgress.value = 100
  loadingStatus.value = 'SYSTEM_READY'

  finishTimerId = window.setTimeout(() => {
    isLoading.value = false
    updateScrollLock(false)
  }, 500)
}

const preloadImages = async () => {
  if (imageUrls.length === 0) {
    finishLoading()
    return
  }

  for (const url of imageUrls) {
    loadingStatus.value = `LOADING_${formatAssetName(url)}`
    const result = await preloadImage(url)

    loadedImagesCount.value++
    updateProgress()
    loadingStatus.value = `${result.ok ? 'LOADED' : 'FAILED'}_${formatAssetName(url)}`
  }

  finishLoading()
}

onMounted(() => {
  updateScrollLock(true)

  const initialLoader = document.getElementById('initial-loader')
  if (initialLoader) {
    initialLoader.style.opacity = '0'
    window.setTimeout(() => initialLoader?.remove(), 500)
  }

  preloadImages()
})

onBeforeUnmount(() => {
  if (finishTimerId !== null) {
    clearTimeout(finishTimerId)
  }

  updateScrollLock(false)
})
</script>

<template>
  <Transition name="system-fade">
    <div v-if="isLoading" class="fixed inset-0 z-[100] bg-[#111827] flex flex-col items-center justify-center overflow-hidden">
      
      <div class="absolute w-80 h-80 border border-[#4A677D]/10 rounded-full animate-ping"></div>
      <div class="absolute w-[500px] h-[500px] border border-[#4A677D]/5 rounded-full animate-pulse"></div>

      <div class="relative z-10 flex flex-col items-center">
        <div class="mb-12 text-[#4A677D] drop-shadow-[0_0_15px_rgba(74,103,125,0.4)]">
          <i class="fa-solid fa-tower-broadcast text-7xl animate-pulse"></i>
        </div>

        <h2 class="text-white font-black tracking-[0.8em] text-2xl mb-8 pl-[0.8em]">LUD SYSTEM</h2>

        <div class="w-72 flex flex-col gap-2">
          <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px]">
            <div class="h-full bg-[#4A677D] rounded-full shadow-[0_0_15px_#4A677D] transition-all duration-500 ease-out"
                 :style="{ width: `${loadingProgress}%` }"></div>
          </div>
        </div>

        <div class="mt-10 flex flex-col items-center gap-2">
          <p class="font-mono text-[10px] text-[#4A677D] opacity-90 tracking-[0.2em] uppercase">
            <span class="text-white animate-pulse">>></span> {{ loadingStatus }}
          </p>
          <div class="text-[14px] font-black text-white font-mono tracking-tighter">
            [ {{ loadingProgress.toString().padStart(3, '0') }}% ]
          </div>
        </div>
      </div>

      <div class="absolute bottom-12 w-full flex flex-col items-center gap-2 opacity-20">
        <div class="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#4A677D] to-transparent"></div>
        <span class="text-[8px] text-white font-mono tracking-[0.5em]">INFRASTRUCTURE V1.0.0</span>
      </div>
    </div>
  </Transition>

  <router-view v-show="!isLoading" />
</template>

<style scoped>
.system-fade-leave-active {
  transition: all 0.9s cubic-bezier(0.7, 0, 0.3, 1);
}

.system-fade-leave-to {
  opacity: 0;
  filter: blur(20px) brightness(1.2);
  transform: scale(1.05);
}

.animate-ping {
  animation-duration: 3s;
}
</style>