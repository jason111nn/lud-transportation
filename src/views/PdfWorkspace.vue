<template>
  <div class="font-sans flex flex-col items-center justify-center overflow-auto"
    :class="exportPanel !== 'all' ? 'bg-white p-0! m-0! overflow-hidden! items-start justify-start' : 'bg-gray-900 min-h-screen w-full relative'">

    <!-- Top Header (開發預覽用) -->
    <div v-if="exportPanel === 'all'"
      class="absolute top-0 w-full h-16 bg-gray-800 text-white flex items-center px-8 justify-between shadow-md z-50 fixed">
      <div class="flex items-center gap-6">
        <router-link to="/"
          class="hover:text-[#4A677D] transition-colors font-bold tracking-widest flex items-center gap-2">
          <i class="fa-solid fa-arrow-left"></i> 返回
        </router-link>
        <span class="text-gray-500">|</span>
        <h2 class="font-bold tracking-widest text-[#4A677D]">LHD POSTER WORKSPACE - HIGH PRECISION</h2>
      </div>
      <div class="flex items-center gap-4">
        <a href="./poster.pdf" download="poster.pdf"
          class="bg-[#8C7355] text-white font-bold px-4 py-1 rounded text-xs">Download PDF</a>
      </div>
    </div>

    <!-- The Centering Container -->
    <div
      :class="exportPanel !== 'all' ? 'w-full h-full' : 'mt-16 relative w-full h-[calc(100vh-4rem)] overflow-auto bg-[#1a1a1a] p-[100px]'">

      <!-- Spacer for Scale(0.1) during preview -->
      <div
        :style="exportPanel === 'all' ? { width: `${2806 * zoomScale * 0.1}mm`, height: `${1206 * zoomScale * 0.1}mm`, position: 'relative' } : ''">

        <div id="poster-canvas" 
          class="box-border font-sans transition-transform duration-300 ease-out"
          style="will-change: transform; backface-visibility: hidden;"
          :class="exportPanel !== 'all' ? 'scale-100' : 'absolute top-0 left-0 origin-top-left'"
          :style="exportPanel === 'all' ? { transform: `scale(${zoomScale * 0.1})` } : {}">

          <!-- Inner Flex Layout with 50mm gaps -->
          <div class="h-h-total flex flex-row items-start relative text-[#333333]"
            :class="exportPanel === 'all' ? 'w-[2950mm] gap-[50mm]' : 'w-max'">

            <!-- ================= Column 1: 製作動機 (450mm) ================= -->
            <section v-if="exportPanel === 'all' || exportPanel === 'panel-1'"
              class="w-p-side h-h-total p-[40mm] flex flex-col justify-between relative shrink-0 bg-[#EADCC6] overflow-hidden">

              <div class="flex flex-col items-center">
                <h2
                  class="text-[100pt] font-black border-b-[8mm] border-[#946B6B] pb-[10mm] mb-[20mm] text-[#333333] text-center">
                  研究動機</h2>
                <p class="text-[60pt] font-bold text-center leading-relaxed text-[#333333]">
                  近年來越來越多人因為<strong class="text-[#946B6B]">分心</strong>，尤其是<strong
                    class="text-[#4A677D]">機車族群</strong>在等紅燈時常因操作手機、看導航或通話而忽略燈號切換，導致<strong
                    class="text-[#946B6B]">起步延遲</strong>甚至引發後車<strong class="text-[#946B6B]">追撞事故</strong>。
                </p>
              </div>

              <!-- Icon Tree (flex-1 fill space) -->
              <div class="relative flex-1 flex flex-col items-center py-[20mm]">
                <div class="absolute top-[10mm] bottom-[40mm] w-[8mm] bg-[#4A677D] -z-10 anim-line-v"></div>
                <div
                  class="absolute bottom-[20mm] w-0 h-0 border-l-[20mm] border-r-[20mm] border-t-[25mm] border-l-transparent border-r-transparent border-t-[#4A677D] anim-arrow">
                </div>

                <div class="flex flex-col justify-between h-full w-full items-center pb-[50mm] px-[30mm] gap-[20mm]">
                  <div
                    class="w-full bg-white border-[3mm] border-[#D1C4B2] rounded-[20mm] p-[10mm] flex items-center gap-[20mm] shadow-sm anim-icon z-10">
                    <div
                      class="w-[80mm] h-[80mm] shrink-0 bg-[#4A677D] rounded-[15mm] flex items-center justify-center text-white">
                      <i class="fa-solid fa-map-location-dot text-[40mm]"></i>
                    </div>
                    <span class="text-[65pt] font-black text-[#333333] flex-1 text-left px-[10mm]">查看導航</span>
                  </div>
                  <div
                    class="w-full bg-white border-[3mm] border-[#D1C4B2] rounded-[20mm] p-[10mm] flex items-center gap-[20mm] shadow-sm anim-icon z-10">
                    <div
                      class="w-[80mm] h-[80mm] shrink-0 bg-[#4A677D] rounded-[15mm] flex items-center justify-center text-white">
                      <i class="fa-solid fa-phone-volume text-[40mm]"></i>
                    </div>
                    <span class="text-[65pt] font-black text-[#333333] flex-1 text-left px-[10mm]">通話、聊天</span>
                  </div>
                  <div
                    class="w-full bg-white border-[3mm] border-[#D1C4B2] rounded-[20mm] p-[10mm] flex items-center gap-[20mm] shadow-sm anim-icon z-10">
                    <div
                      class="w-[80mm] h-[80mm] shrink-0 bg-[#4A677D] rounded-[15mm] flex items-center justify-center text-white">
                      <i class="fa-brands fa-facebook text-[40mm]"></i>
                    </div>
                    <span class="text-[65pt] font-black text-[#333333] flex-1 text-left px-[10mm]">瀏覽社群</span>
                  </div>
                </div>
              </div>

              <!-- Alert Box -->
              <div class="w-full mb-[30mm] anim-alert flex justify-center">
                <div
                  class="bg-[#946B6B] border-[3mm] border-[#D1C4B2] rounded-[15mm] px-[25mm] py-[15mm] flex items-center justify-center gap-[15mm]">
                  <i class="fa-solid fa-triangle-exclamation text-[25mm] text-white"></i>
                  <div class="text-[70pt] font-black text-white whitespace-nowrap">交通衝突點</div>
                </div>
              </div>

              <!-- 1. 行為分析圖表 -->
              <div class="w-full flex flex-col group">
                <div
                  class="bg-[#4A677D] text-white text-[40pt] px-[15mm] py-[8mm] rounded-t-[10mm] font-bold border-[3mm] border-b-0 border-[#D1C4B2] w-max">
                  歷年交通事故統計圖</div>
                <div
                  class="w-full h-auto min-h-[200mm] bg-[#EADCC6] border-[3mm] border-[#D1C4B2] rounded-b-[15mm] rounded-tr-[15mm] flex items-center justify-center relative overflow-hidden anim-img">
                  <span
                    class="absolute text-[40pt] text-[#4A677D] font-bold z-0">/img/<br />behavior_analysis.png</span>
                  <img :src="`${baseUrl}img/behavior_analysis.png`"
                    class="relative w-full h-auto object-contain z-10 transition-opacity duration-300"
                    style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'"
                    alt="歷年交通事故統計圖">
                </div>
              </div>
            </section>

            <!-- ================= Column 2: 標題與摘要 (950mm) ================= -->
            <section v-if="exportPanel === 'all' || exportPanel === 'panel-2'"
              class="w-p-main h-h-total p-[40mm] flex flex-col justify-between relative shrink-0 bg-[#EADCC6] overflow-hidden">

              <!-- ================= 區塊 2.1: 系統摘要與架構 ================= -->
              <div class="flex flex-col gap-[40mm] h-[640mm] shrink-0 box-border">
                <!-- Title -->
                <h1 class="text-[180pt] font-black leading-tight tracking-tight text-[#333333]">
                  低頭顯示器<br />
                  <span class="text-[#4A677D] text-[150pt]">道路交通號誌提醒系統</span>
                </h1>

                <div class="flex gap-[40mm] min-h-[300mm]">
                  <!-- Abstract -->
                  <div class="flex-1 flex flex-col">
                    <div
                      class="flex-1 bg-[#EADCC6] p-[35mm] border-[3mm] border-l-[15mm] border-[#4A677D] rounded-[20mm]">
                      <h3 class="text-[100pt] font-black mb-[20mm] text-[#333333]">摘要</h3>
                      <p class="text-[60pt] leading-relaxed font-bold text-[#333333]">
                        為了優化智慧城市中的交通體驗，專題建構了一套基於 <strong class="text-[#946B6B]">IoT 架構</strong> 的號誌提醒系統。硬體端利用 <strong
                          class="text-[#4A677D]">ESP32</strong> 實作燈號擷取與 <strong class="text-[#8C7355]">BLE
                          數據封包發送</strong>；軟體端則運用現代化 <strong class="text-[#946B6B]">Jetpack Compose</strong>
                        框架，確保資訊傳輸的穩定性與介面的流暢度。透過<strong class="text-[#4A677D]">主動式推播</strong>，將傳統號誌轉換為具備實時互動性的<strong
                          class="text-[#946B6B]">數位提醒工具</strong>。
                      </p>
                    </div>
                  </div>

                  <!-- 2. 系統架構方塊圖 -->
                  <div class="w-[400mm] flex flex-col group shrink-0">
                    <div
                      class="bg-[#4A677D] text-white text-[40pt] px-[20mm] py-[10mm] rounded-t-[10mm] font-bold border-[3mm] border-b-0 border-[#D1C4B2] w-max">
                      系統架構圖</div>
                    <div
                      class="w-full h-auto min-h-[150mm] bg-[#EADCC6] border-[3mm] border-[#D1C4B2] rounded-b-[15mm] rounded-tr-[15mm] flex items-center justify-center relative overflow-hidden anim-img shadow-sm">
                      <span class="absolute text-[40pt] text-[#4A677D] font-bold z-0">/img/system_arch.png</span>
                      <img :src="`${baseUrl}img/system_arch.png`"
                        class="relative w-full h-auto object-contain z-10 transition-opacity duration-300"
                        style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'" alt="系統架構">
                    </div>
                  </div>
                </div>
              </div>

              <!-- ================= 區塊 2.2: 製作流程 (前半段) ================= -->
              <div
                class="h-[450mm] shrink-0 border-t-[5mm] border-dashed border-[#4A677D] pt-[20mm] flex flex-col relative mt-auto">
                <h3 class="text-[100pt] font-black text-[#333333] mb-[10mm]">研究流程</h3>

                <!-- Metro Tracks Container -->
                <div class="flex-1 relative w-full h-[385mm]">
                  <!-- Hardware Track Line (Top) -->
                  <div
                    class="absolute top-[54mm] left-[-40mm] w-[950mm] h-[12mm] bg-[#8C7355] border-y-[2mm] border-[#D1C4B2] z-0 box-border">
                  </div>
                  <!-- Software Track Line (Bottom) -->
                  <div
                    class="absolute bottom-[54mm] left-[-40mm] w-[950mm] h-[12mm] bg-[#4A677D] border-y-[2mm] border-[#D1C4B2] z-0 box-border">
                  </div>

                  <!-- Node 1: Hard -->
                  <div
                    class="absolute left-0 top-[30mm] w-[220mm] flex flex-col items-center gap-[10mm] z-10 anim-flow-hw group">
                    <div
                      class="w-[60mm] h-[60mm] bg-[#8C7355] rounded-full flex items-center justify-center text-white border-[3mm] border-[#D1C4B2] shrink-0">
                      <i class="fa-solid fa-microchip text-[30mm]"></i>
                    </div>
                    <div class="text-[60pt] font-black text-[#333333]">設計電路</div>
                    <div
                      class="w-full h-[150mm] bg-white border-[3mm] border-[#D1C4B2] rounded-[10mm] flex items-center justify-center overflow-hidden relative shadow-sm">
                      <span class="text-[30pt] text-[#8C7355] font-bold text-center">circuit_design.png</span>
                      <img :src="`${baseUrl}img/circuit_design.png`"
                        class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
                        style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'" alt="設計電路">
                    </div>
                  </div>

                  <!-- Node 2: Soft -->
                  <div
                    class="absolute left-[300mm] bottom-[30mm] w-[220mm] flex flex-col-reverse items-center gap-[10mm] z-10 anim-flow-sw group">
                    <div
                      class="w-[60mm] h-[60mm] bg-[#4A677D] rounded-full flex items-center justify-center text-white border-[3mm] border-[#D1C4B2] shrink-0">
                      <i class="fa-solid fa-code text-[30mm]"></i>
                    </div>
                    <div class="text-[60pt] font-black text-[#333333]">Arduino IDE</div>
                    <div
                      class="w-full h-[150mm] bg-white border-[3mm] border-[#D1C4B2] rounded-[10mm] flex items-center justify-center overflow-hidden relative">
                      <span class="text-[30pt] text-[#4A677D] font-bold text-center">arduino_code.png</span>
                      <img :src="`${baseUrl}img/arduino_code.png`"
                        class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
                        style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'"
                        alt="Arduino">
                    </div>
                  </div>

                  <!-- Node 3: Hard -->
                  <div
                    class="absolute left-[600mm] top-[30mm] w-[220mm] flex flex-col items-center gap-[10mm] z-10 anim-flow-hw group">
                    <div
                      class="w-[60mm] h-[60mm] bg-[#8C7355] rounded-full flex items-center justify-center text-white border-[3mm] border-[#D1C4B2] shrink-0">
                      <i class="fa-solid fa-layer-group text-[30mm]"></i>
                    </div>
                    <div class="text-[60pt] font-black text-[#333333]">麵包板</div>
                    <div
                      class="w-full h-[150mm] bg-white border-[3mm] border-[#D1C4B2] rounded-[10mm] flex items-center justify-center overflow-hidden relative">
                      <span class="text-[30pt] text-[#8C7355] font-bold text-center">breadboard.png</span>
                      <img :src="`${baseUrl}img/breadboard.png`"
                        class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
                        style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'" alt="麵包板">
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <!-- ================= Column 3: 製作成果與結論 (950mm) ================= -->
            <section v-if="exportPanel === 'all' || exportPanel === 'panel-3'"
              class="w-p-main h-h-total p-[40mm] flex flex-col justify-between relative shrink-0 bg-[#EADCC6] overflow-hidden">

              <!-- ================= 區塊 3.1: 製作成果與結論 ================= -->
              <div class="flex flex-col gap-[20mm] h-[640mm] shrink-0 box-border">

                <!-- 研究成果 -->
                <div class="flex flex-col h-[420mm] shrink-0 box-border">
                  <h2
                    class="text-[100pt] font-black border-b-[8mm] border-[#4A677D] pb-[10mm] mb-[10mm] w-max text-[#333333]">
                    研究成果</h2>
                  <div class="flex-1 flex gap-[30mm] min-h-0">

                    <!-- Data -->
                    <div class="w-[460mm] flex flex-col gap-[15mm] justify-between shrink-0">
                      <!-- Data 1 -->
                      <div
                        class="flex bg-[#8C7355] px-[15mm] py-[12mm] rounded-[15mm] border-[3mm] border-[#D1C4B2] text-white items-center shadow-sm shrink-0">
                        <div class="flex flex-col flex-1 gap-[5mm]">
                          <span class="text-[60pt] leading-tight font-bold">模型接收範圍：</span>
                          <span class="text-[80pt] font-black text-white text-right">約 3m</span>
                        </div>
                      </div>

                      <!-- Data 2 -->
                      <div
                        class="flex-1 bg-white px-[15mm] py-[12mm] rounded-[15mm] border-[3mm] border-[#D1C4B2] shadow-sm flex flex-col justify-center gap-[5mm]">
                        <span
                          class="text-[80pt] font-black text-[#4A677D] leading-tight border-b-[3mm] border-[#D1C4B2] pb-[5mm] mb-[5mm]">極低傳輸延遲</span>
                        <p class="text-[60pt] text-[#333333] leading-tight font-bold">以低於 200ms
                          的極速傳輸實現體感零時差同步，確保交通提醒即時生效。</p>
                      </div>

                      <!-- Data 3 -->
                      <div
                        class="flex bg-white px-[15mm] py-[12mm] rounded-[15mm] border-[3mm] border-[#D1C4B2] items-center shadow-sm shrink-0">
                        <div class="flex flex-col flex-1 gap-[5mm]">
                          <span class="text-[60pt] text-[#333333] leading-tight font-bold">在接收BLE訊號方面：</span>
                          <span
                            class="text-[65pt] text-[#946B6B] font-black text-right leading-tight">實測通訊穩定，邊際距離具封包波動</span>
                        </div>
                      </div>
                    </div>

                    <!-- 5-Byte Chart & Text -->
                    <div
                      class="flex-1 flex flex-col border-[3mm] border-[#D1C4B2] rounded-[15mm] overflow-hidden bg-white shadow-sm shrink-0">
                      <div
                        class="bg-[#333333] text-white text-[60pt] py-[8mm] px-[15mm] font-bold flex items-center justify-center gap-[10mm] shrink-0">
                        <i class="fa-solid fa-box-open text-[#8C7355]"></i> 極簡封包結構
                      </div>
                      <div class="flex-1 relative flex items-center justify-center anim-img bg-[#EADCC6] min-h-[50mm]">
                        <span
                          class="absolute text-[25pt] text-[#4A677D] font-bold text-center z-0">/img/<br />packet_5byte.png</span>
                        <img :src="`${baseUrl}img/packet_5byte.png`"
                          class="absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-300"
                          style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'"
                          alt="5-Byte">
                      </div>
                      <div class="p-[10mm] flex flex-col justify-around gap-[5mm] text-[#333333] bg-white shrink-0">
                        <div class="flex items-center gap-[10mm] px-[5mm]">
                          <div
                            class="w-[45mm] h-[45mm] bg-[#4A677D] text-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                            <i class="fa-solid fa-fingerprint text-[20mm]"></i>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[40pt] font-black leading-tight text-[#333333]">過濾識別</span>
                            <span class="text-[30pt] font-bold text-[#8C7355]">Byte 0/1</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-[10mm] px-[10mm]">
                          <div
                            class="w-[45mm] h-[45mm] bg-[#946B6B] text-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                            <i class="fa-solid fa-traffic-light text-[20mm]"></i>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[40pt] font-black leading-tight text-[#333333]">A/B燈號</span>
                            <span class="text-[30pt] font-bold text-[#8C7355]">Byte 2/3</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-[10mm] px-[10mm]">
                          <div
                            class="w-[45mm] h-[45mm] bg-[#8C7355] text-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                            <i class="fa-solid fa-stopwatch text-[20mm]"></i>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-[40pt] font-black leading-tight text-[#333333]">剩餘倒數</span>
                            <span class="text-[30pt] font-bold text-[#8C7355]">Byte 4</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- App Mockup Image -->
                    <div
                      class="w-[160mm] h-max flex flex-col shrink-0 group anim-mockup border-[3mm] border-[#D1C4B2] rounded-[15mm] overflow-hidden bg-white shadow-sm">
                      <div class="bg-[#4A677D] text-white text-[60pt] py-[5mm] text-center font-bold">App 介面</div>
                      <div
                        class="w-full h-auto min-h-[200mm] flex items-center justify-center relative overflow-hidden anim-img bg-[#EADCC6]">
                        <span
                          class="absolute text-[25pt] text-[#4A677D] font-bold text-center z-0">/img/<br />app_mockup.png</span>
                        <img :src="`${baseUrl}img/app_mockup.png`"
                          class="relative w-full h-auto object-contain z-10 transition-opacity duration-300"
                          style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'"
                          alt="App 介面">
                      </div>
                    </div>

                  </div>
                </div>

                <!-- 研究結論 -->
                <div class="flex flex-col h-[200mm] shrink-0 box-border">
                  <h2
                    class="text-[100pt] font-black border-b-[8mm] border-[#4A677D] pb-[10mm] mb-[10mm] w-max text-[#333333]">
                    研究結論</h2>
                  <div
                    class="flex-1 bg-gradient-to-br from-[#F5F5DC] to-white text-[#333333] px-[30mm] py-[15mm] border-[3mm] border-[#D1C4B2] rounded-[15mm] relative anim-conclusion flex gap-[30mm] items-center shadow-lg overflow-hidden">
                    <i class="fa-solid fa-lightbulb text-[100pt] text-[#946B6B]"></i>
                    <p class="text-[60pt] leading-snug relative z-10 font-bold m-0 flex-1">
                      總結本專題，我們成功透過 <strong class="text-[#946B6B] text-[70pt]">BLE 技術</strong> 有效解決低頭族分心問題，並達成 <strong
                        class="text-[#946B6B] text-[70pt]">智慧交通</strong> 的安全目標。
                    </p>
                  </div>
                </div>

              </div>

              <!-- ================= 區塊 3.2: 製作流程 (後半段與終點) ================= -->
              <div
                class="h-[450mm] shrink-0 border-t-[5mm] border-dashed border-[#4A677D] pt-[20mm] flex flex-col relative mt-auto">
                <h3 class="text-[100pt] font-black text-transparent select-none mb-[10mm]">對齊用</h3>

                <!-- Metro Tracks Container -->
                <div class="flex-1 relative w-full h-[385mm]">

                  <!-- Perfect convergence SVG line -->
                  <svg class="absolute top-0 left-[-40mm] w-[950mm] h-[385mm] z-0 pointer-events-none"
                    viewBox="-40 0 950 385" preserveAspectRatio="none">
                    <!-- Background track borders -->
                    <path d="M -40 60 L 520 60 C 560 60, 580 150, 620 150" stroke="#D1C4B2" stroke-width="12"
                      fill="none" stroke-linecap="butt" />
                    <path d="M -40 302 L 520 302 C 560 302, 580 150, 620 150" stroke="#D1C4B2" stroke-width="12"
                      fill="none" stroke-linecap="butt" />

                    <!-- Inner colored lines -->
                    <path d="M -40 60 L 520 60 C 560 60, 580 150, 620 150" stroke="#8C7355" stroke-width="8" fill="none"
                      stroke-linecap="butt" />
                    <path d="M -40 302 L 520 302 C 560 302, 580 150, 620 150" stroke="#4A677D" stroke-width="8"
                      fill="none" stroke-linecap="butt" />

                    <!-- Arrow head pointing precisely to the Image Box -->
                    <polygon points="610,135 635,150 610,165" fill="#333333" />
                  </svg>

                  <!-- Node 4: Soft -->
                  <div
                    class="absolute left-0 bottom-[30mm] w-[220mm] flex flex-col-reverse items-center gap-[10mm] z-10 anim-flow-sw group">
                    <div
                      class="w-[60mm] h-[60mm] bg-[#4A677D] rounded-full flex items-center justify-center text-white border-[3mm] border-[#D1C4B2] shrink-0">
                      <i class="fa-brands fa-android text-[30mm]"></i>
                    </div>
                    <div class="text-[60pt] font-black text-[#333333]">Android App</div>
                    <div
                      class="w-full h-[150mm] bg-white border-[3mm] border-[#D1C4B2] rounded-[10mm] flex items-center justify-center overflow-hidden relative shadow-sm">
                      <span class="text-[30pt] text-[#4A677D] font-bold text-center">android_dev.png</span>
                      <img :src="`${baseUrl}img/android_dev.png`"
                        class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
                        style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'"
                        alt="App Dev">
                    </div>
                  </div>

                  <!-- Node 5: Hard -->
                  <div
                    class="absolute left-[300mm] top-[30mm] w-[220mm] flex flex-col items-center gap-[10mm] z-10 anim-flow-hw group">
                    <div
                      class="w-[60mm] h-[60mm] bg-[#8C7355] rounded-full flex items-center justify-center text-white border-[3mm] border-[#D1C4B2] shrink-0">
                      <i class="fa-solid fa-cube text-[30mm]"></i>
                    </div>
                    <div class="text-[60pt] font-black text-[#333333]">3D 列印</div>
                    <div
                      class="w-full h-[150mm] bg-white border-[3mm] border-[#D1C4B2] rounded-[10mm] flex items-center justify-center overflow-hidden relative shadow-sm">
                      <span class="text-[30pt] text-[#8C7355] font-bold text-center">3d_print.png</span>
                      <img :src="`${baseUrl}img/3d_print.png`"
                        class="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
                        style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'"
                        alt="3D 列印">
                    </div>
                  </div>

                  <!-- Node End: Final Model -->
                  <!-- Moved slightly right from 620 to 635 to accommodate arrow head perfectly -->
                  <div
                    class="absolute left-[635mm] top-[40mm] flex flex-col items-center gap-[15mm] z-20 anim-model group">
                    <div
                      class="h-[220mm] w-auto min-w-[200mm] bg-white border-[4mm] border-[#333333] rounded-[10mm] flex items-center justify-center overflow-hidden relative shadow-sm">
                      <span
                        class="absolute text-[30pt] text-[#4A677D] font-bold text-center z-0">/img/<br />final_model.png</span>
                      <img :src="`${baseUrl}img/final_model.png`"
                        class="relative h-full w-auto object-contain z-10 transition-opacity duration-300"
                        style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'"
                        alt="模型完工照">
                    </div>
                    <div
                      class="text-[60pt] font-black text-white bg-[#333333] px-[15mm] py-[8mm] rounded-lg text-center whitespace-nowrap shadow-md">
                      十字路口模型完工照</div>
                  </div>

                </div>
              </div>
            </section>

            <!-- ================= Column 4: 未來展望 (450mm) ================= -->
            <section v-if="exportPanel === 'all' || exportPanel === 'panel-4'"
              class="w-p-side h-h-total p-[40mm] flex flex-col justify-between relative shrink-0 bg-[#EADCC6] overflow-hidden">

              <div>
                <h2
                  class="text-[100pt] font-black border-b-[8mm] border-[#4A677D] pb-[10mm] mb-[40mm] inline-block text-[#333333]">
                  未來展望</h2>

                <div class="relative w-full">
                  <div
                    class="absolute left-[36mm] top-[40mm] bottom-[40mm] w-[8mm] border-l-[8mm] border-dashed border-[#4A677D] anim-line-v2 z-0">
                  </div>

                  <div class="flex flex-col gap-[50mm] relative z-10 w-full">
                    <div class="flex items-center gap-[25mm] anim-future">
                      <div
                        class="w-[80mm] h-[80mm] bg-[#4A677D] border-[3mm] border-[#D1C4B2] rounded-full flex items-center justify-center text-white shrink-0 bg-clip-padding">
                        <i class="fa-brands fa-apple text-[40mm]"></i>
                      </div>
                      <div>
                        <h4 class="text-[80pt] font-black text-[#333333]">iOS 開發</h4>
                        <p class="text-[60pt] leading-relaxed font-bold text-[#4A677D] mt-[10mm]">跨平台系統適配與開發。</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-[25mm] anim-future">
                      <div
                        class="w-[80mm] h-[80mm] bg-[#4A677D] border-[3mm] border-[#D1C4B2] rounded-full flex items-center justify-center text-white shrink-0 bg-clip-padding">
                        <i class="fa-solid fa-database text-[40mm]"></i>
                      </div>
                      <div>
                        <h4 class="text-[80pt] font-black text-[#333333]">大數據整合</h4>
                        <p class="text-[60pt] leading-relaxed font-bold text-[#4A677D] mt-[10mm]">分析量化主動提醒效益。</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-[25mm] anim-future">
                      <div
                        class="w-[80mm] h-[80mm] bg-[#4A677D] border-[3mm] border-[#D1C4B2] rounded-full flex items-center justify-center text-white shrink-0 bg-clip-padding">
                        <i class="fa-solid fa-car-on text-[40mm]"></i>
                      </div>
                      <div>
                        <h4 class="text-[80pt] font-black text-[#333333]">V2I 介接</h4>
                        <p class="text-[60pt] leading-relaxed font-bold text-[#4A677D] mt-[10mm]">打造完整智慧交通環境。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 下方圖片堆疊區 -->
              <div class="w-full flex flex-col gap-[30mm] mt-auto pt-[40mm]">

                <!-- 資料結構升級 -->
                <div class="w-full flex flex-col group">
                  <div
                    class="bg-[#8C7355] text-white text-[40pt] px-[15mm] py-[8mm] rounded-t-[10mm] font-bold border-[3mm] border-b-0 border-[#D1C4B2] w-max">
                    資料結構升級</div>
                  <div
                    class="w-full min-h-[150mm] bg-[#EADCC6] border-[3mm] border-[#D1C4B2] rounded-b-[15mm] rounded-tr-[15mm] flex items-center justify-center relative overflow-hidden anim-img shadow-sm">
                    <span
                      class="absolute text-[40pt] text-[#8C7355] font-bold text-center z-0">/img/<br />data_structure.png</span>
                    <img :src="`${baseUrl}img/data_structure.png`"
                      class="relative w-full h-auto object-contain z-10 transition-opacity duration-300"
                      style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'" alt="資料結構升級">
                  </div>
                </div>

                <!-- 車路協同概念圖 -->
                <div class="w-full flex flex-col group">
                  <div
                    class="bg-[#4A677D] text-white text-[40pt] px-[15mm] py-[8mm] rounded-t-[10mm] font-bold border-[3mm] border-b-0 border-[#D1C4B2] w-max">
                    車路協同概念圖</div>
                  <div
                    class="w-full min-h-[150mm] bg-[#EADCC6] border-[3mm] border-[#D1C4B2] rounded-b-[15mm] rounded-tr-[15mm] flex items-center justify-center relative overflow-hidden anim-img shadow-sm">
                    <span
                      class="absolute text-[40pt] text-[#4A677D] font-bold text-center z-0">/img/<br />v2i_concept.png</span>
                    <img :src="`${baseUrl}img/v2i_concept.png`"
                      class="relative w-full h-auto object-contain z-10 transition-opacity duration-300"
                      style="opacity: 0; image-rendering: -webkit-optimize-contrast;" onload="this.style.opacity='1'" onerror="this.style.opacity='0'" alt="車路協同概念">
                  </div>
                </div>

              </div>
            </section>

          </div>

        </div>
        <div v-if="exportPanel === 'all'" class="fixed bottom-8 right-8 flex flex-col gap-3 z-60">

          <button @click="resetZoom"
            class="w-12 h-12 bg-[#8C7355] text-white rounded-full shadow-xl hover:bg-[#333333] transition-all flex items-center justify-center group">
            <i class="fa-solid fa-expand group-hover:scale-110"></i>
            <span
              class="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">重設縮放</span>
          </button>

          <button @click="adjustZoom(0.2)"
            class="w-12 h-12 bg-[#4A677D] text-white rounded-full shadow-xl hover:bg-[#333333] transition-all flex items-center justify-center">
            <i class="fa-solid fa-plus"></i>
          </button>

          <div
            class="bg-white/90 backdrop-blur-sm text-[#333333] font-bold py-1 px-2 rounded-lg text-center text-xs shadow-sm border border-gray-200">
            {{ Math.round(zoomScale * 100) }}%
          </div>

          <button @click="adjustZoom(-0.2)"
            class="w-12 h-12 bg-[#4A677D] text-white rounded-full shadow-xl hover:bg-[#333333] transition-all flex items-center justify-center">
            <i class="fa-solid fa-minus"></i>
          </button>！
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { useRoute } from 'vue-router'

const route = useRoute()
const exportPanel = ref('all') // 'all', 'panel-1', 'panel-2', 'panel-3', 'panel-4'
const baseUrl = import.meta.env.BASE_URL

onMounted(() => {
  // Check URL parameter directly
  const urlParams = new URLSearchParams(window.location.search)
  const mode = urlParams.get('export')

  if (mode && mode.startsWith('panel-')) {
    exportPanel.value = mode
  } else if (mode === 'true') {
    exportPanel.value = 'all'
  }

  if (exportPanel.value === 'all' && mode !== 'true') {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.from('.anim-icon', { x: -50, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }, 0)
      .from('.anim-line-v', { scaleY: 0, transformOrigin: 'top', duration: 1, ease: 'power2.out' }, 0.5)
      .from('.anim-arrow', { opacity: 0, y: -20, duration: 0.5 }, 1.3)
      .from('.anim-alert', { scale: 0.8, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, 1.5)
      .from('.anim-img', { scale: 0.9, opacity: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }, 0.8)

    tl.from('.anim-flow-hw', { y: -50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }, 0.5)
      .from('.anim-flow-sw', { y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }, 0.5)

    tl.from('.anim-mockup', { y: 100, opacity: 0, duration: 1, ease: 'power3.out' }, 0.8)
      .from('.anim-conclusion', { x: 100, opacity: 0, duration: 1, ease: 'power3.out' }, 1)

    tl.from('.anim-line-v2', { scaleY: 0, transformOrigin: 'top', duration: 1, ease: 'power2.out' }, 0.8)
      .from('.anim-future', { x: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, 1.2)
  } else {
    // 匯出模式：瞬間把所有隱藏元素顯示，移除所有動畫
    gsap.set('.anim-icon, .anim-arrow, .anim-alert, .anim-flow-hw, .anim-flow-sw, .anim-mockup, .anim-conclusion, .anim-future, .anim-img', { opacity: 1, scale: 1, x: 0, y: 0 })
    gsap.set('.anim-line-v, .anim-line-v2', { scaleY: 1 })
  }
})

// 縮放狀態
const zoomScale = ref(1.0);

const adjustZoom = (delta) => {
  const newScale = zoomScale.value + delta;
  if (newScale >= 0.1 && newScale <= 10) {
    zoomScale.value = Number(newScale.toFixed(2));
  }
};

const resetZoom = () => {
  zoomScale.value = 1.0;
};
</script>
