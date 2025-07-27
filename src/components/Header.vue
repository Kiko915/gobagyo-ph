<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHelp() {
  // Navigate to help page
  router.push('/help')
}
</script>

<template>
  <header class="header-component fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-b border-white/30 dark:border-slate-600/30 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img 
          src="/src/assets/logo/gobagyo_icon_w_text_horizontal.png" 
          alt="GoBagyo PH" 
          class="h-8 sm:h-10 object-contain"
        />
      </div>

      <!-- Help Button -->
      <button 
        @click="goToHelp"
        class="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        title="Help"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-5 h-5"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" 
          />
        </svg>
      </button>
    </div>
  </header>
</template>