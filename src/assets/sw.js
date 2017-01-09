// self => SW
const CACHE_NAME = 'logros-facilito-v1';
const CACHE_URLS = [
  '/assets/indigo-pink.css',
  '/',
  '/home',
  '/about',
  'main.bundle.js'
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

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    // Quiero los nombres de todos los caches disponibles
    caches.keys().then((cachesNames) => {
      // Retorna un arreglo de promesas
      return Promise.all(
        // Por cada cache disponible ejecuta una función
        cachesNames.map((cacheName) => {
          // Si el cache no es igual a CACHE_NAME, eliminalo
          if (CACHE_NAME !== cacheName)
            return caches.delete(cacheName); // Retorna promesa de eliminar el cache
        })
      );
    })
  );
});

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
      .catch((err) => {
        if (ev.request.mode === 'navigate')
          return caches.match('/home');
      })
  );
});
