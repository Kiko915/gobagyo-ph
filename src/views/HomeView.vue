<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateTo(path) {
  router.push(path)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center py-8">
        <div class="mb-8 relative max-w-4xl mx-auto">
          <img 
            src="../assets/gobagyo-hero.png" 
            alt="GoBagyo - Typhoon Preparedness Companion" 
            class="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
      
      <!-- Features Section -->
      <div class="mb-16">
        <h2 class="text-4xl font-bold text-slate-800 text-center mb-12 relative inline-block mx-auto">
          <span class="relative z-10">Quick Actions</span>
          <span class="absolute -bottom-2 left-0 right-0 h-3 bg-orange-500/20 rounded-full -z-10 transform -rotate-1"></span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Weather Map Card -->
          <div 
            @click="navigateTo('/weather')"
            class="group relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-sky-500 transform origin-left transition-all duration-300 group-hover:h-2"></div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full">
              <div class="text-5xl mb-5 bg-white/50 p-4 rounded-full shadow-inner transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">🌤️</div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Weather Map</h3>
              <p class="text-slate-600 text-sm">View real-time weather conditions and typhoon tracking</p>
              <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="px-3 py-1 bg-blue-500 text-white text-xs rounded-full shadow-md">View Map</span>
              </div>
            </div>
            <div class="absolute bottom-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full -mr-10 -mb-10 z-0"></div>
          </div>
          
          <!-- Checklist Card -->
          <div 
            @click="navigateTo('/checklist')"
            class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500 transform origin-left transition-all duration-300 group-hover:h-2"></div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full">
              <div class="text-5xl mb-5 bg-white/50 p-4 rounded-full shadow-inner transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">📋</div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Checklist</h3>
              <p class="text-slate-600 text-sm">Stay prepared with our comprehensive typhoon checklist</p>
              <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="px-3 py-1 bg-amber-500 text-white text-xs rounded-full shadow-md">Open List</span>
              </div>
            </div>
            <div class="absolute bottom-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full -mr-10 -mb-10 z-0"></div>
          </div>
          
          <!-- Typhoon Info Card -->
          <div 
            @click="navigateTo('/typhoon')"
            class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500 transform origin-left transition-all duration-300 group-hover:h-2"></div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full">
              <div class="text-5xl mb-5 bg-white/50 p-4 rounded-full shadow-inner transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">🌀</div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Typhoon Info</h3>
              <p class="text-slate-600 text-sm">Get detailed information about current typhoons</p>
              <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="px-3 py-1 bg-indigo-500 text-white text-xs rounded-full shadow-md">View Info</span>
              </div>
            </div>
            <div class="absolute bottom-0 right-0 w-24 h-24 bg-indigo-400/10 rounded-full -mr-10 -mb-10 z-0"></div>
          </div>
          
          <!-- Education Card -->
          <div 
            @click="navigateTo('/education')"
            class="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500 transform origin-left transition-all duration-300 group-hover:h-2"></div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full">
              <div class="text-5xl mb-5 bg-white/50 p-4 rounded-full shadow-inner transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">📚</div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Education</h3>
              <p class="text-slate-600 text-sm">Learn about typhoon safety and preparedness</p>
              <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="px-3 py-1 bg-green-500 text-white text-xs rounded-full shadow-md">Learn More</span>
              </div>
            </div>
            <div class="absolute bottom-0 right-0 w-24 h-24 bg-green-400/10 rounded-full -mr-10 -mb-10 z-0"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>