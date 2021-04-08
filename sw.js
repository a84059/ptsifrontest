var cacheName = 'ArteRupestre.';
var filesToCache = [
  '.',
  '/',
  'https://okoktext.herokuapp.com/index.html',
  'https://okoktext.herokuapp.com/manifest.json',
  'https://okoktext.herokuapp.com/sw-register.js',
  'https://okoktext.herokuapp.com/favicon.ico',
  'https://okoktext.herokuapp.com/images/icons/icon-192x192.png',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(cacheName) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});