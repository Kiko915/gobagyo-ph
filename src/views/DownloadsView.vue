<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center py-6">
        <h1 class="text-4xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Downloads
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          Access important documents, guides, and resources for typhoon preparedness
        </p>
      </div>

      <!-- Download Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Emergency Guides -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <div class="text-4xl mb-4">📋</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Emergency Guides</h3>
          <p class="text-slate-600 mb-4">Comprehensive guides for typhoon preparedness and response</p>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div class="flex items-center gap-3">
                <span class="text-2xl">📄</span>
                <div>
                  <div class="font-medium text-slate-800">Typhoon Preparedness Guide</div>
                  <div class="text-sm text-slate-500">PDF • 2.3 MB</div>
                </div>
              </div>
              <button class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Download
              </button>
            </div>
            <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div class="flex items-center gap-3">
                <span class="text-2xl">📄</span>
                <div>
                  <div class="font-medium text-slate-800">Emergency Kit Checklist</div>
                  <div class="text-sm text-slate-500">PDF • 1.1 MB</div>
                </div>
              </div>
              <button class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>

        <!-- Safety Materials -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <div class="text-4xl mb-4">🛡️</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Safety Materials</h3>
          <p class="text-slate-600 mb-4">Safety tips and guidelines for different scenarios</p>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div class="flex items-center gap-3">
                <span class="text-2xl">📄</span>
                <div>
                  <div class="font-medium text-slate-800">Safety Guidelines</div>
                  <div class="text-sm text-slate-500">PDF • 1.8 MB</div>
                </div>
              </div>
              <button class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Download
              </button>
            </div>
            <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div class="flex items-center gap-3">
                <span class="text-2xl">📄</span>
                <div>
                  <div class="font-medium text-slate-800">Evacuation Procedures</div>
                  <div class="text-sm text-slate-500">PDF • 1.5 MB</div>
                </div>
              </div>
              <button class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>

        <!-- Educational Resources -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
          <div class="text-4xl mb-4">📚</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Educational Resources</h3>
          <p class="text-slate-600 mb-4">Learn about typhoons and weather patterns</p>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div class="flex items-center gap-3">
                <span class="text-2xl">📄</span>
                <div>
                  <div class="font-medium text-slate-800">Typhoon Science Guide</div>
                  <div class="text-sm text-slate-500">PDF • 3.2 MB</div>
                </div>
              </div>
              <button class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Download
              </button>
            </div>
            <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div class="flex items-center gap-3">
                <span class="text-2xl">📄</span>
                <div>
                  <div class="font-medium text-slate-800">Weather Patterns</div>
                  <div class="text-sm text-slate-500">PDF • 2.1 MB</div>
                </div>
              </div>
              <button class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Apps Section -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg mb-8">
        <h2 class="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
          <span class="text-2xl">📱</span>
          Mobile Applications
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                <span class="text-2xl text-white">🌤️</span>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-blue-800 mb-1">PAGASA Mobile App</h3>
                <p class="text-sm text-blue-600 mb-2">Official weather app from PAGASA</p>
                <div class="flex gap-2">
                  <button class="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                    Google Play
                  </button>
                  <button class="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                    App Store
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                <span class="text-2xl text-white">🚨</span>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-green-800 mb-1">NDRRMC Mobile App</h3>
                <p class="text-sm text-green-600 mb-2">Emergency response and alerts</p>
                <div class="flex gap-2">
                  <button class="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                    Google Play
                  </button>
                  <button class="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                    App Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Downloads -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg mb-8">
        <h2 class="text-2xl font-semibold text-slate-800 mb-6">Recent Downloads</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span class="text-xl">📄</span>
              </div>
              <div>
                <div class="font-medium text-slate-800">Typhoon Preparedness Guide</div>
                <div class="text-sm text-slate-500">Downloaded 2 days ago</div>
              </div>
            </div>
            <button class="text-orange-600 hover:text-orange-700 font-medium">
              Download Again
            </button>
          </div>
          <div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span class="text-xl">📄</span>
              </div>
              <div>
                <div class="font-medium text-slate-800">Safety Guidelines</div>
                <div class="text-sm text-slate-500">Downloaded 1 week ago</div>
              </div>
            </div>
            <button class="text-orange-600 hover:text-orange-700 font-medium">
              Download Again
            </button>
          </div>
        </div>
      </div>

      <!-- Download Statistics -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
        <h2 class="text-2xl font-semibold text-slate-800 mb-6">Download Statistics</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
            <div class="text-3xl font-bold text-orange-600 mb-2">156</div>
            <div class="text-orange-700 font-medium">Total Downloads</div>
          </div>
          <div class="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div class="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div class="text-blue-700 font-medium">This Month</div>
          </div>
          <div class="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <div class="text-3xl font-bold text-green-600 mb-2">8</div>
            <div class="text-green-700 font-medium">This Week</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 