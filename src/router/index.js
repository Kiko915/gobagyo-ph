import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeatherView from '../views/WeatherView.vue'
import ChecklistView from '../views/ChecklistView.vue'
import TyphoonView from '../views/TyphoonView.vue'
import EducationView from '../views/EducationView.vue'
import DownloadsView from '../views/DownloadsView.vue'
import SettingsView from '../views/SettingsView.vue'
import HelpView from '../views/HelpView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView,
  },
  {
    path: '/checklist',
    name: 'checklist',
    component: ChecklistView,
  },
  {
    path: '/typhoon',
    name: 'typhoon',
    component: TyphoonView,
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView,
  },
  {
    path: '/downloads',
    name: 'downloads',
    component: DownloadsView,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
