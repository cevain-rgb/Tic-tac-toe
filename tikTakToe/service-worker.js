self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


/*
✅ 4. *Test ton PWA*
Utilise *Chrome* ou *Edge* :
- Ouvre les outils développeur (F12)
- Onglet "Application"
- Tu verras s’il est reconnu comme PWA

---

🚀 5. *Déploie sur un hébergeur*
Tu peux l’héberger :
- sur *Firebase Hosting*
- *Netlify*
- *GitHub Pages*
- *Vercel*

---

Tu veux que je t’aide à créer une structure de base ?
*/