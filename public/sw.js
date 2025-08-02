const CACHE_NAME = 'nexus-store-cache-v2'; // Incremented version
const API_CACHE_NAME = 'nexus-store-api-cache-v2'; // Incremented version
const ALL_PRODUCTS_URL = '/api/products?limit=100'; // URL to fetch all products

// App Shell: The essential files for your app's UI
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// 1. Installation: Pre-cache the App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache and caching app shell');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// 2. Activation: Clean up old caches and fetch all products
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, API_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Proactively fetch and cache all products
      console.log('Activating new service worker and fetching all products for offline use...');
      return caches.open(API_CACHE_NAME).then((cache) => {
        return fetch(ALL_PRODUCTS_URL).then((response) => {
          if (response.ok) {
            cache.put(ALL_PRODUCTS_URL, response);
            console.log('All products cached successfully.');
          }
        }).catch(err => {
            console.error('Failed to fetch and cache all products:', err);
        });
      });
    })
  );
  return self.clients.claim();
});

// 3. Fetch: Intercept network requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Strategy for API calls (Stale-While-Revalidate)
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      caches.open(API_CACHE_NAME).then((cache) => {
        return fetch(request)
          .then((networkResponse) => {
            // If online, update the cache with the fresh response
            cache.put(request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            // If offline, return the cached response
            return cache.match(request);
          });
      })
    );
    return;
  }

  // Strategy for all other requests (Cache First, then Network)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return cachedResponse || fetch(request).then((networkResponse) => {
        // Cache newly requested assets
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});