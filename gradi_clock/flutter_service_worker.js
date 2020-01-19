'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "0c371082e8d2432d5de886aa8424e847",
"/assets\FontManifest.json": "d7b6e7833b818adac0c3c5fd76cbf77e",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "48b428aeed99f5b405424e347d29488e",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\third_party\BebasNeue-Bold.otf": "524d720f3f670bd38785447ca9c4b395",
"/assets\third_party\BebasNeue-Light.otf": "4c8d42e69711e4e230d9081694db00ce",
"/assets\third_party\BebasNeue-Regular.otf": "a105cda50ada8b1d3c5a401a5411f8ae",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "31dc815801bad9f0a9d1199463090096",
"/main.dart.js": "d8577b7cba5de5f15686f02f7f5d8377",
"/manifest.json": "b1d777efe0e1970a2ed50dab578b873c"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
