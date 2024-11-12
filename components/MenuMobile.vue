<script setup lang="ts">
const isOpen = ref(false)

const links = [{
  label: 'SmartMoney Radar',
  to: '/smartmoney-radar',
}, {
  label: "SmartMoney Scanner",
  to: ''
},{
  label: 'Copy Trading Bot',
  to: '/copy-trading-bot',
  icon: 'arrow-up'
},{
  label: 'Alert Bot',
  to: '/alert-bot',
  icon: 'arrow-up'
}]
</script>

<template>
  <div class="w-full flex bg-black px-4 py-2 lg:hidden border-b border-[#354555] z-10">
    <ULink to="/"><img src="~/assets/img/logo.svg" alt=""></ULink>
    <UButton
            @click="isOpen = true"
            icon="i-heroicons-bars-3-solid"
            size="sm"
            color="primary"
            variant="solid"
            :trailing="false"
            class="absolute right-3.5 top-3 bg-none text-[#fff] bg-black"
    />
  </div>
  <USlideover v-model="isOpen" class="box-sidebar-df">
    <div class="px-4 py-8">
      <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="absolute text-white bg-black right-3 top-2" @click="isOpen = false" />
      <ULink to="/"><img src="~/assets/img/logo.svg" alt=""></ULink>
      <UVerticalNavigation @click="isOpen = false"  :links="links">
        <template #default="{ link }">
            <span class="font-light text-lg text-[#fff] leading-7 group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UVerticalNavigation>
      <div class="flex items-center ml-auto group">
        <img src="~/assets/img/avt.png" class="object-cover rounded-full w-9 h-9" alt="Avatar">
        <span class="block ml-2.5 mr-3 text-sm font-medium tracking-[-0.42px]">0x2...eb8</span>
        <UButton icon="logout" class="p-1 bg-transparent rounded-full"></UButton>
      </div>
    </div>
  </USlideover>
</template>
