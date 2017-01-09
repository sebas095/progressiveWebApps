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

self.addEventListener('activate', (ev) => {});

self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    caches.match(ev.request)
      .then((res) => {
        // res es la respuesta de buscar en el cache
        console.log(ev.request.url);
        if (res) {
          console.log('Estoy en el cache y te ahorré una petición');
          // Responde desde el cache
          return res;
        } else {
          console.log('No estoy en el cache');
        }
        // Ve al servidor
        return fetch(ev.request);
      })
  );
});
