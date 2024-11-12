<script setup lang="ts">
const isOpen = ref(false)

const links = [{
  label: 'Features',
  to: '/feature',
}, {
  label: "Docs",
  to: '/docs'
}]
</script>

<template>
  <div class="w-full absolute flex bg-black px-4 py-2 md:hidden border-b border-[#354555] z-10">
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
  <USlideover v-model="isOpen" class="box-sidebar">
    <div class="px-4 py-8">
      <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="absolute text-white bg-black right-3 top-2" @click="isOpen = false" />
      <UVerticalNavigation @click="isOpen = false"  :links="links">
        <template #default="{ link }">
            <span class="font-normal text-lg text-[#fff] leading-7 group-hover:text-primary relative uppercase">{{ link.label }}</span>
        </template>
      </UVerticalNavigation>
      <div class="flex items-center gap-3 mt-4 ml-auto">
        <ULink icon="x" class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/x.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"></ULink>
        <ULink icon="x" class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/telegram.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"></ULink>
        <ULink icon="x" class="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-[#40484D] bg-[url('~/assets/img/dextools.svg')] bg-no-repeat bg-center hover:border-[#89FF69]"></ULink>
      </div>
      <UButton label="GET STARTED" class="bg-[#121314] mt-8 px-6 py-2.5 rounded-full border border-[#40484D] tracking-[-0.32px] font-normal hover:bg-[#333]"></UButton>
    </div>
  </USlideover>
</template>
