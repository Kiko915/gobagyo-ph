<template>
  <div v-if="isVisible" class="fixed inset-0 z-[9999] flex items-center justify-center">
    <!-- Backdrop -->
    <div 
      class="absolute inset-0 bg-black bg-opacity-30 transition-opacity"
      @click="onCancel"
    ></div>
    
    <!-- Modal -->
    <div class="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
      <!-- Header -->
      <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {{ title }}
        </h3>
      </div>
      
      <!-- Body -->
      <div class="px-6 py-4">
        <p class="text-slate-600 dark:text-slate-300">
          {{ message }}
        </p>
      </div>
      
      <!-- Footer -->
      <div class="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex justify-end space-x-3">
        <button
          @click="onCancel"
          class="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md transition-colors"
        >
          {{ cancelText }}
        </button>
        <button
          @click="onConfirm"
          class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
        >
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Confirm Action'
  },
  message: {
    type: String,
    default: 'Are you sure you want to proceed?'
  },
  confirmText: {
    type: String,
    default: 'Confirm'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  }
})

const emit = defineEmits(['confirm', 'cancel', 'update:isVisible'])

const onConfirm = () => {
  emit('confirm')
  emit('update:isVisible', false)
}

const onCancel = () => {
  emit('cancel')
  emit('update:isVisible', false)
}

// Handle escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && props.isVisible) {
    onCancel()
  }
}

watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Additional animations can be added here if needed */
</style>