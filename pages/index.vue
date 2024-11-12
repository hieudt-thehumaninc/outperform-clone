<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'


const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000); 
});

definePageMeta({
  layout: 'landing',
})

const links = [
  {
    label: 'Features',
    to: '/',
  },
  {
    label: 'Docs',
    to: '/',
  },
]

const columns = [
  {
    key: 'address',
    label: 'Wallet Address',
  },
  {
    key: 'total',
    label: 'Total PnL From  Selected Contracts',
    sortable: true,
  },
  {
    key: 'winrate',
    label: 'Winrate',
    sortable: true,
  },
]

const data_table = [
  {
    id: 1,
    address: '0x73f58d260118940d734195d19a3e14d055bccdda',
    total: '0.254',
    winrate: '20%',
  },
  {
    id: 2,
    address: '0x73f58d260118940d734195d19a3e14d055bccdda',
    total: '1.275',
    winrate: '100%',
  },
  {
    id: 3,
    address: '0x73f58d260118940d734195d19a3e14d055bccdda',
    total: '0.044',
    winrate: '40%',
  },
  {
    id: 4,
    address: '0x73f58d260118940d734195d19a3e14d055bccdda',
    total: '0.075',
    winrate: '67.77%',
  }
]

const slidePositions = [
  '-12.5%',
  '4%',
  '21%',
  '37.4%',
  '54%',
  '71%',
  '87.5%',
]

onMounted(() => {
  var slideIndexS = 0,
    sliding = false

  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
    menu: '#menu',
    css3: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    afterSlideLoad: function (section, origin, destination, direction) {
      slideIndexS = destination.index + 0
      const videos = document.querySelectorAll('.box-video video')
      videos.forEach(video => {
        if (video) {
          video.play()
        }
      })
      const progressCurrent = document.querySelector('.progress-current')
      if (progressCurrent) {
        progressCurrent.style.left = slidePositions[slideIndexS]
      }
    },
    onLeave: function (origin, destination, direction) {
      console.log('Index: ' + origin.index + ' Slide Index: ' + slideIndexS)
      //console.log(index, nextIndex, direction, sliding);
      if (origin.index === 1 && !sliding) {
        if (direction === 'down' && slideIndexS < 7) {
          $.fn.fullpage.moveSlideRight()
          return false
        } else if (direction === 'up' && slideIndexS > 0) {
          $.fn.fullpage.moveSlideLeft()
          return false
        }
      } else if (sliding) {
        return false
      }
    },
  })
})
</script>

<template>
   <div v-if="loading" class="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black gap-7">
    <img src="~/assets/img/logo-2.png" alt="">
    <p class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Please wait a few second</p>
  </div>
  <div>
    <div class="hidden w-full bg-[#121314] md:flex items-center xl:px-[100px] px-6 2xl:py-5 py-4 border-b border-[rgba(255,255,255,0.1)] absolute top-0 z-10">
      
        <ULink to="/"><img src="~/assets/img/logo.svg" alt="" /></ULink>
        <UVerticalNavigation :links="links">
          <template #default="{ link }">
            <span class="font-normal text-base text-[#fff] group-hover:text-[#ccc] relative uppercase">{{ link.label }}</span>
          </template>
        </UVerticalNavigation>
        <div class="flex items-center gap-3 ml-auto">
          <ULink
            icon="x"
            class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/x.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"
          ></ULink>
          <ULink
            icon="x"
            class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/telegram.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"
          ></ULink>
          <ULink
            icon="x"
            class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/dextools.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"
          ></ULink>
        </div>
        <UButton
          label="GET STARTED"
          class="bg-[#121314] ml-8 px-6 py-2.5 rounded-full border border-[#40484D] tracking-[-0.32px] font-normal hover:border-[#89FF69] hover:bg-[] #121314"
        ></UButton>
      
    </div>
    <div class="fixed top-0 left-0 w-full h-full -z-10">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
    <HeaderMobile />
    <div id="fullpage">
      <div class="hidden section active" style="position: absolute; height: 0" id="section0"></div>
      <div class="section" id="section1">
        <div class="relative slide slide1">
          <div class="absolute left-0 z-10 grid 2xl:top-10 top-8"><img src="~/assets/img/grid.png" alt="" /></div>
          <div class="xl:pl-[100px] px-4">
            <div class="box-text">
              <p>Gain <span class="text-[#69CDFF]">real-time</span> insights.</p>
              <p>Follow elite moves.</p>
              <p>Replicate winning strategies</p>
            </div>
            <UButton class="w-[220px] h-[60px] sm:w-[276px] sm:h-[78px] btn-effect rounded-full bg-black border border-[#262E33] p-[1px] group">
              <div class="layer-1"></div>
              <div class="layer-2"></div>
              <div class="layer-3"></div>
              <div class="relative z-10 flex items-center w-full h-full pl-4 bg-black rounded-full sm:pl-10 content">
                <span class="sm:text-[22px] text-lg uppercase tracking-[-0.44px] font-normal relative z-30">GET STARTED</span>
                <div
                  class="relative flex items-center justify-center w-12 h-12 sm:w-[68px] sm:h-[68px] ml-auto mr-1 bg-black rounded-full p-[2px] group-hover:bg-[#89ff69]"
                >
                  <span class="rounded-full cricle lg"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path
                      d="M5.2449 20.573L36.8694 20.573"
                      stroke="white"
                      stroke-width="1.70286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.3551 29.0874L36.8694 20.5731L28.3551 12.0588"
                      stroke="white"
                      stroke-width="1.70286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </UButton>
          </div>
          <div class="box-video">
            <video autoplay loop muted playsinline>
              <source src="~/assets/img/Sphere.webm" type="video/webm" />
            </video>
          </div>
          <div class="absolute w-14 md:w-[100px] top-0 right-1 md:right-7 flex gap-10 box-lopper">
            <div class="lopper">
              <span>OutperformAI</span>
              <span>OutperformAI</span>
              <span>OutperformAI</span>
              <span>OutperformAI</span>
              <span>OutperformAI</span>
              <span>OutperformAI</span>
            </div>
            <div class="lopper">
              <span>OutperformAI</span>
              <span>OutperformAI</span>
              <span>OutperformAI</span>
              <span>OutperformAI</span>
              <span>OutperformAI</span>
              <span>OutperformAI</span>
            </div>
          </div>
        </div>
        <div class="relative slide slide2">
          <h2 class="relative z-10 my-10 text-center sm:my-20 txt-5xl">
            WHY Outperform<span class="text-[#89FF69]">AI</span>
          </h2>
          <div class="mb-28 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 px-4 max-w-[1254px] mx-auto relative z-10">
            <div class="bg-black rounded-[20px] border border-[#262E33] text-center pt-2 px-5 pb-5">
              <img src="~/assets/img/ai-powered.svg" class="mx-auto" alt="" />
              <h4 class="my-2.5 text-xl font-medium tracking-[-0.4px]">AI-Powered</h4>
              <p class="text-[#A0A0A0] text-sm font-light">
                Leverage AI to access and analyze vast smart data in real time, providing deep insights into market
              </p>
            </div>
            <div class="bg-black rounded-[20px] border border-[#262E33] text-center pt-2 px-5 pb-5">
              <img src="~/assets/img/custom-signals.svg" class="mx-auto" alt="" />
              <h4 class="my-2.5 text-xl font-medium tracking-[-0.4px]">Custom Signals</h4>
              <p class="text-[#A0A0A0] text-sm font-light">
                Get personalized trading alerts tailored to your strategies and preferences
              </p>
            </div>
            <div class="bg-black rounded-[20px] border border-[#262E33] text-center pt-2 px-5 pb-5">
              <img src="~/assets/img/multi-platform.svg" class="mx-auto" alt="" />
              <h4 class="my-2.5 text-xl font-medium tracking-[-0.4px]">Multi-Platform</h4>
              <p class="text-[#A0A0A0] text-sm font-light">
                Easily track and manage smart money movements using both the DApp and Telegram Bot
              </p>
            </div>
            <div class="bg-black rounded-[20px] border border-[#262E33] text-center pt-2 px-5 pb-5">
              <img src="~/assets/img/rapid-sourcing.svg" class="mx-auto" alt="" />
              <h4 class="my-2.5 text-xl font-medium tracking-[-0.4px]">Rapid Sourcing</h4>
              <p class="text-[#A0A0A0] text-sm font-light">
                Quickly track data with lightning-fast sourcing, giving you the edge in fast-moving markets.
              </p>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-full box-video">
            <video autoplay loop muted playsinline>
              <source src="~/assets/img/BG.mov" type="video/webm" />
            </video>
          </div>
        </div>
        <div class="slide slide3">
          <div class="container">
            <h2 class="mb-8 mt-14 2xl:mt-20 txt-5xl">OUR FEATURES</h2>
            <div class="flex flex-wrap gap-7 mb-28">
              <div
                class="flex flex-col justify-between bg-gr w-full sm:w-[338px] pt-8 rounded-[20px] border border-[#262E33] shadow-[4px_1px_4px_0_rgba(255,255,255,0.55)_inset] overflow-hidden relative"
              >
                <div class="px-8 mb-7">
                  <h4 class="mb-3.5 text-xl font-medium tracking-[-0.4px] uppercase">Onchain Lists</h4>
                  <p class="max-w-[241px] text-sm font-light text-[rgba(255,255,255,0.7)]">
                    Gain instant access to elite traders ranked by key performance indicators.
                  </p>
                </div>
                <div class="pl-8"><img src="~/assets/img/img-ds.png" alt="" class="ml-auto" /></div>
              </div>
              <div class="flex-1 max-w-full">
                <div class="grid grid-cols-1 mb-6 sm:grid-cols-2 gap-7">
                  <div class="bg-black p-8 h-[252px] border border-[#262E33] rounded-[20px] relative">
                    <h3 class="mb-3.5 text-xl font-medium tracking-[-0.4px] uppercase">Copy Trading Bot</h3>
                    <p class="max-w-[241px] text-sm font-light text-[rgba(255,255,255,.7)]">
                      Effortlessly replicate trades from top smart money wallets directly within Telegram.
                    </p>
                    <div class="absolute bottom-0 right-0">
                      <img src="~/assets/img/book.png" alt="" />
                    </div>
                  </div>
                  <div class="bg-black p-8 h-[252px] border border-[#262E33] rounded-[20px] relative">
                    <h3 class="mb-3.5 text-xl font-medium tracking-[-0.4px] uppercase">Alert Bot</h3>
                    <p class="max-w-[241px] text-sm font-light text-[rgba(255,255,255,.7)]">
                      Provides real-time updates on wallet movements, allowing users to react quickly.
                    </p>
                    <div class="absolute bottom-0 right-0 w-[140px] sm:w-[160px]">
                      <img src="~/assets/img/warning-3d.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="bg-black flex flex-wrap items-end pt-[60px] border border-[#262E33] rounded-[20px]">
                  <div class="max-w-[241px] mx-8 pt-6 pb-8">
                    <h3 class="mb-3.5 text-xl font-medium tracking-[-0.4px] uppercase">
                      Project's Top-Performers Scanner
                    </h3>
                    <p class="max-w-[241px] text-sm font-light text-[rgba(255,255,255,.7)]">
                      Uncover key insights by evaluating wallet addresses based on performance metrics.
                    </p>
                  </div>
                  <div class="overflow-hidden bg-black sm:flex-1 box-table">
                    <div class="overflow-auto">
                      <UTable :rows="data_table" :columns="columns">
                        <template #total-data="{ row }">
                          <div class="flex items-center justify-center gap-1">
                            <span class="text-[#fff] font-medium">{{ row.total }}</span>
                            <img src="~/assets/img/eth.svg" class="w-3.5 h-3.5 rounded-full object-cover" alt="" />
                          </div>
                        </template>
                        <template #winrate-data="{ row }">
                          <span class="text-[#93FCEE] font-medium">{{ row.winrate }}</span>
                        </template>
                      </UTable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide slide4">
          <div class="container">
            <h2 class="mb-8 mt-14 2xl:mt-20 txt-5xl">OUR PRODUCTS</h2>
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 mb-28">
              <div class="bg-black rounded-[20px] border border-[#262E33] overflow-hidden">
                <div class="flex p-7">
                  <div class="flex-1">
                    <h3 class="mb-2.5 text-2xl font-medium tracking-[-0.48px] uppercase">Telegram BOt</h3>
                    <p class="mb-8 font-light text-[rgba(255,255,255,.7)]">
                      Instant access to automated copy trading, real-time wallet alerts, and quick actions within the
                      Telegram interface
                    </p>
                    <UButton
                      class="w-[181px] h-[46px] btn-effect rounded-full bg-black border border-[#262E33] p-[1px] group"
                    >
                      <div class="layer-1"></div>
                      <div class="layer-2"></div>
                      <div class="layer-3"></div>
                      <div class="relative z-10 flex items-center w-full h-full pl-6 bg-black rounded-full content">
                        <span class="text-sm uppercase tracking-[-0.28px] font-normal relative z-30"
                          >Telegram BOt</span
                        >
                        <div
                          class="relative flex items-center justify-center w-[40px] h-[40px] ml-auto mr-0.5 bg-black rounded-full p-[2px] group-hover:bg-[#89ff69]"
                        >
                          <span class="rounded-full cricle"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M3.16295 12.1638L21.7344 12.1638" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.7344 17.1641L21.7344 12.1641L16.7344 7.16406" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </UButton>
                  </div>
                  <div class="mt-4 mr-4"><img src="~/assets/img/tele3d.png" alt="" /></div>
                </div>
                <div class="mt-2 pl-7"><img src="~/assets/img/img-screenshot-1.png" alt=""></div>
              </div>
              <div class="bg-black p-7 rounded-[20px] border border-[#262E33] overflow-hidden">
                <div class="mb-8"><img src="~/assets/img/img-screenshot-2.png" alt=""></div>
                <div class="flex gap-8">
                  <div class="relative box-logo w-[148px]">
                    <img src="~/assets/img/logo-1.png" alt="">
                  </div>
                  <div class="flex-1">
                    <h3 class="mb-2.5 text-2xl font-medium tracking-[-0.48px] uppercase">DApp</h3>
                    <p class="mb-8 font-light text-[rgba(255,255,255,.7)]">
                      A comprehensive dashboard for tracking smart money movements, analyzing wallet performance, and accessing curated trading strategies
                    </p>
                    <UButton
                      class="w-[180px] sm:w-[219px] h-[46px] btn-effect rounded-full bg-black border border-[#262E33] p-[1px] group"
                    >
                      <div class="layer-1"></div>
                      <div class="layer-2"></div>
                      <div class="layer-3"></div>
                      <div class="relative z-10 flex items-center w-full h-full pl-6 bg-black rounded-full content">
                        <span class="text-sm uppercase tracking-[-0.28px] font-normal relative z-30"
                          >OutperformAI DAPP</span
                        >
                        <div
                          class="relative flex items-center justify-center w-[40px] h-[40px] ml-auto mr-0.5 bg-black rounded-full p-[2px] group-hover:bg-[#89ff69]"
                        >
                          <span class="rounded-full cricle"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M3.16295 12.1638L21.7344 12.1638" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.7344 17.1641L21.7344 12.1641L16.7344 7.16406" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative slide slide5">
          <div class="container">
            <h2 class="mb-12 mt-14 2xl:mt-20 txt-5xl">ROADMAP</h2>
            <div class="relative mb-28 pl-[36px] sm:pl-0">
              <div class="sm:hidden h-full w-0.5 bg-[rgba(255,255,255,0.18)] absolute top-0 left-2">
                <div class="w-full bg-[#8a977a] absolute top-0 left-0" style="height: 52%"></div>
              </div>
              <div class="min-h-[100px] mb-10 sm:mb-28 lg:mb-20 sm:flex flex-wrap gap-5 2xl:gap-20 relative">
                <h4 class="w-[195px] mb-4 sm:mb:0 text-xl font-medium tracking-[-0.4px] uppercase">Foundation Stage</h4>
                <ul class="relative w-full pt-1 lg:flex-1 roadmap-list">
                  <li class="active">Project Concept and Initial Development</li>
                  <li class="active">Outperformers Lists and Scanner Creation</li>
                  <li class="active">Tokenomics and Utility Design	</li>
                  <li class="active">Telegram Bot Deployment	</li>
                </ul>
                <UProgress :value="100" class="w-[100vw] box-progress absolute top-[130px] lg:top-[50px]" />
              </div>
              <div class="min-h-[100px] mb-10 sm:mb-28 lg:mb-20 sm:flex flex-wrap gap-5 2xl:gap-20 relative">
                <h4 class="w-[195px] mb-4 sm:mb:0  text-xl font-medium tracking-[-0.4px] uppercase">Development Stage</h4>
                <ul class="relative w-full pt-1 lg:flex-1 roadmap-list">
                  <li class="active">Development Stage</li>
                  <li class="active">Launch of OutperformAI DApp	</li>
                  <li>Strategic Partnerships</li>
                  <li>Full Platform Launch</li>
                </ul>
                <UProgress :value="45" class="w-[100vw] absolute box-progress top-[130px] lg:top-[50px]" />
              </div>
              <div class="min-h-[100px] mb-10 sm:mb-28 lg:mb-20 sm:flex flex-wrap gap-5 2xl:gap-20 relative">
                <h4 class="w-[195px] mb-4 sm:mb:0  text-xl font-medium tracking-[-0.4px] uppercase">Expansion Stage</h4>
                <ul class="relative w-full pt-1 lg:flex-1 roadmap-list">
                  <li>CEX Listings and Liquidity Boost	</li>
                  <li>Multi-Platform Expansion</li>
                  <li>Integration with New Networks	</li>
                  <li>Enhancements and Scalability	</li>
                </ul>
                <UProgress :value="0" class="w-[100vw] absolute box-progress top-[130px] lg:top-[50px]" />
              </div>
            </div>
          </div>  
        </div>
        <div class="slide slide6">
          <div class="container">
            <h2 class="max-w-[580px] 2xl:mb-[60px] mb-10 mt-14 2xl:mt-20 txt-5xl">Frequently Asked Questions</h2>
            <Faq />
          </div>
        </div>
        <div class="slide slide7">
          <div class="container flex flex-col h-full">
            <h2 class="max-w-[1226px] text-center mt-14 2xl:mt-20 mb-14 txt-5xl xl:!leading-[84px]">
              Elevate your <span class="text-[#69CDFF]">trading game</span>
              by tracking and copying top smart money moves with <span class="text-[#89FF69]">OutperformAI</span>
            </h2>
            <div class="flex justify-center flex-wrap gap-[18px] flex-1">
              <UButton class="w-[236px] h-[68px] btn-effect rounded-full bg-black border border-[#262E33] p-[1px] group">
                <div class="layer-1"></div>
                <div class="layer-3"></div>
                <div class="relative z-10 flex items-center justify-center w-full h-full bg-black rounded-full content">
                  <span class="text-xl uppercase tracking-[-0.4px] font-normal relative z-30"
                    >Copy Trading Bot</span
                  >
                </div>
              </UButton>
              <UButton class="w-[236px] h-[68px] btn-effect rounded-full bg-black border border-[#262E33] p-[1px] group">
                <div class="layer-1"></div>
                <div class="layer-2"></div>
                <div class="layer-3"></div>
                <div class="relative z-10 flex items-center justify-center w-full h-full bg-black rounded-full content">
                  <span class="text-xl uppercase tracking-[-0.4px] font-normal relative z-30"
                    >DApp</span
                  >
                </div>
              </UButton>
              <UButton class="w-[236px] h-[68px] btn-effect !shadow-none rounded-full bg-black border border-[#262E33] p-[1px] group">
                <div class="layer-1"></div>
                <div class="relative z-10 flex items-center justify-center w-full h-full bg-black rounded-full content !shadow-none">
                  <span class="text-xl uppercase tracking-[-0.4px] font-normal relative z-30"
                    >Alert Bot</span
                  >
                </div>
              </UButton>
            </div>
            <div class="min-h-[300px] sm:min-h-[472px] pb-[92px] flex items-end justify-between relative overflow-hidden">
              <div class="w-[241px] space-y-4 relative z-10">
                <ULink to="/"><img src="~/assets/img/logo.svg" alt=""></ULink>
                <p class="text-[12px] font-light leading-5 text-[rgba(255,255,255,0.7)]">Gain real-time insights. Follow elite moves. Replicate winning strategies</p>
                <div class="flex items-center gap-3 ml-auto">
                  <ULink
                    icon="x"
                    class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/x.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"
                  ></ULink>
                  <ULink
                    icon="x"
                    class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/telegram.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"
                  ></ULink>
                  <ULink
                    icon="x"
                    class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/dextools.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"
                  ></ULink>
                </div>
              </div>
              <div class="box-video">
                <video autoplay loop muted playsinline>
                  <source src="~/assets/img/Sphere.webm" type="video/webm" />
                </video>
              </div>
              <div class="w-[176px] relative z-10">
                <UButton size="xl" label="Buy $OPMAI" class="block mb-5 ml-auto bg-black px-5 py-2.5 border border-[#40484D] rounded-full"></UButton>
                <p class="pb-6 border-b border-[rgba(255,255,255,0.18)] text-[12px] font-light leading-5 text-[rgba(255,255,255,0.7)] text-right">© 2024 OutperformAI Network. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" id="section2"></div>
      <div class="section" id="section3"></div>
    </div>
    <div class="absolute z-10 my-6 bottom-12 md:my-0 progress">
      <div class="absolute w-20 md:w-[156px] h-full bg-gradient progress-current" style="left: -12.5%"></div>
    </div>
  </div>
</template>
