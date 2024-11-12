<script setup lang="ts">
import { ref, computed } from 'vue';

const faqs = [
  {
    id: 1,
    question: "HOW DOES OUTPERFORMAI EMPOWER TRADERS?",
    answer: "OutperformAI provides AI-driven insights, helping traders track and analyze smart money movements for informed decision-making, boosting their trading strategies."
  },
  {
    id: 2,
    question: "WHAT ARE THE CORE FEATURES OF OUTPERFORMAI?",
    answer: "Core features include real-time analytics, trading alerts, and AI-driven predictions."
  },
  {
    id: 3,
    question: "Are there platform fees for using OutperformAI?",
    answer: ""
  },
  {
    id: 4,
    question: "What is the $OPMAI token?",
    answer: ""
  },
  {
    id: 5,
    question: "What is the vision of OutperformAI?					",
    answer: ""
  }
];


const selectedId = ref<number | null>(faqs[0]?.id || null);

const selectedAnswer = computed(() => {
  const selectedFaq = faqs.find((faq) => faq.id === selectedId.value);
  return selectedFaq ? selectedFaq.answer : null;
});

function toggleAnswer(id: number) {
  // Only toggle to null if a different question is selected
  selectedId.value = selectedId.value === id ? id : id;
}
</script>

<template>
  <div class="flex flex-wrap gap-4 sm:gap-[74px] mb-28">
    <ul class="w-full sm:w-1/2 xl:w-[600px] divide-y divide-[rgba(255,255,255,0.18)]">
        <li
          v-for="item in faqs"
          :key="item.id"
          @click="toggleAnswer(item.id)"
          :class="{
            'flex gap-2 py-4 sm:py-7 xl:text-xl text-lg font-medium cursor-pointer': true,
            'text-[#5F5F5F]': selectedId !== item.id,
            'text-white active': selectedId === item.id
        }"
        >
        <span class="text-[#89FF69]">{{ item.id }}. </span>
          <span class="flex-1">{{ item.question }}</span>
        </li>
    </ul>
    <div class="w-full sm:flex-1 rounded-[20px] py-7 px-8 bg-gr border border-[#262E33] shadow-[4px_1px_4px_0_rgba(255,255,255,0.55)_inset] overflow-auto">
      <div v-if="selectedAnswer" class="xl:text-[28px] xl:leading-10 text-xl tracking-[-0.56px]">
        <p>{{ selectedAnswer }}</p>
      </div>
    </div>
  </div>
</template>
