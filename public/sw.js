// frontend/public/sw.js

const CACHE_NAME = 'nexus-store-cache-v2';
const API_CACHE_NAME = 'nexus-store-api-cache-v2';
const IMAGE_CACHE_NAME = 'nexus-store-image-cache-v2';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/vite.svg',
  '/assets/index-5B6EeYiM.js',
  '/assets/index-DWTKROBS.css',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache and caching app shell');
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, API_CACHE_NAME, IMAGE_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Strategy for API calls (Cache then network)
  if (request.url.includes('/api/')) {
    event.respondWith(
      caches.open(API_CACHE_NAME).then(async (cache) => {
        try {
          const networkResponse = await fetch(request);
          if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          return await cache.match(request);
        }
      })
    );
    return;
  }

  // Strategy for images (Cache first)
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        return cachedResponse || fetch(request).then((networkResponse) => {
          if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Strategy for other requests (Cache first)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return cachedResponse || fetch(request).then(async (response) => {
        const cache = await caches.open(CACHE_NAME);
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      });
    })
  );
});

// Push notification event listener
self.addEventListener('push', (event) => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png'
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Background sync event listener
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-new-orders') {
    event.waitUntil(syncNewOrders());
  }
});

async function syncNewOrders() {
  console.log('Syncing new orders...');
  // In a real application, you would get pending orders from IndexedDB
  // and send them to the server. This is a placeholder for that logic.
}