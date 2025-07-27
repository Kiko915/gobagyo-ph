<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center py-6">
        <h1 class="text-4xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Typhoon Checklist
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          Stay prepared with our comprehensive typhoon preparedness checklist
        </p>
      </div>

      <!-- Checklist Categories -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <!-- Before Typhoon -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
            <span class="text-2xl">⚠️</span>
            Before Typhoon
          </h2>
          <div class="space-y-3">
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Stock up on food and water (3-day supply)</span>
            </div>
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Charge all electronic devices</span>
            </div>
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Secure loose objects outside</span>
            </div>
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Prepare emergency kit</span>
            </div>
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Know evacuation routes</span>
            </div>
          </div>
        </div>

        <!-- During Typhoon -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
            <span class="text-2xl">🌀</span>
            During Typhoon
          </h2>
          <div class="space-y-3">
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Stay indoors and away from windows</span>
            </div>
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Monitor weather updates</span>
            </div>
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Keep emergency contacts handy</span>
            </div>
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Avoid using electrical appliances</span>
            </div>
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" class="w-5 h-5 text-orange-600 rounded focus:ring-orange-500">
              <span class="text-slate-700">Stay in the strongest part of your home</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Emergency Kit Section -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg mb-8">
        <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
          <span class="text-2xl">👜</span>
          Emergency Kit Checklist
        </h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="space-y-2">
            <h3 class="font-medium text-slate-700">Essentials</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">Flashlight & batteries</span>
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">First aid kit</span>
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">Portable radio</span>
              </div>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="font-medium text-slate-700">Food & Water</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">Bottled water (1 gallon/person/day)</span>
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">Non-perishable food</span>
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">Manual can opener</span>
              </div>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="font-medium text-slate-700">Documents</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">Important documents</span>
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">Emergency contacts</span>
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600">Cash in small bills</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-slate-800">Preparation Progress</h3>
          <span class="text-2xl font-bold text-orange-600">0%</span>
        </div>
        <div class="w-full bg-slate-200 rounded-full h-3">
          <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-300" style="width: 0%"></div>
        </div>
        <p class="text-sm text-slate-600 mt-2">Complete the checklist items above to track your progress</p>
      </div>
    </div>
  </div>
</template> 