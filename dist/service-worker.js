/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["basic.html","582111a48a6aa92cad959fce64cab8b2"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/icon.png","156d66a07d92702220123bb22ea3857b"],["images/icon/aboutus_arrow_right.png","3c5f03e1893c3506f13eeefbc0a3d379"],["images/icon/arrow_left_hover.png","7177fda35c4c4715986ee9673446f387"],["images/icon/arrow_left_nomal.png","efed1a835decbb7d32bed35715c75a91"],["images/icon/arrow_right_hover.png","0aaa54e8e82f18df9369df7a139fe4fe"],["images/icon/arrow_right_nomal.png","cb33eb577db0ac3a6d26ea8cfde3b041"],["images/icon/contact_diagonal.png","f4f9e6400e6683c7070b0ac4392b4d1c"],["images/icon/contact_grain.png","341eeafefe5bac0dcb0bde6956cd2c02"],["images/icon/contact_map.png","7e55cf707fc8a5a2f31c99f6778eae6a"],["images/icon/contact_product.png","f0c17ca776c6601b52072b3251290e04"],["images/icon/heading_grain.png","8afd2ec554c9040afe1f545c49672a0f"],["images/icon/hot_arrow_hover.png","de2e41649bac1eb4d50fa5d6501ccc3f"],["images/icon/hot_arrow_nomal.png","645d3cf8c5b6f4843076f3d8cb83ba0d"],["images/icon/hot_bg.png","cafbfa14db9e6c163531892db2f3f9ea"],["images/icon/hot_grain.png","55ec1fdd74b455b282c2b40a945d7f2b"],["images/icon/icon-left-hover.png","a7b40545cd29f2da85816c570917e3b3"],["images/icon/icon-left-normal.png","46a42dd1e7e5cc28623d6d66e8b9aa9c"],["images/icon/icon-nav-menu.png","24fc68e7f5538eb5b26f68f969e8554c"],["images/icon/icon-right-hover.png","ece7a2a0bc3b8e34b02339a9a731af85"],["images/icon/icon-right-normal.png","68b46db2573ba1431237241b1df5f419"],["images/icon/icon_address.png","5054cec1784492fdfc7cc8894abe6ea2"],["images/icon/icon_data.png","0319df516265a348bea0e119b7f5bff4"],["images/icon/icon_down.png","70d44a2664796355d6a95053bc70e540"],["images/icon/photo_icon01.png","cb5cda3cbcdcc5a449159aec9304b791"],["images/icon/photo_icon02.png","098e367e9e2c431e6e0b2f25f18b2872"],["images/icon/photo_icon03.png","1863d40f571a5d8ba22d55791dd0eb5c"],["images/icon/photo_line.png","7262564b8d44bf428f19f6938fd9ae9e"],["images/index/anli1.jpg","12d8a7fbff199e791daab1aa36602cbd"],["images/index/anli2.jpg","597ae44e87c89e35c54b4decbb61c448"],["images/index/anli3.jpg","8c18dff051c6af4d34a2468f4589d541"],["images/index/head-background-1.png","c61504223c7e4295762845873c1d6593"],["images/index/head-icon-play.png","10e47e012cef70ebc51391039eb005ad"],["images/index/head-logo.jpg","9768ace8aa7bcaeb0454b688da4630c7"],["images/index/head-pic-logo.png","0037ec8ec597d9faf881cb48b49df117"],["images/index/nav-logo.png","75ae1d91b10a1560a42750346015c4f1"],["images/index/pic-3min.png","ae8cb559e33d95826363ab16c8e508b1"],["images/index/pic-brands.png","c362850ad172b75cd92add347e548dfd"],["images/index/pic-changjing.png","47126368ee275455b3dbb0ef4539ac19"],["images/index/pic-dimond.png","85bc4e6d7aa858737b06c8ac6896ebf7"],["images/index/pic-liucheng1.png","cf5a607c19d2ebdb6f093d1e391c2872"],["images/index/pic-liucheng2.png","85e405c29db0375fadb0fd8b4944e3e0"],["images/index/pic-liucheng3.png","841ef8b30ba3cfd08989017eb6f9c43b"],["images/index/pic-liucheng4.png","3fe4914f4b88f374e0a3193015d34148"],["images/index/pic-service.png","7a661e7a2b46c21912d10048ef94be98"],["images/index/pic-yinhao.png","fcbe0f075ef7ce79619a9690d6f6a765"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","7e81d2dfba4b8c6b159477f0f077422c"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/main.min.js","7a7826473e323090ab3040c8ee814d9c"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/common/btn.css","291222a77a73f9add29aa100e3875d35"],["styles/common/header.css","51308d5972532da413734b6852d3848f"],["styles/common/reset.css","1ebcb3e4d0d949928730d1cb27cf6ae9"],["styles/main.css","047bfcaf85df41df562346a5b225880f"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




