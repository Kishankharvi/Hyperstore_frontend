// frontend/public/sw.js

const CACHE_NAME = 'nexus-store-cache-v1';
const API_CACHE_NAME = 'nexus-store-api-cache-v1';
const IMAGE_CACHE_NAME = 'nexus-store-image-cache-v1';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/favicon.ico',
  '/logo192.png',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    })
  );
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
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Strategy for API calls
  if (request.url.includes('/api/')) {
    event.respondWith(
      caches.open(API_CACHE_NAME).then((cache) => {
        return fetch(request)
          .then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            return cache.match(request);
          });
      })
    );
    return;
  }

  // Strategy for images
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          return cachedResponse || fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Strategy for other requests
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return cachedResponse || fetch(request);
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
  // In a real app, you would get pending orders from IndexedDB
  // and send them to the server.
}