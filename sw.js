const version = 6;
const preCacheName = `static-${version}`;
const preCache = ['/'];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache').then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./css/style.css",
      ]);
    })
  );
});

self.addEventListener('activate', (ev) => {
  //activating
  ev.waitUntil(
    caches
    .keys()
    .then((keys) => {
      return Promise.all(
        keys
        .filter((key) => key !== preCacheName)
        .map((key) => caches.delete(key))
      );
    })
    .catch(console.warn)
  );
  //delete old caches
});

self.addEventListener('fetch', function(event) {
  event.respondWith(async function() {
    var cache = await caches.open('cache');
    var cachedResponsePromise = await cache.match(event.request);
    var networkResponsePromise = fetch(event.request);
    event.waitUntil(async function() {
      var networkResponse = await networkResponsePromise;
      await cache.put(event.request, networkResponse.clone());
    }());
    return cachedResponsePromise || networkResponsePromise;
  }());
});

self.addEventListener('message', (ev) => {
  //message received
  //do things based on message props
  let data = ev.data;
  console.log('SW received', data);
});

const sendMessage = async(msg) => {
  let allClients = await clients.matchAll({ includeUncontrolled: true });
  return Promise.all(
    allClients.map((client) => {
      let channel = new MessageChannel();
      return client.postMessage(msg);
    })
  );
};