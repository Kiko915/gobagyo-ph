<template>
  <div v-if="isVisible" class="fixed inset-0 z-[9999] flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div 
      class="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity"
      @click="$emit('close')"
    ></div>
    
    <!-- Modal -->
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
      <!-- Header -->
      <div class="flex items-center justify-between p-6 border-b border-slate-200">
        <div class="flex items-center gap-3">
          <span class="text-2xl">{{ getIcon() }}</span>
          <h3 class="text-xl font-semibold text-slate-800">{{ title }}</h3>
        </div>
        <button 
          @click="$emit('close')"
          class="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Body -->
      <div class="p-6">
        <p class="text-slate-600 leading-relaxed">{{ message }}</p>
        
        <!-- Action buttons for specific alert types -->
        <div v-if="(type === 'permission' || type === 'info') && showActions" class="mt-6 space-y-3">
          <button 
            @click="$emit('retry')"
            class="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            {{ retryText }}
          </button>
          <button 
            v-if="type === 'permission'"
            @click="$emit('manual')"
            class="w-full px-4 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium"
          >
            Set Location Manually
          </button>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="flex justify-end gap-3 p-6 border-t border-slate-200">
        <button 
          v-if="!showActions || (type !== 'permission' && type !== 'info')"
          @click="$emit('close')"
          class="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium"
        >
          {{ closeText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Alert'
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'info', // 'info', 'warning', 'error', 'permission'
    validator: (value) => ['info', 'warning', 'error', 'permission'].includes(value)
  },
  closeText: {
    type: String,
    default: 'OK'
  },
  retryText: {
    type: String,
    default: 'Try Again'
  },
  showActions: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close', 'retry', 'manual'])

const getIcon = () => {
  switch (props.type) {
    case 'warning':
      return '⚠️'
    case 'error':
      return '❌'
    case 'permission':
      return '📍'
    default:
      return 'ℹ️'
  }
}

// Handle escape key
const handleKeydown = (event) => {
  if (event.key === 'Escape' && props.isVisible) {
    emit('close')
  }
}

// Add event listener when component mounts
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
</script>