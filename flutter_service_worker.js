'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "33d4042210a4d0705521e3aca3de6789",
"version.json": "d47d2d5f2f7646b15743b32381eb3737",
"index.html": "c9bf2e2ecdaf2aa7ae48b2f7358b196f",
"/": "c9bf2e2ecdaf2aa7ae48b2f7358b196f",
"main.dart.js": "f223d60a43ccca3880b0249ca4fef0fc",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "ae9691e6c71a598b50baa738cbbf0c20",
"icons/favicon.ico": "df9f34d7a6825d8c386470c938c3d376",
"icons/apple-touch-icon.png": "99988963b05bbb5c23c0e541d4d31ef2",
"icons/Icon-192.png": "85cb06f40b437cc8cc62bb8f05ce7813",
"icons/Icon-maskable-192.png": "3f90683e626f3549fca0e5f69b643811",
"icons/Icon-maskable-512.png": "87c0433fbb88ecfe898929fc48129e52",
"icons/Icon-512.png": "eaf79af996df40fdfec94b0fd5b9a602",
"manifest.json": "3e737232ff8cfa16bd7bf2884d03767d",
"assets/AssetManifest.json": "c2175b020ddddbdb45dc54a296445cdc",
"assets/NOTICES": "a29444310ab0d224137038f71b46dab0",
"assets/FontManifest.json": "847acb79d81c62e0aa8d3898505df4f7",
"assets/AssetManifest.bin.json": "bc96f813842ba7096525827f11e36334",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "52b7a0ccce6ab3cbc55e81b8d49bf4d3",
"assets/fonts/MaterialIcons-Regular.otf": "6c92166e689d73beb641553e8f0c9cd7",
"assets/assets/images/bed698bf-1f42-46b0-aa65-d545b82204d7_removalai_preview.webp": "7339c24fd71c81fbe4495f6396a1f74b",
"assets/assets/images/loading.json": "93cc8a057a539413f28b64337958aff1",
"assets/assets/images/logo.png": "ae9691e6c71a598b50baa738cbbf0c20",
"assets/assets/images/profile_image.webp": "a37ec07fb703b9057a365e50bd50be11",
"assets/assets/projects_images/glow_hub/5.webp": "02c693516f433407450f399f098dd844",
"assets/assets/projects_images/glow_hub/4.webp": "a81f0412971da72a46b83ce1626cf28c",
"assets/assets/projects_images/glow_hub/3.webp": "02c693516f433407450f399f098dd844",
"assets/assets/projects_images/glow_hub/2.webp": "0b44835d18e91fb0aefe32de2bf54e6d",
"assets/assets/projects_images/glow_hub/1.webp": "d249f0ec12adebbc06151127a7e93f26",
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
"assets/assets/projects_images/humming_bird/4.webp": "bd1e846d0b0757943c5af4eae94b5680",
"assets/assets/projects_images/humming_bird/3.webp": "948eae422aec52806600bacbdbba678c",
"assets/assets/projects_images/humming_bird/2.webp": "b89edaa0e9d5b2efd05f9d01f3881655",
"assets/assets/projects_images/humming_bird/1.webp": "a4ca66874a51f04a59306d366efb5126",
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
"assets/assets/projects_images/correct_refund/4.webp": "bd93631419fb9f349ad0718c901000db",
"assets/assets/projects_images/correct_refund/3.webp": "4d9fe14fb2e305930842d84e241bbbd2",
"assets/assets/projects_images/correct_refund/2.webp": "a6078d9b5f7e5cdf3b70e0a863473a8c",
"assets/assets/projects_images/correct_refund/1.webp": "1ad0b83a21ad8791f4f0d156751ae18f",
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
"assets/assets/icons/gcu_logo.webp": "cc2bd08c29938e9e91be20820d834b89",
"assets/assets/icons/send_icon.svg": "9a7165d5b53101ab8dbac45e5c92aa9f",
"assets/assets/icons/facebook_icon.webp": "1c59675d740dee6a6df9b306c232b3f9",
"assets/assets/icons/github.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/icons/university.webp": "bc5d61dae6ae677ad3367caab3ca9883",
"assets/assets/icons/school.webp": "b13412d11a9da88f06f933411ed6ba6b",
"assets/assets/icons/youtube_icon.webp": "836b4e1679758ab33b4145e345c9c668",
"assets/assets/icons/about_name.webp": "ee6f61c1521b0ee4cd1ff6d75087306d",
"assets/assets/icons/mail.svg": "c1a88f5cd60c9f42dafbb61bd55df562",
"assets/assets/icons/about_phone.webp": "03ab9c8bb912075da0aac353bc238053",
"assets/assets/icons/gmail_icon.webp": "86846b029f99beef9c41999fc47e7b82",
"assets/assets/icons/satus_icon.jpg": "c6339e260e60ecb39ec3e2d8e06cc43d",
"assets/assets/icons/download_icon.svg": "f34924c3ad9721d3dced74328f733ac0",
"assets/assets/icons/about_email.webp": "8915cb07917cec59048091248ab13c97",
"assets/assets/icons/about_address.webp": "4d90a9643ce4ba95a4caf96ddb3daa74",
"assets/assets/icons/upwork_icon.webp": "9e74859a9e33b0469d6073de9b152e47",
"assets/assets/icons/college.webp": "3ef19fd4872be8a7fb73a15a0cba4b16",
"assets/assets/icons/facebook.svg": "8a93cba80819aa80fa4c669241e3e77d",
"assets/assets/icons/fbise_logo.webp": "790838c3e2229323380e00313e9fb9e1",
"assets/assets/icons/linkedin_icon.webp": "741f37a4f3d0b652cdbf42c8979c168e",
"assets/assets/icons/youtube.svg": "60c0377105ffb2506dc3f77342a87be9",
"assets/assets/icons/dd.png": "0c77a5f38da3b6c2db094ae6fe837aac",
"assets/assets/icons/viion_icon.PNG": "be4c78c3e900be0b580f8e6830595b09",
"assets/assets/icons/innovation_icon.png": "bc5dba956a042e0b211a9be76d780c11",
"assets/assets/icons/linkedin.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/icons/drawer_icon.png": "c871ec277eb26afa5b17740a0af2c823",
"assets/assets/icons/right_arrow_icon.svg": "aa191e7d27c58c2bf63e509797f6add1",
"assets/assets/icons/github_icon.webp": "de2140291c96de6b5459bbdc84d2feb6",
"assets/assets/icons/close_icon.png": "878e66ae0529120f210e6e1f963313c5",
"assets/assets/icons/upwork_icon_mark.svg": "b83756ba54a0f69f7c044089ce25bc72",
"assets/assets/icons/pgc_logo.webp": "7abc7345b8d6b3a469ee40cc76de619f",
"assets/assets/icons/upwork.svg": "37e52d0f7f6978fc4019b382c0976861",
"assets/assets/fonts/poppins/Poppins-100.ttf": "591d60b5878e7b8b62f7ea553dbdf8c2",
"assets/assets/fonts/poppins/Poppins-300.ttf": "591d60b5878e7b8b62f7ea553dbdf8c2",
"assets/assets/fonts/poppins/Poppins-700.ttf": "591d60b5878e7b8b62f7ea553dbdf8c2",
"assets/assets/fonts/poppins/Poppins-500.ttf": "591d60b5878e7b8b62f7ea553dbdf8c2",
"assets/assets/fonts/poppins/Poppins-200.ttf": "591d60b5878e7b8b62f7ea553dbdf8c2",
"assets/assets/fonts/poppins/Poppins-400.ttf": "591d60b5878e7b8b62f7ea553dbdf8c2",
"assets/assets/fonts/poppins/Poppins-600.ttf": "591d60b5878e7b8b62f7ea553dbdf8c2",
"assets/assets/tech_stacks/typescript.webp": "71083fcc173091bbda0b98bc56c0b1e4",
"assets/assets/tech_stacks/revenue_cat.png": "a6d43ba195e16892970211aa7e541d79",
"assets/assets/tech_stacks/expo.webp": "3ac85570a3d6321bfe16fef27e75e1f7",
"assets/assets/tech_stacks/provider.webp": "f1bb65859e0889ba4f4fc9dd7b1d326e",
"assets/assets/tech_stacks/flutter.png": "5f334f807de1703371c0bffc44538ac3",
"assets/assets/tech_stacks/matter-sdk.webp": "893c24abf3528d5797740cca48cd3a84",
"assets/assets/tech_stacks/aws.webp": "d67dc5618808790299bde7dc9cd22513",
"assets/assets/tech_stacks/sql.jpg": "2a29af461721d793ee697091e8a871c9",
"assets/assets/tech_stacks/firebase.png": "8d9a29f7e81370e89f22bbb09862a2b0",
"assets/assets/tech_stacks/supabase.jpg": "206a9eaf775eb1fd3afa6dbc951ad976",
"assets/assets/tech_stacks/tuya.png": "50110afe1a50c2795858d33ba3cdbaeb",
"assets/assets/tech_stacks/esp32.webp": "afcbf1e7e0a49b48a047675719faebca",
"assets/assets/tech_stacks/flutter%2520flow.png": "f9896542e5643c317294f9dd0f67b8a9",
"assets/assets/tech_stacks/figma.png": "35b790dcbcd8459f0902123805266fe3",
"assets/assets/tech_stacks/react-native.webp": "29b46380b4f84075a453732bfae23d97",
"assets/assets/tech_stacks/graph.png": "d068ffba25fa45251b1b65ef0b7df0c7",
"assets/assets/tech_stacks/hive.jpg": "21f1d074deafaaf03be8f572966c834d",
"assets/assets/tech_stacks/bloc.png": "1edb7cb9fceade623ecd85c61520d941",
"assets/assets/tech_stacks/wled-firmware.webp": "d3fbb25c4e63a66bdbfd8935ce97222d",
"assets/assets/tech_stacks/stripe.png": "de658c7cdff905a0088601911822557a",
"assets/assets/tech_stacks/getx.jpg": "6fa242c7c9734fde4bcbb22409a1f918",
"assets/assets/tech_stacks/tflite.png": "4bd1edb141a893fd1453f880f67ab1be",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
