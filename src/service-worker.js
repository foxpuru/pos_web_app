// // service-worker.js

// // Cache name/version
// const CACHE_NAME = "pos-web-app-v1";

// // List of files to cache
// const urlsToCache = [
//   "/",
//   "/your-page",
//   "/your-assets",
//   // Add other paths and assets you want to cache
// ];

// // Install event
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Fetch event
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Return the cached version if it exists, otherwise fetch from network
//       return response || fetch(event.request);
//     })
//   );
// });

// // Activate event
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames
//           .filter((name) => {
//             // Delete outdated caches
//             return name !== CACHE_NAME;
//           })
//           .map((name) => {
//             return caches.delete(name);
//           })
//       );
//     })
//   );
// });
