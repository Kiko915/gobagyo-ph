<img src="https://ik.imagekit.io/ud6lsb6pl/gobagyo_icon.png" alt="GoBagyo PH Logo" width="120"/>


# GoBagyo PH

**GoBagyo PH** is a free and open-source disaster preparedness and typhoon tracking app designed especially for Filipinos. It empowers communities with real-time storm information, emergency resources, and offline-access features, perfectly suited for low-connectivity or emergency situations.

---

## 📱 Features

- 📡 **Real-Time Weather and Typhoon Updates**
  - Powered by OpenWeather or PAGASA data (when available)
  - Map-based visualization with color-coded severity


- 📚 **Downloadable Emergency Guides**
  - Offline-ready resources (PDFs, checklists, how-tos)

- 🔔 **Alert Notifications**
  - Custom alert levels, low-battery warning, or high-risk conditions

- 📶 **Offline Mode**
  - Saved weather data, guides, and maps are accessible offline

- 🌤 **Localized Forecasting**
  - Weather reports tailored by region


---

## 🧩 Technologies Used

- **Frontend**: Vue.js / TailwindCSS
- **APIs**: OpenWeather, PAGASA (manual feed or scraping)
- **Storage**: IndexedDB / Service Workers (for offline use)
- **Deployment**: Vercel

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/gobagyo.git
   
   cd gobagyo

2. Install dependencies:
   ```bash
   npm install

3. Run development server:
   ```bash
   npm run dev