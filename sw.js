const CACHE_NAME = 'meu-orcamento-v2'; // Mudei a versão para forçar a atualização
const urlsToCache = ['/', 'index.html'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
