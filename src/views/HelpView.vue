<script setup>
import { ref } from 'vue'

// State to track which FAQ items are open
const openFaqs = ref([])

// Toggle FAQ open/closed state
function toggleFaq(index) {
  if (openFaqs.value.includes(index)) {
    // Close the FAQ if it's already open
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    // Open the FAQ
    openFaqs.value.push(index)
  }
}

// FAQ data
const faqs = [
  {
    question: 'What is GoBagyo?',
    answer: 'GoBagyo is a comprehensive typhoon preparedness application designed to help Filipinos prepare for, monitor, and respond to typhoons. The app provides real-time weather updates, typhoon tracking, preparedness checklists, educational resources, and more.'
  },
  {
    question: 'How do I use the Weather Map?',
    answer: 'The Weather Map feature provides real-time weather information and typhoon tracking. Navigate to the Weather section from the bottom navigation bar to access the map. You can view current weather conditions, typhoon paths, and forecasts.'
  },
  {
    question: 'How do I use the Preparedness Checklist?',
    answer: 'The Preparedness Checklist helps you ensure you have everything needed before, during, and after a typhoon. Access it from the bottom navigation bar, and check off items as you prepare. The app will save your progress so you can continue later.'
  },
  {
    question: 'Where does the weather data come from?',
    answer: 'GoBagyo sources its weather data from PAGASA (Philippine Atmospheric, Geophysical and Astronomical Services Administration) and other reliable international weather services to provide the most accurate and up-to-date information.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-6xl mx-auto">
      <!-- Help Section Header -->
      <div class="text-center py-8">
        <h1 class="text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Help Center
        </h1>
        <p class="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Find answers to your questions about GoBagyo
        </p>
      </div>
      
      <!-- FAQ Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-semibold text-slate-800 mb-8">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
          <!-- FAQ Accordion Items -->
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <!-- FAQ Header (always visible) -->
            <button 
              @click="toggleFaq(index)" 
              class="w-full p-6 text-left flex justify-between items-center group"
            >
              <h3 class="text-xl font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-200">
                {{ faq.question }}
              </h3>
              <!-- Animated chevron icon -->
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                class="w-6 h-6 text-orange-600 transition-transform duration-300"
                :class="{ 'rotate-180': openFaqs.includes(index) }"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            
            <!-- FAQ Content (expandable) -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="openFaqs.includes(index)" class="overflow-hidden">
                <div class="px-6 pb-6 pt-0">
                  <div class="w-full border-t border-slate-200 mb-4"></div>
                  <p class="text-slate-700">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      
      <!-- Contact Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-semibold text-slate-800 mb-8">Need More Help?</h2>
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg text-center">
          <p class="text-xl text-slate-700 mb-6">
            If you couldn't find the answer to your question, feel free to contact our support team.
          </p>
          <a href="mailto:codexcreativa@gmail.com" class="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</template>