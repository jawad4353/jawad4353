'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d47d2d5f2f7646b15743b32381eb3737",
"index.html": "90c7bd40f70af497731e0e469ee4c460",
"/": "90c7bd40f70af497731e0e469ee4c460",
"main.dart.js": "742a83fff590ae77f97f11e05f1e12b8",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "ff2414d201c3690b4b750b5abaa90435",
"icons/favicon.ico": "df9f34d7a6825d8c386470c938c3d376",
"icons/apple-touch-icon.png": "99988963b05bbb5c23c0e541d4d31ef2",
"icons/Icon-192.png": "85cb06f40b437cc8cc62bb8f05ce7813",
"icons/Icon-maskable-192.png": "3f90683e626f3549fca0e5f69b643811",
"icons/Icon-maskable-512.png": "87c0433fbb88ecfe898929fc48129e52",
"icons/Icon-512.png": "eaf79af996df40fdfec94b0fd5b9a602",
"manifest.json": "3e737232ff8cfa16bd7bf2884d03767d",
"assets/AssetManifest.json": "2ebf668c24dc81354208ad9bb1e9ac56",
"assets/NOTICES": "dc51425bdf9992ad2cad1c6ef0b7042e",
"assets/FontManifest.json": "847acb79d81c62e0aa8d3898505df4f7",
"assets/AssetManifest.bin.json": "7fdf59b39fd2dd59e98656afdb38843c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ae1ffefbc93f52c9e3ed0113bee4b612",
"assets/fonts/MaterialIcons-Regular.otf": "778325b349aea934b5b341c1a23c14cf",
"assets/assets/images/profile_image.png": "eb544f8dc48873dee97432d1d9e50c87",
"assets/assets/images/splash_animation.json": "bcd81f8ad26a0b259d23ee8c31a8603c",
"assets/assets/images/logo.png": "223959b21642bedcd4f1bf86d3bd6309",
"assets/assets/images/dd.png": "ff2414d201c3690b4b750b5abaa90435",
"assets/assets/projects_images/graduate_plus/graduate_thumbnail.png": "51b7d2324e5cee6360adc47c738246f6",
"assets/assets/projects_images/graduate_plus/8.jpg": "91443ff6258233a19f02da4b3a6f3c35",
"assets/assets/projects_images/graduate_plus/9.jpg": "d58dba283eef761fa212c76027df9e3e",
"assets/assets/projects_images/graduate_plus/14.jpg": "d74a3a977e373e81c996e7814150eab4",
"assets/assets/projects_images/graduate_plus/12.jpg": "3937483b05099b405376fd47e01f992e",
"assets/assets/projects_images/graduate_plus/13.jpg": "93679ce4d3e049bc4a5cac4929eb45b6",
"assets/assets/projects_images/graduate_plus/11.jpg": "a9eb05def1412576df7a8ac1bbf227d4",
"assets/assets/projects_images/graduate_plus/10.jpg": "4b07a2d3cbdf22d647a7d84a5b747b9e",
"assets/assets/projects_images/graduate_plus/4.jpg": "10cbf7dcf5b363a751eec9e4be00bcea",
"assets/assets/projects_images/graduate_plus/5.jpg": "eab645270aa358101e12bcc15ab077bf",
"assets/assets/projects_images/graduate_plus/7.jpg": "8dff53f98c0d33206dbd48688724a19e",
"assets/assets/projects_images/graduate_plus/6.jpg": "f708a956723ed96a29b089e8d90800da",
"assets/assets/projects_images/graduate_plus/2.jpg": "24fefc291c3f719382e1a68cfcf9b20d",
"assets/assets/projects_images/graduate_plus/3.jpg": "d07ddf57f20c592d1ae2c628ea7d7f11",
"assets/assets/projects_images/graduate_plus/1.jpg": "c9215fdc840ef79fde9dcebd45f763ae",
"assets/assets/projects_images/big_cart/bigcart_thumbnail.png": "4873e50ae0de3c7590fdd1de3b10a152",
"assets/assets/projects_images/big_cart/4.jpg": "05ec21e2256062471d04600ed1106e5d",
"assets/assets/projects_images/big_cart/5.jpg": "c51fd38408ee106dbaff11005d6378a2",
"assets/assets/projects_images/big_cart/2.jpg": "05ec21e2256062471d04600ed1106e5d",
"assets/assets/projects_images/big_cart/3.jpg": "7bc4673ccb6498c6cb278455a5b7ceb2",
"assets/assets/projects_images/big_cart/1.jpg": "19ffd7dc95903efe6c87c95fed889f3d",
"assets/assets/projects_images/career_quest/career_quest_thumbnail.png": "b66f0b5efee704e0481d35816b10850e",
"assets/assets/projects_images/career_quest/4.jpg": "d2da6b5267d884b9ed327fa815b8dad6",
"assets/assets/projects_images/career_quest/5.jpg": "5822a3ccb2fed76999390f865d632cf7",
"assets/assets/projects_images/career_quest/7.jpg": "0e12b0cc6369fc74d71d5a7ac7eca9cb",
"assets/assets/projects_images/career_quest/6.jpg": "8c2c2e6dab6c08f3cf4fc9b73baae997",
"assets/assets/projects_images/career_quest/2.jpg": "a2cf41965d1e538e355c0adc19b68c2f",
"assets/assets/projects_images/career_quest/3.jpg": "d10e05b8bd733d7d028629ecac21812d",
"assets/assets/projects_images/career_quest/1.jpg": "a73ed629fb8aedb99bc8b63389f1b62b",
"assets/assets/projects_images/city_school/4.JPG": "e6680f61efe6140700c59bdce35cc7fb",
"assets/assets/projects_images/city_school/5.JPG": "5a44146844b880b50e8d5d5ee03d0bf4",
"assets/assets/projects_images/city_school/7.JPG": "5c68961d4a6091ab124e9ba6f32b577c",
"assets/assets/projects_images/city_school/6.JPG": "67f740ddbb6d61f00c744541940bcb05",
"assets/assets/projects_images/city_school/2.JPG": "11d0a470a294f303cf2a72c2789fcdc4",
"assets/assets/projects_images/city_school/3.JPG": "12b146cce1d549cc86e3723d304b0008",
"assets/assets/projects_images/city_school/1.jpg": "28a4fb6f1c0c34860a51940c67212010",
"assets/assets/projects_images/ur_care/urcare_3.jpg": "8c2bb6257a631ec81ab2c067e9b2d1e7",
"assets/assets/projects_images/ur_care/urcare_2.jpg": "afcd648337312b685f0821e0ef8f764c",
"assets/assets/projects_images/ur_care/urcare_1.jpg": "ab3eed8b3e7da04402844038d2639509",
"assets/assets/projects_images/ur_care/Urcare_5.jpg": "8ab0e155c1c4d833d9d5b2e2e1e164e3",
"assets/assets/projects_images/ur_care/Urcare_4.jpg": "e49b86e7f72236cfa2ee2235962f9633",
"assets/assets/projects_images/kpharma/8.jpg": "f7371025f6d1090d939572e3dbbb40c7",
"assets/assets/projects_images/kpharma/4.jpg": "716f5ed5945f831449a5caf1c2ba80a2",
"assets/assets/projects_images/kpharma/kpharma_thumbnail.png": "235890e1c759d7b1066c975ca94934fd",
"assets/assets/projects_images/kpharma/5.jpg": "6b45555f0748c31d48bc51da43e2e3e7",
"assets/assets/projects_images/kpharma/7.jpg": "75b5aae9516d864e680217c67efe2fcb",
"assets/assets/projects_images/kpharma/6.jpg": "13fc09cb8c8214376c2b28b6350f7324",
"assets/assets/projects_images/kpharma/2.jpg": "c33b66bc5fff0c7556d1f79d7a47d8ea",
"assets/assets/projects_images/kpharma/3.jpg": "1fb4d73587b4dd4c006abb0765f01b96",
"assets/assets/projects_images/kpharma/1.jpg": "dfb8571b6430706974205daf23a541fd",
"assets/assets/projects_images/attendence_app/unity_thumbnail.png": "abd420334494b2af9435cab88f42d118",
"assets/assets/projects_images/attendence_app/4.png": "1488c2f283727bcfcf67b3ec11bd9858",
"assets/assets/projects_images/attendence_app/2.png": "204ed54773be0c74958c2b0cf7761f73",
"assets/assets/projects_images/attendence_app/3.png": "5c680319a35a3027a6f091e4990b26a0",
"assets/assets/projects_images/attendence_app/1.png": "05ae74a478527dfb013922ee90195c83",
"assets/assets/projects_images/teva/Teva-7.jpg": "5e169c392ec39052e73a26a6f565d64c",
"assets/assets/projects_images/teva/Teva_0.jpg": "6384f871477ee0c5f7b1523f4f6e34a0",
"assets/assets/projects_images/teva/Teva_1.jpg": "c6de1f653b5189bbc541711c85ecad0b",
"assets/assets/projects_images/teva/Teva_3.jpg": "9b78f9a27649094d4f60cf3eef2e3b09",
"assets/assets/projects_images/teva/Teva_2.jpg": "572c027d21ac64e6e72b34502d382074",
"assets/assets/projects_images/teva/Teva_6.jpg": "b848d223f39d3c908e31ee0d4880aee5",
"assets/assets/projects_images/teva/Teva_5.jpg": "ed09edacf6b13ca3db1b4600a3e6d75e",
"assets/assets/projects_images/teva/Teva_4.jpg": "2eb56b4ecbd4b7abb0503ef92d4a9118",
"assets/assets/projects_images/event_minder/event_minder_thumbnail.png": "cd59967a2757ecf7cd514690509a4314",
"assets/assets/projects_images/event_minder/4.jpg": "3717554ed7eed7537bba9114309124db",
"assets/assets/projects_images/event_minder/5.jpg": "db719127fedcebd695f3ebc4e211b9cf",
"assets/assets/projects_images/event_minder/2.jpg": "d491d615ac61935d265e953f3cbb1fc0",
"assets/assets/projects_images/event_minder/3.jpg": "92c998ff8a039b497371a50ba1828b04",
"assets/assets/projects_images/event_minder/1.jpg": "4e81020a8c3bb98de97ecc624b7dff77",
"assets/assets/projects_images/easy_agro/easy_agro_thumbnail.png": "c827d3eab6bdce8ba628754b3e5dfa8d",
"assets/assets/projects_images/easy_agro/1.jpg": "c05e17f9b025e3681534714c1cf44c2c",
"assets/assets/icons/send_icon.svg": "9a7165d5b53101ab8dbac45e5c92aa9f",
"assets/assets/icons/github.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/icons/mail.svg": "c1a88f5cd60c9f42dafbb61bd55df562",
"assets/assets/icons/satus_icon.jpg": "c6339e260e60ecb39ec3e2d8e06cc43d",
"assets/assets/icons/download_icon.svg": "f34924c3ad9721d3dced74328f733ac0",
"assets/assets/icons/facebook.svg": "8a93cba80819aa80fa4c669241e3e77d",
"assets/assets/icons/youtube.svg": "60c0377105ffb2506dc3f77342a87be9",
"assets/assets/icons/dd.png": "0c77a5f38da3b6c2db094ae6fe837aac",
"assets/assets/icons/viion_icon.PNG": "be4c78c3e900be0b580f8e6830595b09",
"assets/assets/icons/innovation_icon.png": "bc5dba956a042e0b211a9be76d780c11",
"assets/assets/icons/linkedin.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/icons/drawer_icon.png": "c871ec277eb26afa5b17740a0af2c823",
"assets/assets/icons/right_arrow_icon.svg": "aa191e7d27c58c2bf63e509797f6add1",
"assets/assets/icons/close_icon.png": "878e66ae0529120f210e6e1f963313c5",
"assets/assets/fonts/poppins/Poppins-100.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/poppins/Poppins-300.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-700.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-500.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/poppins/Poppins-200.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-400.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-600.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/tech_stacks/revenue_cat.png": "a6d43ba195e16892970211aa7e541d79",
"assets/assets/tech_stacks/flutter.png": "5f334f807de1703371c0bffc44538ac3",
"assets/assets/tech_stacks/sql.jpg": "2a29af461721d793ee697091e8a871c9",
"assets/assets/tech_stacks/firebase.png": "8d9a29f7e81370e89f22bbb09862a2b0",
"assets/assets/tech_stacks/supabase.jpg": "206a9eaf775eb1fd3afa6dbc951ad976",
"assets/assets/tech_stacks/tuya.png": "50110afe1a50c2795858d33ba3cdbaeb",
"assets/assets/tech_stacks/flutter%2520flow.png": "f9896542e5643c317294f9dd0f67b8a9",
"assets/assets/tech_stacks/figma.png": "35b790dcbcd8459f0902123805266fe3",
"assets/assets/tech_stacks/graph.png": "d068ffba25fa45251b1b65ef0b7df0c7",
"assets/assets/tech_stacks/hive.jpg": "21f1d074deafaaf03be8f572966c834d",
"assets/assets/tech_stacks/bloc.png": "1edb7cb9fceade623ecd85c61520d941",
"assets/assets/tech_stacks/stripe.png": "de658c7cdff905a0088601911822557a",
"assets/assets/tech_stacks/getx.jpg": "6fa242c7c9734fde4bcbb22409a1f918",
"assets/assets/tech_stacks/tflite.png": "4bd1edb141a893fd1453f880f67ab1be",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
