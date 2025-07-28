<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center py-6">
        <h1 class="text-4xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          Terms and conditions for using GoBagyo
        </p>
      </div>

      <!-- Content -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
        <div class="prose prose-slate max-w-none">
          <p class="text-sm text-slate-500 mb-6">
            Last updated: {{ lastUpdated }}
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p class="text-slate-600">
              By accessing and using GoBagyo ("the App"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">2. Description of Service</h2>
            <p class="text-slate-600 mb-4">
              GoBagyo is a weather and emergency preparedness application that provides:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>Real-time weather information and forecasts</li>
              <li>Typhoon tracking and alerts</li>
              <li>Emergency preparedness checklists</li>
              <li>Educational resources about weather safety</li>
              <li>Download resources for offline access</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">3. User Responsibilities</h2>
            <p class="text-slate-600 mb-4">
              As a user of GoBagyo, you agree to:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>Use the app in accordance with all applicable laws and regulations</li>
              <li>Not use the app for any unlawful or prohibited activities</li>
              <li>Not attempt to gain unauthorized access to any part of the app</li>
              <li>Not interfere with or disrupt the app's functionality</li>
              <li>Provide accurate information when required</li>
              <li>Keep your device and app updated for optimal security</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">4. Weather Information Disclaimer</h2>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p class="text-yellow-800 font-medium mb-2">⚠️ Important Weather Disclaimer</p>
              <p class="text-yellow-600 text-sm">
                Weather information provided by GoBagyo is for general informational purposes only and should not be the sole basis for making critical safety decisions.
              </p>
            </div>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>Weather data is sourced from third-party providers and may not always be accurate or up-to-date</li>
              <li>Always consult official weather services and local authorities for critical weather decisions</li>
              <li>We are not responsible for any damages resulting from reliance on weather information provided</li>
              <li>Emergency situations require immediate action - do not rely solely on app notifications</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">5. Intellectual Property</h2>
            <p class="text-slate-600 mb-4">
              The content, features, and functionality of GoBagyo are owned by Codex Creativa and are protected by:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>Copyright laws</li>
              <li>Trademark laws</li>
              <li>Other intellectual property rights</li>
            </ul>
            <p class="text-slate-600 mt-4">
              You may not reproduce, distribute, modify, or create derivative works without explicit written permission.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">6. Privacy and Data Protection</h2>
            <p class="text-slate-600">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the app, to understand our practices regarding the collection and use of your information.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">7. Limitation of Liability</h2>
            <p class="text-slate-600 mb-4">
              To the fullest extent permitted by law, Codex Creativa shall not be liable for:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages resulting from weather-related decisions based on app information</li>
              <li>Service interruptions or technical failures</li>
              <li>Third-party content or services accessed through the app</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">8. Service Availability</h2>
            <p class="text-slate-600">
              We strive to maintain continuous service availability, but we do not guarantee that the app will be available at all times. We may suspend or terminate the service for maintenance, updates, or other operational reasons with or without notice.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">9. Modifications to Terms</h2>
            <p class="text-slate-600">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the app after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">10. Termination</h2>
            <p class="text-slate-600">
              We may terminate or suspend your access to the app immediately, without prior notice, for any reason, including breach of these Terms of Service.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">11. Governing Law</h2>
            <p class="text-slate-600">
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">12. Contact Information</h2>
            <p class="text-slate-600">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div class="mt-4 p-4 bg-slate-50 rounded-lg">
              <p class="text-slate-700">
                <strong>Email:</strong> <a href="mailto:Codexcreativa@gmail.com" class="text-orange-600 hover:underline">Codexcreativa@gmail.com</a>
              </p>
              <p class="text-slate-700 mt-2">
                <strong>Developer:</strong> Francis Mistica
              </p>
            </div>
          </section>
        </div>
      </div>

      <!-- Back Button -->
      <div class="text-center mt-8">
        <button 
          @click="$router.go(-1)"
          class="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-medium"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const lastUpdated = ref('July 2025')
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style scoped>
@reference "../assets/main.css";

.prose h2 {
  @apply border-b border-slate-200 pb-2;
}
</style>