<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center py-6">
        <h1 class="text-4xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Settings
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          Customize your GoBagyo experience and manage your preferences
        </p>
      </div>

      <!-- Settings Sections -->
      <div class="space-y-6">
        <!-- Notifications -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
            <span class="text-2xl">🔔</span>
            Notifications
          </h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Weather Alerts</div>
                <div class="text-sm text-slate-600">Get notified about severe weather conditions</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Typhoon Updates</div>
                <div class="text-sm text-slate-600">Receive updates about typhoon developments</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Emergency Alerts</div>
                <div class="text-sm text-slate-600">Critical emergency notifications</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer">
                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Location Settings -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
            <span class="text-2xl">📍</span>
            Location
          </h2>
          <div class="space-y-4">
            <div class="p-4 bg-slate-50 rounded-lg">
              <div class="font-medium text-slate-800 mb-2">Current Location</div>
              <div class="text-slate-600 mb-4 flex items-center gap-2">
                <span v-if="isLoadingLocation" class="flex items-center gap-2">
                  <svg class="animate-spin h-4 w-4 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Getting location...
                </span>
                <span v-else-if="currentLocation">
                  {{ currentLocation.name }}
                  <span v-if="currentLocation.manual" class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full ml-2">Manual</span>
                </span>
                <span v-else class="text-slate-400">No location set</span>
              </div>
              <div class="flex gap-2">
                <button 
                  @click="handleChangeLocation"
                  class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Change Location
                </button>
                <button 
                  v-if="!isLoadingLocation && autoDetectLocation"
                  @click="getCurrentLocation"
                  class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Auto-detect Location</div>
                <div class="text-sm text-slate-600">Automatically update location based on GPS</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" :checked="autoDetectLocation" @change="toggleAutoDetect">
                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Display Settings -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
            <span class="text-2xl">🎨</span>
            Display
          </h2>
          <div class="space-y-4">
            <div class="p-4 bg-slate-50 rounded-lg">
              <div class="font-medium text-slate-800 mb-2">Theme</div>
              <div class="flex gap-2">
                <button 
                  @click="setTheme('light')"
                  :class="theme === 'light' ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'"
                  class="px-4 py-2 rounded-lg transition-colors"
                >
                  Light
                </button>
                <button 
                  @click="setTheme('dark')"
                  :class="theme === 'dark' ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'"
                  class="px-4 py-2 rounded-lg transition-colors"
                >
                  Dark
                </button>
                <button 
                  @click="setTheme('auto')"
                  :class="theme === 'auto' ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'"
                  class="px-4 py-2 rounded-lg transition-colors"
                >
                  Auto
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Reduce Motion</div>
                <div class="text-sm text-slate-600">Minimize animations and transitions</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" :checked="reduceMotion" @change="toggleReduceMotion">
                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Data & Privacy -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
            <span class="text-2xl">🔒</span>
            Data & Privacy
          </h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Data Collection</div>
                <div class="text-sm text-slate-600">Allow app to collect usage data for improvements</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
            <div class="p-4 bg-slate-50 rounded-lg">
              <div class="font-medium text-slate-800 mb-2">Clear Data</div>
              <div class="text-slate-600 mb-4">Remove all stored data and reset preferences</div>
              <button 
                @click="clearAllData"
                class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear All Data
              </button>
            </div>
          </div>
        </div>

        <!-- About & Support -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
            <span class="text-2xl">ℹ️</span>
            About & Support
          </h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">App Version</div>
                <div class="text-sm text-slate-600">{{ version }}</div>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Help & Support</div>
                <div class="text-sm text-slate-600">Get help and contact support</div>
              </div>
              <a href="mailto:codexcreativa@gmail.com" class="text-orange-600 hover:text-orange-700 font-medium">
                Contact Support
              </a>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Privacy Policy</div>
                <div class="text-sm text-slate-600">Read our privacy policy</div>
              </div>
              <button 
                @click="$router.push('/privacy-policy')"
                class="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                View Policy
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Terms of Service</div>
                <div class="text-sm text-slate-600">Read our terms of service</div>
              </div>
              <button 
                @click="$router.push('/terms-of-service')"
                class="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                View Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Confirmation Modal -->
  <ConfirmModal
    v-model:isVisible="showConfirmModal"
    title="Clear All Data"
    message="Are you sure you want to clear all data? This action cannot be undone and will reset all your preferences."
    confirmText="Clear Data"
    cancelText="Cancel"
    @confirm="handleConfirmClear"
    @cancel="handleCancelClear"
  />

  <!-- Location Alert Modal -->
  <AlertModal
    :isVisible="showLocationAlert"
    title="Location Access"
    :message="locationError || 'Unable to access your location.'"
    type="permission"
    @close="showLocationAlert = false"
    @retry="handleRetryLocation"
    @manual="handleManualLocationSet"
  />

  <!-- Manual Location Input Modal -->
  <div v-if="showManualLocationInput" class="fixed inset-0 z-[9999] flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" @click="cancelManualLocation"></div>
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4">
      <div class="flex items-center justify-between p-6 border-b border-slate-200">
        <h3 class="text-xl font-semibold text-slate-800">Set Location</h3>
        <button @click="cancelManualLocation" class="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-6">
        <label class="block text-sm font-medium text-slate-700 mb-2">Location Name</label>
        <input 
          v-model="manualLocationInput"
          type="text" 
          placeholder="e.g., Manila, Philippines"
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          @keyup.enter="saveManualLocation"
        >
        <p class="text-sm text-slate-500 mt-2">Enter your city and country for accurate weather information.</p>
      </div>
      <div class="flex justify-end gap-3 p-6 border-t border-slate-200">
        <button @click="cancelManualLocation" class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors">
          Cancel
        </button>
        <button @click="saveManualLocation" class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
          Save Location
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import packageInfo from '../../package.json';
import { useTheme } from '../composables/useTheme.js';
import { useReduceMotion } from '../composables/useReduceMotion.js';
import { useLocation } from '../composables/useLocation.js';
import ConfirmModal from '../components/ConfirmModal.vue';
import AlertModal from '../components/AlertModal.vue';

const version = ref(packageInfo.version);
const { theme, setTheme, initTheme } = useTheme();
const { reduceMotion, toggleReduceMotion, initReduceMotion } = useReduceMotion();
const { 
  currentLocation, 
  locationError, 
  isLoadingLocation, 
  autoDetectLocation, 
  initLocation, 
  getCurrentLocation, 
  toggleAutoDetect, 
  clearLocationError, 
  setManualLocation 
} = useLocation();

// Modal state
const showConfirmModal = ref(false);
const showLocationAlert = ref(false);
const showManualLocationInput = ref(false);
const manualLocationInput = ref('');

const clearAllData = () => {
  showConfirmModal.value = true;
};

const handleConfirmClear = () => {
  try {
    // Clear all localStorage data
    localStorage.clear();
    
    // Reset theme to default
    setTheme('light');
    
    // Reload the page to reset the app state
    window.location.reload();
  } catch (error) {
    console.error('Error clearing data:', error);
    alert('An error occurred while clearing data. Please try again.');
  }
};

const handleCancelClear = () => {
  // Modal will close automatically via v-model
};

// Location functions
const handleChangeLocation = () => {
  showManualLocationInput.value = true;
  manualLocationInput.value = currentLocation.value?.name || '';
};

const handleLocationPermissionError = () => {
  if (locationError.value) {
    showLocationAlert.value = true;
  }
};

const handleRetryLocation = () => {
  clearLocationError();
  showLocationAlert.value = false;
  getCurrentLocation();
};

const handleManualLocationSet = () => {
  showLocationAlert.value = false;
  showManualLocationInput.value = true;
};

const saveManualLocation = () => {
  if (manualLocationInput.value.trim()) {
    setManualLocation(manualLocationInput.value.trim());
    showManualLocationInput.value = false;
    showLocationAlert.value = false; // Ensure alert modal is closed
    manualLocationInput.value = '';
  }
};

const cancelManualLocation = () => {
  showManualLocationInput.value = false;
  manualLocationInput.value = '';
};

// Watch for location errors
const watchLocationError = () => {
  if (locationError.value && !showLocationAlert.value) {
    showLocationAlert.value = true;
  }
};

onMounted(() => {
  initTheme();
  initReduceMotion();
  initLocation();
});
</script>