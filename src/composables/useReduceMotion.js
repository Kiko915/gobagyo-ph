import { ref, watch } from 'vue'

const reduceMotion = ref(false)

export function useReduceMotion() {
  const initReduceMotion = () => {
    // Get saved preference from localStorage
    const saved = localStorage.getItem('reduce-motion')
    if (saved !== null) {
      reduceMotion.value = JSON.parse(saved)
    } else {
      // Check system preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      reduceMotion.value = mediaQuery.matches
    }
    
    // Apply the preference
    applyReduceMotion()
  }

  const setReduceMotion = (value) => {
    reduceMotion.value = value
    localStorage.setItem('reduce-motion', JSON.stringify(value))
    applyReduceMotion()
  }

  const toggleReduceMotion = () => {
    setReduceMotion(!reduceMotion.value)
  }

  const applyReduceMotion = () => {
    if (reduceMotion.value) {
      document.documentElement.classList.add('reduce-motion')
    } else {
      document.documentElement.classList.remove('reduce-motion')
    }
  }

  // Watch for changes and apply them
  watch(reduceMotion, applyReduceMotion)

  return {
    reduceMotion,
    setReduceMotion,
    toggleReduceMotion,
    initReduceMotion
  }
}