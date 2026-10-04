// Offline cache for the app shell. Cross-origin calls (translation, Bhashini) are never cached here.
const V='arthodaya-v1',FILES=['./','index.html','manifest.webmanifest','icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
e.respondWith(caches.match(e.request).then(hit=>{const net=fetch(e.request).then(r=>{const cp=r.clone();caches.open(V).then(c=>c.put(e.request,cp));return r}).catch(()=>hit);return hit||net}))});
