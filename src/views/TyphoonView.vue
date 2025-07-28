<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center py-6">
        <h1 class="text-4xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Typhoon Information
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          Stay informed with real-time typhoon updates and safety information
        </p>
      </div>

      <!-- Current Typhoon Status -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg mb-8">
        <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
          <span class="text-2xl">🌪️</span>
          Current Typhoon Status
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
            <div class="text-3xl mb-2">🌀</div>
            <h3 class="font-semibold text-red-800 mb-1">Typhoon Name</h3>
            <p class="text-red-600">No active typhoons</p>
          </div>
          <div class="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
            <div class="text-3xl mb-2">📍</div>
            <h3 class="font-semibold text-yellow-800 mb-1">Location</h3>
            <p class="text-yellow-600">Monitoring...</p>
          </div>
          <div class="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div class="text-3xl mb-2">💨</div>
            <h3 class="font-semibold text-blue-800 mb-1">Wind Speed</h3>
            <p class="text-blue-600">-- km/h</p>
          </div>
        </div>
      </div>

      <!-- Typhoon Categories -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg mb-8">
        <h2 class="text-2xl font-semibold text-slate-800 mb-6">Typhoon Categories</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 bg-green-50 rounded-xl border border-green-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-4 h-4 bg-green-500 rounded-full"></div>
              <h3 class="font-semibold text-green-800">Tropical Depression</h3>
            </div>
            <p class="text-sm text-green-600">Wind speed: 39-61 km/h</p>
          </div>
          <div class="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <h3 class="font-semibold text-yellow-800">Tropical Storm</h3>
            </div>
            <p class="text-sm text-yellow-600">Wind speed: 62-88 km/h</p>
          </div>
          <div class="p-4 bg-orange-50 rounded-xl border border-orange-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
              <h3 class="font-semibold text-orange-800">Severe Tropical Storm</h3>
            </div>
            <p class="text-sm text-orange-600">Wind speed: 89-117 km/h</p>
          </div>
          <div class="p-4 bg-red-50 rounded-xl border border-red-200">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-4 h-4 bg-red-500 rounded-full"></div>
              <h3 class="font-semibold text-red-800">Typhoon</h3>
            </div>
            <p class="text-sm text-red-600">Wind speed: 118+ km/h</p>
          </div>
        </div>
      </div>

      <!-- Safety Information -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
            <span class="text-2xl">🛡️</span>
            Safety Tips
          </h2>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Stay indoors and away from windows during strong winds</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Keep emergency supplies ready and easily accessible</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Monitor weather updates from official sources</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Know your evacuation routes and shelter locations</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Avoid driving through flooded areas</p>
            </div>
          </div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
            <span class="text-2xl">📞</span>
            Emergency Contacts
          </h2>
          <div class="space-y-4">
            <div class="p-3 bg-red-50 rounded-lg border border-red-200">
              <div class="font-semibold text-red-800">Emergency Hotline</div>
              <div class="text-red-600">911</div>
            </div>
            <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div class="font-semibold text-blue-800">PAGASA</div>
              <div class="text-blue-600">(02) 8284-0800</div>
            </div>
            <div class="p-3 bg-green-50 rounded-lg border border-green-200">
              <div class="font-semibold text-green-800">NDRRMC</div>
              <div class="text-green-600">(02) 8911-1406</div>
            </div>
            <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div class="font-semibold text-purple-800">Local Government</div>
              <div class="text-purple-600">Check your local hotline</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Weather Alerts -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
        <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
          <span class="text-2xl">⚠️</span>
          Weather Alerts
        </h2>
        <div class="text-center py-8">
          <div class="text-6xl mb-4">🌤️</div>
          <h3 class="text-xl font-semibold text-slate-700 mb-2">No Active Alerts</h3>
          <p class="text-slate-600">Weather conditions are currently normal in your area</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Location Alert Modal -->
  <AlertModal
    :isVisible="showLocationAlert"
    title="Location Required"
    message="To view typhoon information for your area, please set your location in the settings page."
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