// self => SW
const CACHE_NAME = 'logros-facilito-v1';
const CACHE_URLS = [
  '/assets/indigo-pink.css'
];

// Es la 1ra vez que mandamos una SW
// Se actualiza la SW
self.addEventListener('install', (ev) => {
  caches.open(CACHE_NAME)
    .then((cache) => {
      console.log("Cache abierto");
      return cache.addAll(CACHE_URLS);
    });
});

self.addEventListener('activate', () => {});

self.addEventListener('fetch', () => {});
