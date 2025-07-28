<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center py-6">
        <h1 class="text-4xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Weather Map
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          Real-time weather conditions and typhoon tracking
        </p>
      </div>

      <!-- Map Container -->
      <div class="mb-8">
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/30 shadow-lg">
          <div class="text-6xl mb-6">🗺️</div>
          <h3 class="text-2xl font-semibold text-slate-800 mb-4">Interactive Weather Map</h3>
          <p class="text-slate-600 text-lg mb-8 max-w-md mx-auto">
            Real-time weather data and typhoon tracking will be displayed here
          </p>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div class="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-2xl">🌪️</span>
              <span class="font-medium text-slate-700">Typhoon Paths</span>
            </div>
            <div class="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-2xl">🌧️</span>
              <span class="font-medium text-slate-700">Rainfall Data</span>
            </div>
            <div class="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-2xl">💨</span>
              <span class="font-medium text-slate-700">Wind Speeds</span>
            </div>
            <div class="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-2xl">🌡️</span>
              <span class="font-medium text-slate-700">Temperature</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Weather Info -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
          <h3 class="text-2xl font-semibold text-slate-800 mb-6 text-center">Current Conditions</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div class="text-3xl font-bold text-orange-600 mb-2">28°C</div>
              <div class="text-slate-600 font-medium">Temperature</div>
            </div>
            <div class="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div class="text-3xl font-bold text-orange-600 mb-2">75%</div>
              <div class="text-slate-600 font-medium">Humidity</div>
            </div>
            <div class="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div class="text-3xl font-bold text-orange-600 mb-2">15 km/h</div>
              <div class="text-slate-600 font-medium">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Location Alert Modal -->
  <AlertModal
    :isVisible="showLocationAlert"
    title="Location Required"
    message="To view weather information, please set your location in the settings page."
    type="info"
    @close="handleCloseAlert"
    @retry="handleGoToSettings"
    retryText="Go to Settings"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLocation } from '../composables/useLocation.js'
import AlertModal from '../components/AlertModal.vue'

const router = useRouter()
const { currentLocation, initLocation } = useLocation()
const showLocationAlert = ref(false)

function handleGoToSettings() {
  showLocationAlert.value = false
  router.push('/settings')
}

function handleCloseAlert() {
  showLocationAlert.value = false
}

onMounted(() => {
  initLocation()
  
  // Check if location is set, if not show alert
  if (!currentLocation.value) {
    showLocationAlert.value = true
  }
})
</script>