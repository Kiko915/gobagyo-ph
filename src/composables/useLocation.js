import { ref, watch } from 'vue'
import { useGeolocation } from '@vueuse/core'

const currentLocation = ref(null)
const locationError = ref(null)
const isLoadingLocation = ref(false)
const autoDetectLocation = ref(true)

export function useLocation() {
  // Use VueUse's useGeolocation with configuration
  const { coords, locatedAt, error: geoError, resume, pause } = useGeolocation({
    enableHighAccuracy: false,
    timeout: 30000,
    maximumAge: 600000,
    immediate: false
  })

  const initLocation = () => {
    // Load auto-detect preference from localStorage
    const savedAutoDetect = localStorage.getItem('autoDetectLocation')
    if (savedAutoDetect !== null) {
      try {
        autoDetectLocation.value = JSON.parse(savedAutoDetect)
      } catch (error) {
        console.error('Error parsing auto-detect preference:', error)
      }
    }

    // Load saved location from localStorage
    const savedLocation = localStorage.getItem('currentLocation')
    if (savedLocation) {
      try {
        const parsedLocation = JSON.parse(savedLocation)
        // Validate saved location data
        if (parsedLocation && 
            (!parsedLocation.latitude || !parsedLocation.longitude || 
             parsedLocation.name === 'Infinity, Infinity' ||
             parsedLocation.latitude === Infinity || parsedLocation.longitude === Infinity ||
             isNaN(parsedLocation.latitude) || isNaN(parsedLocation.longitude))) {
          // Clear invalid location data
          localStorage.removeItem('currentLocation')
          currentLocation.value = null
        } else {
          currentLocation.value = parsedLocation
        }
      } catch (error) {
        console.error('Error parsing saved location:', error)
        localStorage.removeItem('currentLocation')
      }
    }

    // If auto-detect is enabled and no saved location, try to get current location
    if (autoDetectLocation.value && !currentLocation.value) {
      getCurrentLocation()
    }
  }

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      locationError.value = 'Geolocation is not supported by this browser.'
      return
    }

    isLoadingLocation.value = true
    locationError.value = null
    
    // Start geolocation using VueUse
    resume()
    
    // Watch for coordinate changes
    let stopWatchingCoords
    stopWatchingCoords = watch(coords, (newCoords) => {
      // Validate coordinates before processing
      const lat = newCoords.latitude
      const lng = newCoords.longitude
      
      if (lat && lng && 
          typeof lat === 'number' && typeof lng === 'number' &&
          isFinite(lat) && isFinite(lng) &&
          !isNaN(lat) && !isNaN(lng) &&
          lat >= -90 && lat <= 90 &&
          lng >= -180 && lng <= 180 &&
          lat !== 0 && lng !== 0) {
        reverseGeocode(lat, lng)
        if (stopWatchingCoords) {
          stopWatchingCoords() // Stop watching after first successful location
        }
        pause() // Pause geolocation to save battery
      }
    }, { immediate: true })
    
    // Watch for errors
    let stopWatchingError
    stopWatchingError = watch(geoError, (error) => {
      if (error) {
        isLoadingLocation.value = false
        
        // Handle different types of geolocation errors
        if (error.message.includes('denied')) {
          locationError.value = 'Location access denied by user. Please enable location access in your browser settings or use "Set Location Manually".'
        } else if (error.message.includes('unavailable')) {
          locationError.value = 'Location information is unavailable. This may be due to network location provider restrictions. Please try "Set Location Manually".'
        } else if (error.message.includes('timeout')) {
          locationError.value = 'Location request timed out. This may indicate issues with GPS signal or network connectivity. Please try "Set Location Manually".'
        } else if (error.message.includes('Network location provider')) {
          locationError.value = 'Network location provider is restricted (API limitations). Please use "Set Location Manually" to set your location.'
        } else {
          locationError.value = 'An unknown error occurred while retrieving location. Please try "Set Location Manually".'
        }
        
        if (stopWatchingError) {
          stopWatchingError() // Stop watching errors
        }
        pause() // Pause geolocation
      }
    }, { immediate: true })
  }

  const reverseGeocode = async (latitude, longitude) => {
    try {
      // Using a simple reverse geocoding approach
      // In a real app, you might want to use a proper geocoding service
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
      
      if (response.ok) {
        const data = await response.json()
        const locationName = data.city && data.countryName 
          ? `${data.city}, ${data.countryName}`
          : data.locality || data.countryName || 'Unknown Location'
        
        const locationData = {
          name: locationName,
          latitude,
          longitude,
          timestamp: Date.now()
        }
        
        currentLocation.value = locationData
        localStorage.setItem('currentLocation', JSON.stringify(locationData))
      } else {
        throw new Error('Geocoding failed')
      }
    } catch (error) {
      console.error('Reverse geocoding error:', error)
      // Fallback to coordinates if geocoding fails
      const locationData = {
        name: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
        latitude,
        longitude,
        timestamp: Date.now()
      }
      
      currentLocation.value = locationData
      localStorage.setItem('currentLocation', JSON.stringify(locationData))
    } finally {
      isLoadingLocation.value = false
    }
  }

  const toggleAutoDetect = () => {
    autoDetectLocation.value = !autoDetectLocation.value
    localStorage.setItem('autoDetectLocation', JSON.stringify(autoDetectLocation.value))
    
    if (autoDetectLocation.value) {
      getCurrentLocation()
    }
  }

  const clearLocationError = () => {
    locationError.value = null
    // Also clear VueUse geolocation error
    if (geoError.value) {
      pause() // Stop current geolocation attempt
    }
  }

  const setManualLocation = (locationName) => {
    const locationData = {
      name: locationName,
      latitude: null,
      longitude: null,
      timestamp: Date.now(),
      manual: true
    }
    
    currentLocation.value = locationData
    localStorage.setItem('currentLocation', JSON.stringify(locationData))
    
    // Clear any existing location error since manual location was set successfully
    locationError.value = null
  }

  // Watch for auto-detect changes
  watch(autoDetectLocation, (newValue) => {
    localStorage.setItem('autoDetectLocation', JSON.stringify(newValue))
  })

  return {
    currentLocation,
    locationError,
    isLoadingLocation,
    autoDetectLocation,
    initLocation,
    getCurrentLocation,
    toggleAutoDetect,
    clearLocationError,
    setManualLocation
  }
}