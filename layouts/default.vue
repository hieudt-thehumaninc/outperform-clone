<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
import "~/assets/css/style.scss"

const links = [{
  label: 'SmartMoney Radar',
  to: '/',
}, {
  label: "SmartMoney Scanner",
  to: '/'
},{
  label: 'Copy Trading Bot',
  to: '/',
  icon: 'arrow-up'
},{
  label: 'Alert Bot',
  to: '/',
  icon: 'arrow-up'
}]
</script>

<template>
  <div>
   <div class="hidden bg-[#121314] lg:flex items-center xl:px-[60px] px-6 py-4 border-b border-[rgba(255,255,255,0.1)]">
    <ULink to="/"><img src="~/assets/img/logo.svg" alt=""></ULink>
    <UVerticalNavigation  :links="links">
        <template #default="{ link }">
          <span class="font-normal text-sm text-[#A0A0A0] group-hover:text-white relative">{{ link.label }}</span>
        </template>
    </UVerticalNavigation>
    <div class="flex items-center ml-auto group">
      <img src="~/assets/img/avt.png" class="object-cover rounded-full w-9 h-9" alt="Avatar">
      <span class="block ml-2.5 mr-3 text-sm font-medium tracking-[-0.42px]">0x2...eb8</span>
      <UButton icon="logout" class="p-1 bg-transparent rounded-full"></UButton>
    </div>
   </div>
   <div class="fixed top-0 left-0 w-full h-full -z-10">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
   <MenuMobile />
   
    <slot />
    
  </div>
</template>
