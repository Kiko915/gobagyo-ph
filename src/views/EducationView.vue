<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center py-6">
        <h1 class="text-4xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Typhoon Education
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          Learn about typhoon safety, preparedness, and emergency response
        </p>
      </div>

      <!-- Featured Topics -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div class="text-4xl mb-4">🌪️</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Understanding Typhoons</h3>
          <p class="text-slate-600 mb-4">Learn about typhoon formation, categories, and how they develop</p>
          <div class="text-orange-600 font-medium">Read More →</div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div class="text-4xl mb-4">🛡️</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Safety Guidelines</h3>
          <p class="text-slate-600 mb-4">Essential safety tips before, during, and after a typhoon</p>
          <div class="text-orange-600 font-medium">Read More →</div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div class="text-4xl mb-4">🏠</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Home Preparation</h3>
          <p class="text-slate-600 mb-4">How to prepare your home and family for typhoon season</p>
          <div class="text-orange-600 font-medium">Read More →</div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Communication Plans</h3>
          <p class="text-slate-600 mb-4">How to stay connected during emergencies</p>
          <div class="text-orange-600 font-medium">Read More →</div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div class="text-4xl mb-4">🚑</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Emergency Response</h3>
          <p class="text-slate-600 mb-4">What to do when disaster strikes</p>
          <div class="text-orange-600 font-medium">Read More →</div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div class="text-4xl mb-4">🔋</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Emergency Kits</h3>
          <p class="text-slate-600 mb-4">Essential items for your emergency preparedness kit</p>
          <div class="text-orange-600 font-medium">Read More →</div>
        </div>
      </div>

      <!-- Typhoon Formation Process -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg mb-8">
        <h2 class="text-2xl font-semibold text-slate-800 mb-6">How Typhoons Form</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl">🌊</span>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Warm Ocean Water</h3>
            <p class="text-sm text-slate-600">Water temperature above 26.5°C provides energy</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl">💨</span>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Low Pressure System</h3>
            <p class="text-sm text-slate-600">Atmospheric pressure drops, creating a vortex</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl">🌪️</span>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Rotation Begins</h3>
            <p class="text-sm text-slate-600">Coriolis effect causes the system to spin</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl">🌀</span>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Typhoon Forms</h3>
            <p class="text-sm text-slate-600">Sustained winds reach 118+ km/h</p>
          </div>
        </div>
      </div>

      <!-- Safety Tips -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
            <span class="text-2xl">✅</span>
            Do's
          </h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Stay informed with official weather updates</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Prepare an emergency kit in advance</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Secure loose objects outside your home</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Know your evacuation routes</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Keep important documents in a waterproof container</p>
            </div>
          </div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <h2 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
            <span class="text-2xl">❌</span>
            Don'ts
          </h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Don't go outside during strong winds</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Don't drive through flooded areas</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Don't use electrical appliances during storms</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Don't ignore evacuation orders</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-slate-700">Don't wait until the last minute to prepare</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Resources -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
        <h2 class="text-2xl font-semibold text-slate-800 mb-6">Additional Resources</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h3 class="font-semibold text-blue-800 mb-2">Official Websites</h3>
            <ul class="space-y-2 text-sm text-blue-700">
              <li>• PAGASA (pagasa.dost.gov.ph)</li>
              <li>• NDRRMC (ndrrmc.gov.ph)</li>
              <li>• DOST (dost.gov.ph)</li>
            </ul>
          </div>
          <div class="p-4 bg-green-50 rounded-xl border border-green-200">
            <h3 class="font-semibold text-green-800 mb-2">Mobile Apps</h3>
            <ul class="space-y-2 text-sm text-green-700">
              <li>• PAGASA Mobile App</li>
              <li>• NDRRMC Mobile App</li>
              <li>• Weather Apps (AccuWeather, Weather.com)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 