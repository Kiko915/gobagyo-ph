<script setup>
import { onMounted } from 'vue'
import BottomNavigation from './components/BottomNavigation.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useTheme } from './composables/useTheme.js'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="app-shell">
    <Header />
    <main class="main-content">
      <RouterView />
      <Footer />
    </main>
    <BottomNavigation />
  </div>
</template>

<style>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
  transition: background 0.3s ease;
}

.dark .app-shell {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
}

.main-content {
  flex: 1 1 0%;
  padding-top: 76px; /* space for header */
  padding-bottom: 80px; /* space for nav */
}
</style>

