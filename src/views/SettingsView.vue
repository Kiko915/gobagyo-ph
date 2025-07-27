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
              <div class="text-slate-600 mb-4">Manila, Philippines</div>
              <button class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Change Location
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Auto-detect Location</div>
                <div class="text-sm text-slate-600">Automatically update location based on GPS</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked>
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
                <input type="checkbox" class="sr-only peer">
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
              <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
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
              <button class="text-orange-600 hover:text-orange-700 font-medium">
                View Policy
              </button>
            </div>
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div class="font-medium text-slate-800">Terms of Service</div>
                <div class="text-sm text-slate-600">Read our terms of service</div>
              </div>
              <button class="text-orange-600 hover:text-orange-700 font-medium">
                View Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import packageInfo from '../../package.json';
import { useTheme } from '../composables/useTheme.js';

const version = ref(packageInfo.version);
const { theme, setTheme, initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>