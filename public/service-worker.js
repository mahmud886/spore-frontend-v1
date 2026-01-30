const CACHE_NAME = "spore-fall-cache-v1";
const urlsToCache = [
  "/",
  "/_next/static/chunks/pages/_app.js",
  "/_next/static/chunks/main.js",
  "/_next/static/chunks/webpack.js",
  "/assets/fonts/gotham/Gotham-Book.otf",
  "/assets/fonts/astron/astron.otf",
  "/assets/fonts/mokoto/mokoto.ttf",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
