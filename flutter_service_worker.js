'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "474aa23a0d92bc4239a227b28e617f2f",
"assets/AssetManifest.bin.json": "d04d4c683d1791b0e630280e07b1d325",
"assets/AssetManifest.json": "a7ad411d2aab3d53774d2677b7109f64",
"assets/assets/images/abbas.jpg": "e227067dd5f46efb3ac5bb412327aa7a",
"assets/assets/images/bg.jpg": "25242eced33370f56e94c32099ec1391",
"assets/assets/images/buuk-footer.jpg": "571f123573519ce673cf95717128b3ad",
"assets/assets/images/coco.jpg": "9d90be957123a41d8164f6793d38ccb1",
"assets/assets/images/color.jpg": "18b01a0e6f81656820c96de0bf1de14c",
"assets/assets/images/corporate.jpg": "36ec3a609cc96394434dbdff99a0031e",
"assets/assets/images/explaine.jpg": "7b0204aa0acbd78b01a57a4fab507867",
"assets/assets/images/hakeem.jfif": "aa0835a3ac53503f0451cdeb64296162",
"assets/assets/images/jaber.jpg": "dcbf624fbded3d63de2503f0f8220a95",
"assets/assets/images/joy.jfif": "08d5644aa6908a7605863e2831a5d5e8",
"assets/assets/images/logo1.png": "c6698a9b2e9de2d47cf041956e806bf2",
"assets/assets/images/logo2.png": "1eef48d4bddd5f041934a3d057906ef5",
"assets/assets/images/logo3.png": "c09ed2954bc33164c3276f79a05a1c86",
"assets/assets/images/logo4.png": "205ad48af8be0685c8b903ddc65cdb53",
"assets/assets/images/logo5.png": "f980cdcb579e40a07390cb488f25d245",
"assets/assets/images/logo6.png": "1adfa55e276d5893aba818f05af39532",
"assets/assets/images/logo7.png": "d94767b6dab9b5503c5b17f2be32827f",
"assets/assets/images/logo8.png": "cc494b365de5ff77fdbfb72c36d6939b",
"assets/assets/images/man1.png": "5784831caff6608c18d5727bf99fb375",
"assets/assets/images/man2.jpg": "32399db88090dc8b4133a9f0d59147da",
"assets/assets/images/man3.jpg": "440170229525e89ffac880808fe8ebdb",
"assets/assets/images/mehedi.jpg": "44f1dc8460deb7b54bcc5e4671c836d1",
"assets/assets/images/milon.jpg": "c1a2daa3aab7225033c9f03a55717707",
"assets/assets/images/partha.jfif": "fb11115bb8a1718835ae36c7b409b683",
"assets/assets/images/pepsi.png": "3972896b3127a5e282a77891d6225d41",
"assets/assets/images/podcast.jpg": "af1bb5253f49c23678a7f6b2261cd972",
"assets/assets/images/promo.jpg": "feec1cdee09f4bf31dc67a8914ba5f22",
"assets/assets/images/razu.jpg": "e3ed4ca1641a79f352ff6adad50b0cb3",
"assets/assets/images/reels.png": "be2cbfb950c3f4836023391e60f4bd53",
"assets/assets/images/Rev.png": "3e0e9b1a11b49f37c0901027fe96be8a",
"assets/assets/images/reviewer1.jpg": "d760e04fd29792202de6bd39bc3e83a1",
"assets/assets/images/reviewer2.jpg": "5af2b52b6e64bb070382633d03de81f8",
"assets/assets/images/reviewer3.jpg": "fdeaa689faac5e51524b3d8c31f249c1",
"assets/assets/images/reviewer4.jfif": "bafccf1330d830ed866e1d7001d092dc",
"assets/assets/images/Screenshot_1.png": "35a2dd918e4312fdc6c9aaf654c4fc89",
"assets/assets/images/Screenshot_2.png": "4993c91059d62a81004f849a7ead3a61",
"assets/assets/images/Screenshot_3.png": "3b8ffa5a7492e8ebc1ee52a0583cc990",
"assets/assets/images/solaiman.jpg": "7c2405de0f158c7833ad1f4723339b7d",
"assets/assets/images/song.avif": "2f05be3dd4b2d4829562f53d19396579",
"assets/assets/images/song.jpg": "66d09aadd593098d0eb878a0cd80e96a",
"assets/assets/images/tariqul.jpg": "a8bbcc379cf7efb427a0ca031b646571",
"assets/assets/images/thum1.jpg": "5925c3a71d1679546b6a8e17630df130",
"assets/assets/images/untitled_-_2023-08-31t162126-sixteen_nine.webp": "8512de77739a28cc2f1814340c8a77e2",
"assets/assets/images/video_thumbnail1.jpg": "959e83be9c9deb0c9f7af3748c9dc44d",
"assets/assets/images/video_thumbnail2.jpg": "467aef4369dcb22419fd941afc5edf5a",
"assets/assets/images/video_thumbnail3.jpg": "2edd0918b9d7b99e4114bb061b48240e",
"assets/assets/images/website-footer-design-philipps-universitaet-marburg.png": "d3786fcf3325d567ca4dec59c75c5650",
"assets/assets/images/wedding.jfif": "eb813fe927d1735b92b8b317e6c5fdd0",
"assets/assets/images/women.jpg": "1830f21d1d3c7d508c690ce9457ab8c3",
"assets/assets/videos/v1.mp4": "2bcc6fd47753c8f40e59bb7a3a2959a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "28e842766c385a9174a190caf83488f8",
"assets/NOTICES": "747bd338016ed48324c6c315322a2ffa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "3082c93afd6d1c22c03156bb9973feed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "963be804e396f6f6beef996ce990561e",
"/": "963be804e396f6f6beef996ce990561e",
"main.dart.js": "a917812916b4aee77d006856bb326d8e",
"manifest.json": "8eb6f7e68cf69c2485c002741492a902",
"version.json": "8640509473adaa4542736b2944d0abdd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
