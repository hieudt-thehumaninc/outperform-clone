<script setup lang="ts">
import { ref } from 'vue'
import type { FormError, FormSubmitEvent } from '#ui/types'

const tabs = [{
  label: 'All',
  slot: 'all',
},{
  label: 'SmartMoney',
  slot: 'smartMoney',
},{
  label: 'VC/KOL Wallets',
  slot: 'wallets',
},{
  label: 'Alpha Snipers',
  slot: 'snipers',
}]

const columns = [{
  key: 'address',
  label: 'Wallet Address'
},{
  key: 'balance',
  label: 'Current Balance',
  sortable: true
}, {
  key: 'pnl',
  label: 'Last 7D PnL',
  sortable: true
}, {
  key: 'winrate',
  label: '7D Winrate',
  sortable: true
}, {
  key: 'txs',
  label: '7D Txs',
  sortable: true
}, {
  key: 'last_txs',
  label: 'Last Txs'
}]

const data_table = [{
  id: 1,  
  address: '0x73f58d260118940d734195d19a3e14d055bccdda',
  balance: '2.254',
  pnl: '20 ETH ( ~560%) ',
  winrate: '20%',
  txs: '0.254',
  last_txs: '0.254',
},{
  id: 2,  
  address: '0x73f58d260118940d734195d19a3e14d055bccdda',
  balance: '0.254',
  pnl: '20 ETH ( ~560%) ',
  winrate: '20%',
  txs: '0.254',
  last_txs: '0.254',
},{
  id: 3,   
  address: '0x73f58d260118940d734195d19a3e14d055bccdda',
  balance: '1.254',
  pnl: '20 ETH ( ~560%) ',
  winrate: '20%',
  txs: '0.254',
  last_txs: '0.254',
},{
  id: 4,  
  address: '0x73f58d260118940d734195d19a3e14d055bccdda',
  balance: '0.254',
  pnl: '20 ETH ( ~560%) ',
  winrate: '20%',
  txs: '0.254',
  last_txs: '0.254',
},{
  id: 5,  
  address: '0x73f58d260118940d734195d19a3e14d055bccdda',
  balance: '3.254',
  pnl: '20 ETH ( ~560%) ',
  winrate: '20%',
  txs: '0.254',
  last_txs: '0.254',
},{
  id: 6,  
  address: '0x73f58d260118940d734195d19a3e14d055bccdda',
  balance: '0.254',
  pnl: '20 ETH ( ~560%) ',
  winrate: '21%',
  txs: '0.254',
  last_txs: '0.254',
}]

const dropdown = [
  [{
    label: '',
    slot: 'account',
  }]
]

const watchlist = ['Watchlist name 1', 'Watchlist name 2', 'Watchlist name 3','Watchlist name 4', 'Watchlist name 5', 'Watchlist name 6 ']
const selected_watchlist = ref([])

const currentView = ref('block')

const setView = (view: string) => {
  currentView.value = view
}

const showDropdown = ref(false)
const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
}
const create_watchlist = ref(false)
const create_new_watchlist = ref(false)
const add_watchlist = ref(false)


const state = reactive({
  name: undefined,
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Type your watchlist name' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
 
  console.log(event.data)
}

const activeItem = ref<number | null>(null)

const setActiveItem = (index: number) => {
  activeItem.value = index
}
</script>

<template>
  <div class="xl:px-[60px] px-4 py-10">
    <h2 class="mb-6 text-2xl tracking-[-0.48px] uppercase">SmartMoney Radar</h2>
    <div class="flex flex-wrap justify-between gap-5">
        <UInput icon="search" input-class="input-feild" class="flex-1 max-w-[636px]" placeholder="Search wallet address" />
        <div class="flex max-w-full gap-3 font-pixelify">
            <UButton @click="add_watchlist = true" label="Add Wallet" class="w-[132px] h-[46px] bg-black rounded-full flex items-center justify-center border border-[#333841] text-sm font-normal uppercase hover:bg-[#151515]"></UButton>
            <UButton @click="create_watchlist = true" class="w-[160px] h-[46px] btn-effect rounded-full bg-black border border-[#262E33] p-[1px] group">
                <div class="layer-1"></div>
                <div class="layer-2"></div>
                <div class="layer-3"></div>
                <div class="relative z-10 flex items-center w-full h-full pl-5 bg-black rounded-full content">
                    <span class="text-sm uppercase tracking-[-0.28px] font-normal relative z-30">Create list</span>
                    <div class="relative flex items-center justify-center w-10 h-10 ml-auto mr-0.5 bg-black rounded-full p-[2px] group-hover:bg-[#89ff69]">
                        <span class="rounded-full cricle"></span>
                        <UIcon name="i-add" class="w-6 h-6" />
                    </div>
                </div>
            </UButton>
        </div>
    </div>
    <div class="relative mt-3 box-tab">
        <div class="sm:absolute mb-4 sm:mb-0 top-0 sm:left-[404px] z-10 hidden">
            <USelectMenu v-model="selected_watchlist" :options="watchlist" placeholder="Your watchlist" />
        </div>
        <div class="box-dropdown mb-4 sm:mb-0 sm:absolute top-0 sm:left-[404px] z-10">
            <UDropdown :items="dropdown" :popper="{ placement: 'bottom-start' }">
                <UButton label="Your watchlist" class="w-[164px] h-8 px-3 py-2 bg-black text-xs border border-[#333841] rounded-full hover:bg-black">
                    <template #trailing>
                        <UIcon name="arrow-down" class="w-4 h-4 ml-auto" />
                    </template>
                </UButton>
                <template #account="{ item }">
                    <div class="w-[164px] pt-5 bg-black rounded-[16px] z-10">
                        <div class="max-w-[148px] mx-auto mb-3.5 text-[12px] leading-5 text-[rgba(255,255,255,0.7)] text-center">You have no custom watchlist at the moment</div>
                        <UButton @click="create_new_watchlist = true" label="Create list" class="w-full h-[46px] border-t border-[#333841] block mx-auto text-center bg-transparent text-sm font-normal uppercase text-[#89FF69] rounded-none"></UButton>
                    </div>
                </template>
                
            </UDropdown>
        </div> 
        <div class="absolute top-0 left-[175px] sm:left-[572px] z-10 flex items-center gap-1 rounded-full p-0.5 border border-[#333841]">
            <UButton @click="setView('block')" icon="block" :class="['p-1 bg-black rounded-full', currentView === 'block' ? 'active bg-[#93FCEE] hover:bg-[#93FCEE]' : '']"></UButton>
            <UButton @click="setView('list')" icon="list" :class="['p-1 bg-black rounded-full', currentView === 'list' ? 'active bg-[#93FCEE] hover:bg-[#93FCEE]' : '']"></UButton>
        </div>
       
        <UTabs :items="tabs" class="w-full">
            <template #all="{ }">
                <div v-if="currentView === 'block'" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-transparent hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-black hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-black hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-transparent hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-black hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-black hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-transparent hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-black hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div class="relative bg-[#000] rounded-[10px] border border-[#333841]">
                        <div class="flex items-center px-3.5 py-2.5 gap-1 border-b border-[#333841]">
                            <div class="text-[rgba(255,255,255,0.7)] text-[12px] leading-5">0x73f58d260118940d734195d19a3e14d055bccdda</div>
                            <UButton size="xs" icon="copy" class="p-1 shadow-none bg-black hover:bg-[#131518]"></UButton>
                        </div>
                        <div class="flex">
                            <div class="w-[148px] p-3.5 border-r border-[#333841]">
                                <h5 class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Balance:</h5>
                                <div class="flex items-center gap-2 mt-1 mb-2">
                                    <span class="text-2xl tracking-[-0.48px]">0.254</span>
                                    <img src="~/assets/img/eth.svg" class="object-cover rounded-full w-7 h-7" alt="">
                                </div>
                                <div class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">7D Winrate: 80%</div>
                            </div>
                            <div class="flex-1 p-3.5 bg-gr-2">
                                <ul class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)] space-y-2">
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last 7D PnL:</h5>
                                        <p class="font-medium text-white">8.782 ETH</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">7D Txs:</h5>
                                        <p>20</p>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <h5 class="w-[80px]">Last Tx:</h5>
                                        <p>3 days ago</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>
                <div v-if="currentView === 'list'" class="">
                    <div class="overflow-hidden bg-black box-table-df">
                        <div class="overflow-auto">
                            <UTable
                            :rows="data_table"
                            :columns="columns"
                            >
                            <template #balance-data="{ row }">
                                <div class="flex items-center justify-center gap-1">
                                    <span class="text-[#fff] font-medium">{{ row.balance }}</span>
                                    <img src="~/assets/img/eth.svg" class="w-[18px] h-[18px] rounded-full object-cover" alt="">
                                </div>   
                            </template>
                            <template #pnl-data="{ row }">
                                <span class="text-[#fff] font-medium">{{row.pnl}}</span>
                            </template>
                            <template #winrate-data="{ row }">
                                <span class="text-[#93FCEE] font-medium">{{row.winrate}}</span>
                            </template>
                            </UTable>
                        </div>
                    </div>
                </div>
            </template>
            <template #smartMoney="{ }">
                
            </template>
        </UTabs>
    </div>
  </div>
    <UModal v-model="create_watchlist">
      <div class="p-4 bg-black border border-[#333841] rounded-2xl sm:py-7 sm:px-8">
        <UButton icon="close" class="absolute p-0 bg-black right-3 top-3" @click="create_watchlist = false" />
        <div class="mb-6">
            <h3 class="mb-1 text-2xl font-medium uppercase">Create new watchlist</h3>
            <p class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Type your watchlist name</p>
        </div>
        <UForm :validate="validate" :state="state" @submit="onSubmit">
            <UFormGroup name="name">
                <div class="flex w-full gap-4">
                    <UInput icon="edit" v-model="state.name" input-class="input-feild" class="flex-1" placeholder="Your watchlist name" />
                    <UButton type="submit" label="Create list" class="w-[140px] h-[46px] bg-[#89FF69] flex items-center justify-center text-sm uppercase tracking-[-0.28px] rounded-full font-normal text-black hover:bg-[#77f555]"></UButton>
                </div>
            </UFormGroup>
        </UForm>
      </div>
    </UModal>
    <UModal v-model="create_new_watchlist">
      <div class="p-4 bg-black border border-[#333841] rounded-2xl sm:py-7 sm:px-8">
        <UButton icon="close" class="absolute p-0 bg-black right-3 top-3" @click="create_new_watchlist = false" />
        <div class="mb-6">
            <h3 class="mb-1 text-2xl font-medium uppercase">Create new watchlist</h3>
            <p class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Type your watchlist name</p>
        </div>
        <UForm :validate="validate" :state="state" @submit="onSubmit">
            <UFormGroup name="name">
                <div class="flex w-full gap-4">
                    <UInput icon="edit" v-model="state.name" input-class="input-feild" class="flex-1" placeholder="Your watchlist name" />
                </div>
            </UFormGroup>
            <div class="flex justify-between mt-6">
                <UButton label="Back" class="w-[140px] h-[46px] bg-black flex items-center justify-center text-sm uppercase tracking-[-0.28px] rounded-full font-normal text-white border border-[#333841] hover:bg-[#151515]"></UButton>
                <UButton type="submit" label="Create list" class="w-[140px] h-[46px] bg-[#89FF69] flex items-center justify-center text-sm uppercase tracking-[-0.28px] rounded-full font-normal text-black hover:bg-[#77f555]"></UButton>
            </div>
        </UForm>
      </div>
    </UModal>
    <UModal v-model="add_watchlist">
      <div class="p-4 bg-black border border-[#333841] rounded-2xl sm:py-7 sm:px-8">
        <UButton icon="close" class="absolute p-0 bg-black right-3 top-3" @click="add_watchlist = false" />
        <div class="mb-6">
            <h3 class="mb-1 text-2xl font-medium uppercase">Add Wallet To List</h3>
            <p class="text-[12px] leading-5 text-[rgba(255,255,255,0.7)]">Enter a wallet address and add to your watchlist</p>
        </div>
        <UForm :validate="validate" :state="state" class="" @submit="onSubmit">
            <UFormGroup name="name">
                <UInput icon="edit" v-model="state.name" input-class="input-feild" class="w-full" placeholder="Type your wallet address" />
            </UFormGroup>
            <div class="mt-7 pt-5 -mx-4 sm:-mx-8 border-t border-[#333841]">
                <h4 class="mb-2 px-4 sm:px-8 text-[12px] leading-5 text-[#A0A0A0]">Add to your watchlist</h4>
                <ul class="">
                    <li
                        v-for="(item, index) in watchlist"
                        :key="index"
                        @click="setActiveItem(index)"
                        :class="{'bg-gradient-1 ': activeItem === index, 'hover:bg-[#18191C]': activeItem !== index}"
                        class="flex items-center justify-between px-4 py-2 text-[12px] leading-5 cursor-pointer sm:px-8"
                        >
                        {{ item }}
                        <UIcon v-if="activeItem === index" name="tick" class="block w-5 h-5" />
                    </li>
                </ul>
            </div>
            <UButton type="submit" label="Done" class="w-[140px] h-[46px] ml-auto mt-4 bg-[#89FF69] flex items-center justify-center text-sm uppercase tracking-[-0.28px] rounded-full font-normal text-black hover:bg-[#77f555]"></UButton>
        </UForm>
      </div>
    </UModal>
</template>
