// Service Worker for caching and offline support
const CACHE_NAME = "fredrick-akojuru-cache-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/cv",
  "/images/profile.png",
  "/fredrick-akojuru-cv.pdf",
  "/styles/print.css",
  "/site.webmanifest",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
]

// Install event - cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Fetch event - serve from cache if available, otherwise fetch and cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      // Clone the request because it's a one-time use stream
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response because it's a one-time use stream
        const responseToCache = response.clone()

        // Don't cache API requests or other dynamic content
        if (!event.request.url.includes("/api/") && !event.request.url.includes("chrome-extension://")) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
        }

        return response
      })
    }),
  )
})

// Handle offline fallbacks
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match("/offline.html")
      }),
    )
  }
})
