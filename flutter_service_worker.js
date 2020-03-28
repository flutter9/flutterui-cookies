'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/cookiechoco.jpg": "81cf644492838df3981768ba36f8ce4f",
"/assets/assets/cookiecream.jpg": "7d128e61690e39c1b9f6cdf61abe3599",
"/assets/assets/cookieclassic.jpg": "d37a62ad366dc0aac0a4d27ed86cc676",
"/assets/assets/VarelaRound-Regular.ttf": "159cb67fc3bc762a8c3232f0a0c6728e",
"/assets/assets/cookievan.jpg": "1c78307abd12f745b6ee015a96aeb845",
"/assets/assets/cookiemint.jpg": "287c5b185f1f8f6b515bce6e6b315378",
"/assets/FontManifest.json": "fadfe66f246d57ade4e90f06132176f9",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "c4dd01e25c8f0eba04cc7c525045184b",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "4ddf38f004d8be93590e7b3d17aeb82b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
