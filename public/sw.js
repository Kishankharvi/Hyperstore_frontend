const CACHE_NAME = 'nexus-store-cache-v2';
const API_CACHE_NAME = 'nexus-store-api-cache-v2';
const ALL_PRODUCTS_URL = '/api/products?limit=100';

const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache and caching app shell');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, API_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Activating new service worker and fetching all products for offline use...');
      return caches.open(API_CACHE_NAME).then((cache) => {
        return fetch(ALL_PRODUCTS_URL).then((response) => {
          if (response.ok) {
            cache.put(ALL_PRODUCTS_URL, response.clone());
            console.log('All products cached successfully.');
          }
        });
      });
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Strategy for API calls
  if (url.pathname.startsWith('/api/')) {
    // **FIX**: Only cache GET requests. Ignore POST, PUT, DELETE, etc.
    if (request.method !== 'GET') {
      return; 
    }

    event.respondWith(
      caches.open(API_CACHE_NAME).then((cache) => {
        return fetch(request)
          .then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => cache.match(request));
      })
    );
    return;
  }

  // Strategy for all other requests
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return cachedResponse || fetch(request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});