<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-5">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center py-6">
        <h1 class="text-4xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          How we collect, use, and protect your information
        </p>
      </div>

      <!-- Content -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
        <div class="prose prose-slate max-w-none">
          <p class="text-sm text-slate-500 mb-6">
            Last updated: {{ lastUpdated }}
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">1. Information We Collect</h2>
            <p class="text-slate-600 mb-4">
              GoBagyo collects information to provide better services to our users. We collect information in the following ways:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Location Data:</strong> We collect your location information to provide accurate weather forecasts and emergency alerts for your area.</li>
              <li><strong>Usage Data:</strong> We collect information about how you use our app, including features accessed and time spent.</li>
              <li><strong>Device Information:</strong> We collect device-specific information such as your device model, operating system version, and unique device identifiers.</li>
              <li><strong>Preferences:</strong> We store your app preferences, settings, and customizations locally on your device.</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">2. How We Use Information</h2>
            <p class="text-slate-600 mb-4">
              We use the information we collect to:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide accurate weather forecasts and typhoon tracking information</li>
              <li>Send timely emergency alerts and weather warnings</li>
              <li>Improve our services and develop new features</li>
              <li>Ensure the security and proper functioning of our app</li>
              <li>Provide customer support and respond to your inquiries</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">3. Information Sharing</h2>
            <p class="text-slate-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, property, or safety, or that of our users</li>
              <li>With trusted service providers who assist us in operating our app (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">4. Data Security</h2>
            <p class="text-slate-600 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure data storage and backup procedures</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">5. Your Rights</h2>
            <p class="text-slate-600 mb-4">
              You have the right to:
            </p>
            <ul class="list-disc pl-6 text-slate-600 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of certain data collection practices</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">6. Children's Privacy</h2>
            <p class="text-slate-600">
              Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">7. Changes to This Policy</h2>
            <p class="text-slate-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">8. Contact Us</h2>
            <p class="text-slate-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div class="mt-4 p-4 bg-slate-50 rounded-lg">
              <p class="text-slate-700">
                <strong>Email:</strong> <a href="mailto:codexcreativa@gmail.com" class="text-orange-600 hover:underline">codexcreativa@gmail.com</a>
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