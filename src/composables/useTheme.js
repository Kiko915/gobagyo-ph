import { ref, watch, onMounted } from 'vue';

const theme = ref('light');
const isDark = ref(false);

export function useTheme() {
  const setTheme = (newTheme) => {
    theme.value = newTheme;
    
    if (newTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDark.value = prefersDark;
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      isDark.value = newTheme === 'dark';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Listen for system theme changes when auto mode is enabled
    if (savedTheme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        if (theme.value === 'auto') {
          isDark.value = e.matches;
          document.documentElement.classList.toggle('dark', e.matches);
        }
      });
    }
  };

  return {
    theme,
    isDark,
    setTheme,
    initTheme
  };
}