
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('parallel-stock-v6.6.2').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.webmanifest',
      './icons/icon-192.png',
      './icons/icon-512.png'
    ]))
  );
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  const req = event.request;
  // Navigation requests -> network first, fallback to cache (offline)
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  // Static assets -> cache first
  event.respondWith(
    caches.match(req).then(res => res || fetch(req))
  );
});
