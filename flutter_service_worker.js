'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d47d2d5f2f7646b15743b32381eb3737",
"index.html": "03751f09c08fb97d8532fe5c517fb9be",
"/": "03751f09c08fb97d8532fe5c517fb9be",
"main.dart.js": "d95f5ad53ad0d6e7936d33e0427ac342",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "ff2414d201c3690b4b750b5abaa90435",
"icons/favicon.ico": "df9f34d7a6825d8c386470c938c3d376",
"icons/apple-touch-icon.png": "99988963b05bbb5c23c0e541d4d31ef2",
"icons/Icon-192.png": "85cb06f40b437cc8cc62bb8f05ce7813",
"icons/Icon-maskable-192.png": "3f90683e626f3549fca0e5f69b643811",
"icons/Icon-maskable-512.png": "87c0433fbb88ecfe898929fc48129e52",
"icons/Icon-512.png": "eaf79af996df40fdfec94b0fd5b9a602",
"manifest.json": "3e737232ff8cfa16bd7bf2884d03767d",
"assets/AssetManifest.json": "b9c900a56dea9d92ecbc0029d4960aad",
"assets/NOTICES": "30076e81af6445c9745c65019433f5ed",
"assets/FontManifest.json": "847acb79d81c62e0aa8d3898505df4f7",
"assets/AssetManifest.bin.json": "92a8dbd5a69b6af959ec9d61f2f0eebd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "6fa0092efad018611f8400ce89375c9b",
"assets/fonts/MaterialIcons-Regular.otf": "0bd4c7de6d7fde3224f39194ad10cf3e",
"assets/assets/images/logo.png": "223959b21642bedcd4f1bf86d3bd6309",
"assets/assets/images/dd.png": "ff2414d201c3690b4b750b5abaa90435",
"assets/assets/images/profile_image.webp": "cfa6e8e7b6a8c6de297ee6f1fb505a02",
"assets/assets/projects_images/graduate_plus/5.webp": "15bc4ccf6da201c820905605f2d3a85a",
"assets/assets/projects_images/graduate_plus/9.webp": "d42a77c612fa1a8c3546588b84afaabe",
"assets/assets/projects_images/graduate_plus/8.webp": "064ae2607ab593a420d5297edf885d01",
"assets/assets/projects_images/graduate_plus/4.webp": "9fa98475c1851fc3b79f54e8f8443e1d",
"assets/assets/projects_images/graduate_plus/14.webp": "cc1e6e9919fd9049f765af3a6fbb1c78",
"assets/assets/projects_images/graduate_plus/13.webp": "dda4cb51a3175e36c23722bfc93ab214",
"assets/assets/projects_images/graduate_plus/3.webp": "ba32ad17517c13addcabf8e97bef0c1c",
"assets/assets/projects_images/graduate_plus/graduate_thumbnail.webp": "985dfc998a57a840e231cc18e2cd9629",
"assets/assets/projects_images/graduate_plus/2.webp": "006126e6e53b6565ea5d68b4a1fc8c21",
"assets/assets/projects_images/graduate_plus/12.webp": "6259b5f0e6720b4b00fd8dabef0a46fe",
"assets/assets/projects_images/graduate_plus/1.webp": "36ebcc80a8659eabacc959ae5928c4fa",
"assets/assets/projects_images/graduate_plus/11.webp": "5d64d6d5df0373e19a2b1cf069b48ba8",
"assets/assets/projects_images/graduate_plus/10.webp": "3891b1eb9b07ea6d321e0dcc4bab5697",
"assets/assets/projects_images/graduate_plus/7.webp": "cbc919feae8bcaed81b639aca5a5b97c",
"assets/assets/projects_images/graduate_plus/6.webp": "97745408b45d9849bd49e114ba5028d0",
"assets/assets/projects_images/big_cart/5.webp": "fe074be556dc6a442561b02751e1aadb",
"assets/assets/projects_images/big_cart/4.webp": "08d42cc59f6ba8bceb9967c938d788ed",
"assets/assets/projects_images/big_cart/3.webp": "1a4a25dba4a4b9ee9a897344f8f99af3",
"assets/assets/projects_images/big_cart/2.webp": "08d42cc59f6ba8bceb9967c938d788ed",
"assets/assets/projects_images/big_cart/1.webp": "9d8f2d3db4e629eb8bd486e762435e51",
"assets/assets/projects_images/big_cart/bigcart_thumbnail.webp": "24582b6cf0b1c368f48fab8fe5f7ed63",
"assets/assets/projects_images/career_quest/5.webp": "87c6874ec9fcdd3bc7c092189ec9f296",
"assets/assets/projects_images/career_quest/4.webp": "d5fece6904c4c8a2b42972704f14c9c5",
"assets/assets/projects_images/career_quest/3.webp": "4e36c2acdf07696dc9eb3479fd547d2a",
"assets/assets/projects_images/career_quest/2.webp": "3d49f8611b71daebe7e3f30e102fca52",
"assets/assets/projects_images/career_quest/career_quest_thumbnail.webp": "dd7317aa5ef5d84ba14e157119edd7f5",
"assets/assets/projects_images/career_quest/1.webp": "34f5c83f9c9f06b70f28514b4fc5d0fe",
"assets/assets/projects_images/career_quest/7.webp": "2efdb8d07793d69448f60ae26867a860",
"assets/assets/projects_images/career_quest/6.webp": "2c8fa0d5fdef07872642d212cfae5349",
"assets/assets/projects_images/city_school/5.webp": "fe99ece6a14a7d377d16d491c36da2bf",
"assets/assets/projects_images/city_school/4.webp": "062092ac95ebc9ef9f92d458719e80a4",
"assets/assets/projects_images/city_school/3.webp": "279e5cf1414ffaab9a109335aa454356",
"assets/assets/projects_images/city_school/2.webp": "7acb1d7ae14c3cf6dc2c4349e3a311b6",
"assets/assets/projects_images/city_school/1.webp": "c24e70fbf5e72dcb7a0c68e3c43cebba",
"assets/assets/projects_images/city_school/7.webp": "c3650158f2332a6f46d28c9392998b28",
"assets/assets/projects_images/city_school/6.webp": "9e0c5ff75dbae5146b5cc7ed5b679366",
"assets/assets/projects_images/ur_care/Urcare_4.webp": "f4895c00d0d329908c661827b4e7025d",
"assets/assets/projects_images/ur_care/Urcare_5.webp": "f24791ac0c007e12afb195f788bb166c",
"assets/assets/projects_images/ur_care/urcare_2.webp": "71a4e2b9f8e1e21587d65310f297b011",
"assets/assets/projects_images/ur_care/urcare_3.webp": "60bbfec830c34a1995804042ec2dafa5",
"assets/assets/projects_images/ur_care/urcare_1.webp": "b53f78a22bfcd2741507723716726250",
"assets/assets/projects_images/kpharma/kpharma_thumbnail.webp": "ec47161691a1cb136dbc2658fba869ea",
"assets/assets/projects_images/kpharma/5.webp": "e2cddf920b8dbceea7fec0dffd603313",
"assets/assets/projects_images/kpharma/8.webp": "aa337e6575500c2dc7793bdea769816b",
"assets/assets/projects_images/kpharma/4.webp": "df2005fccf43486f83e35982930ac046",
"assets/assets/projects_images/kpharma/3.webp": "30e8064e880b9cd27c5d63a51831ae38",
"assets/assets/projects_images/kpharma/2.webp": "887f196c7de6a9cb921c41e699351049",
"assets/assets/projects_images/kpharma/1.webp": "6dfc1a439c92c54a8926e3471923f708",
"assets/assets/projects_images/kpharma/7.webp": "77aadbfd9a38947afb7c4ff41cb086e9",
"assets/assets/projects_images/kpharma/6.webp": "c55ea4e18265c87bcea7b2bb5abfa459",
"assets/assets/projects_images/attendence_app/4.webp": "836ef7f0869e18b4cd1d21359b770a39",
"assets/assets/projects_images/attendence_app/3.webp": "db05b0458cc7179a874da9026134f3a4",
"assets/assets/projects_images/attendence_app/2.webp": "fa61ec28d5f6c649d1d483dd9eaeb57c",
"assets/assets/projects_images/attendence_app/1.webp": "2953ff0bbf2f639f4c2b0c50ee8c7a8a",
"assets/assets/projects_images/attendence_app/unity_thumbnail.webp": "17686a947b857bff0b8e3d6c4bffda15",
"assets/assets/projects_images/teva/Teva_4.webp": "f963854ea05cf4bceb02837989e1ad52",
"assets/assets/projects_images/teva/Teva_5.webp": "ddb68f3291209f5d7cd4644e03bed987",
"assets/assets/projects_images/teva/Teva_2.webp": "7c7fa7f34a4da81253ff40d14c86a3ea",
"assets/assets/projects_images/teva/Teva-7.webp": "1871d3f8571553580b80e7548561f9cb",
"assets/assets/projects_images/teva/Teva_3.webp": "f7535f189606268aee90047b5a7ade00",
"assets/assets/projects_images/teva/Teva_0.webp": "57888c82c37f6a536d41d7546d0d5aba",
"assets/assets/projects_images/teva/Teva_1.webp": "c9fed69658edda5ad2b6e64093e93194",
"assets/assets/projects_images/teva/Teva_6.webp": "21353c8008ec7477cd6ce09bd77ab5f2",
"assets/assets/projects_images/event_minder/5.webp": "8e1c38eb678cb8833289962e179ec4a6",
"assets/assets/projects_images/event_minder/4.webp": "f012c9ca7121df5adc2b66889b983e72",
"assets/assets/projects_images/event_minder/event_minder_thumbnail.webp": "15025b82c4bb2172a8c7f59db36c6923",
"assets/assets/projects_images/event_minder/3.webp": "740300173e0958ed3121170eb507bf86",
"assets/assets/projects_images/event_minder/2.webp": "038245ce0b042ed074d6d5acc2c81de4",
"assets/assets/projects_images/event_minder/1.webp": "a8e3b8e2d87919a3585091f34ebb8540",
"assets/assets/projects_images/easy_agro/1.webp": "b07b6c09443adcb93a7f6f44e6bd312c",
"assets/assets/projects_images/easy_agro/easy_agro_thumbnail.webp": "0e75790525aafbc393a3b247b7cc65cf",
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
