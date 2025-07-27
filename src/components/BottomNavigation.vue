<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`
  },
  {
    name: 'Weather Map',
    path: '/weather',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /></svg>`
  },
  {
    name: 'Checklist',
    path: '/checklist',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /></svg>`
  },
  {
    name: 'Typhoon Info',
    path: '/typhoon',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>`
  },
  {
    name: 'Education',
    path: '/education',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`
  },
  {
    name: 'Downloads',
    path: '/downloads',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>`
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`
  },
]

function isActive(path) {
  return route.path === path
}

function goTo(path) {
  if (route.path !== path) router.push(path)
}
</script>

<template>
  <nav class="bottom-nav-component fixed left-1/2 bottom-6 -translate-x-1/2 z-50 bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl border border-white/25 dark:border-slate-600/25 rounded-3xl px-10 py-3 max-w-[700px] w-[calc(100vw-16px)] min-w-0 flex justify-center items-center transition-all duration-300 shadow-[0_8px_32px_0_rgba(31,38,135,0.37),0_2px_16px_0_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] sm:max-w-[700px] sm:w-[calc(100vw-16px)] sm:left-1/2 sm:-translate-x-1/2 sm:bottom-6 sm:rounded-3xl sm:px-10 sm:py-3 sm:bg-white/10 sm:dark:bg-slate-800/20 sm:backdrop-blur-xl sm:border-white/25 sm:dark:border-slate-600/25 sm:shadow-[0_8px_32px_0_rgba(31,38,135,0.37),0_2px_16px_0_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] max-w-full w-full left-0 right-0 -translate-x-0 bottom-0 rounded-t-[18px] px-0 py-2 bg-white/8 dark:bg-slate-800/15 backdrop-blur-2xl border-white/20 dark:border-slate-600/20 shadow-[0_-8px_32px_0_rgba(31,38,135,0.4),0_-2px_16px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]">
    <ul class="flex justify-around items-center m-0 p-0 list-none w-full gap-2 sm:gap-2 gap-1">
      <li 
        v-for="item in navItems" 
        :key="item.path" 
        @click="goTo(item.path)" 
        :class="[
          'flex flex-col items-center cursor-pointer rounded-2xl transition-all duration-300 text-slate-700 dark:text-slate-300 relative overflow-hidden',
          'hover:bg-white/15 dark:hover:bg-slate-700/30 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]',
          isActive(item.path) 
            ? 'bg-orange-600/15 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 -translate-y-0.5 shadow-[0_4px_16px_rgba(219,97,59,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]' 
            : '',
          'sm:p-2 p-1.5'
        ]"
      >
        <span 
          v-html="item.icon" 
          :class="[
            'transition-colors duration-200',
            isActive(item.path) ? 'text-orange-600 dark:text-orange-400 stroke-orange-600 dark:stroke-orange-400 fill-orange-600/20 dark:fill-orange-400/20' : 'stroke-current',
            'sm:w-7 sm:h-7 w-6 h-6'
          ]"
        />
        <span 
          :class="[
            'mt-0.5 font-medium tracking-wide',
            isActive(item.path) ? 'text-orange-600 dark:text-orange-400' : 'text-slate-700 dark:text-slate-300',
            'sm:text-xs text-[0.65rem]'
          ]"
        >
          {{ item.name }}
        </span>
      </li>
    </ul>
  </nav>
</template>