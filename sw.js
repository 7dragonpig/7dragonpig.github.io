/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cddf3d04deb34d22af8562367f64821a"],["/about/index.html","d8a714da58e0cb097c1142e5c26f1ad3"],["/archives/2024/04/index.html","5c4693ebf7119f3b4d3b6ed251cd3f0e"],["/archives/2024/05/index.html","6fe11ceb25cd2a6f2fae6ba2a7c1fb0a"],["/archives/2024/06/index.html","62ca80e452225366da4647fc02788b21"],["/archives/2024/06/page/2/index.html","7d2379041b04cd9b8e17f97f521a11d3"],["/archives/2024/07/index.html","79c23a02c94edf9d5e8401d948c04479"],["/archives/2024/09/index.html","2a2020b61940c4133c72b523f210b7eb"],["/archives/2024/10/index.html","8e0d5a55a352ffb6df0679ad733fb9e0"],["/archives/2024/index.html","229267c92ff4469e6b0f499a1755ca11"],["/archives/2024/page/2/index.html","ca820791c96f8f672412230b0cda96e6"],["/archives/2024/page/3/index.html","936be11c54729a3b2078fa11f2ae8fe1"],["/archives/index.html","4f50e5e789174deb4dda485dd17e40f1"],["/archives/page/2/index.html","083b3faed338b24a234f1dafb455a067"],["/archives/page/3/index.html","7124facded544d83ccd5f3b5ab023a63"],["/categories/blog优化/index.html","a5717c34579636fcb4d1b9d68cfeb013"],["/categories/index.html","2bbb6354e7f8340092b1cfc5e0edf410"],["/categories/代码随想录/index.html","8ac780bdc1dcde161e8f2c125391c01f"],["/categories/代码随想录/page/2/index.html","ef3b07c9cf06cde6c3f3035ee1b7f2cb"],["/categories/代码随想录/page/3/index.html","81c8660a687902eaa8cc2f42ece79183"],["/categories/论文阅读/index.html","01e08ce5b8fb6ac1e0e90929dce7a71c"],["/categories/踩坑日记/index.html","5f91844b5299ae3a41483b20ebba4467"],["/css/gitalk.css","8a8e267ad6847a7f490d9358e398a6a1"],["/css/highlight-dark.css","0216a981a0a5b1c4b7545d9a0f835e23"],["/css/highlight.css","f9b92ffa06e978c04e8a93967a29311d"],["/css/main.css","8a64e62789f29c3e96b6d58731c8f6a7"],["/img/1.jpg","a22d0cc988c223f366e4ecaadf935e95"],["/img/10.jpg","9702f5802561929b1c01b8d9f1f9e576"],["/img/13.jpg","00a12de1d0c78bea5ab11ce0ffbb8c37"],["/img/19.jpg","e14bff5ed35c7005780f3b62560e50d6"],["/img/2.jpg","a06b8d6578d07e8903f0610921a2995e"],["/img/3.jpg","fcacc551d890270d52e99863cd306421"],["/img/4.jpg","121490d085d32a69d500ca0eea77d362"],["/img/404.png","34358b0fdc96ab126b3c4757f28f769f"],["/img/5.jpg","3877793ebc44fee4d52d385ad2b16d15"],["/img/6.jpg","d01fb7e0dcb098cd3b143a1ec1af6a4f"],["/img/7.jpg","2ec2cecfb888e23c5c99ecf13082b688"],["/img/8.jpg","6022155cd765e1cd75e13b7547a083c0"],["/img/9.jpg","a3097ae18aabf5dfa53e96350a623be0"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/avatar1.jpg","da3012aaa18ab007226febe27af7d7dc"],["/img/custom.jpg","57c31713e0381369dae9e5c7b129ac1d"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/default1.jpg","16f86b21e191bad642048d0f2b72a1c3"],["/img/dragonball.png","216b54dc489810d62df157d4e23fc82e"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/loading1.gif","8d3480e1e17b3c91a7c8fb0376a3f770"],["/img/loading2.gif","f49bde1e47b40c7c44a541d2bf03133b"],["/img/loading21.gif","a738d63ec9f09ca087d5b7b3fb6dce8a"],["/img/loading4.gif","d31b97f01733c482002d81d2822870a8"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/qq.jpg","26b0c052cd7b65cddec46d6c87e1f94c"],["/img/vx.jpg","b4f0eda5bb32235e69280fdce9009746"],["/index.html","7aaedb1be1c712b4f62f27a69b4e9fd2"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","5e4105d10638e64b40820fa28567d0d5"],["/js/events.js","734c9d1a9b78947e2e2e2d8b88c5920b"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","dc6fff7ccf057e6506da7da6c84bfda6"],["/page/2/index.html","aa94d6610e05c229aeb41cda42dabf9a"],["/page/3/index.html","4583eae20c55d11ac0d6d4da8da0bede"],["/posts/1375ccb7/index.html","a5e82cd3603c99506a54f3bb4b1193a3"],["/posts/1d2f2a48/index.html","1f196af574cfc096366b4253f06f6bb5"],["/posts/217faa3e/index.html","7e4a80132d8be578bc7cd83d30180bd7"],["/posts/3b45786b/index.html","25cbd0bb8e6fdb69f0c1ea9558928619"],["/posts/3c14015d/index.html","fdcf8530699f3926e235dfac9d00119d"],["/posts/3fd1838/index.html","ec9209e22cd829f5091d6551184b256b"],["/posts/5ca50815/index.html","c0a6f32197d1479f902194d43648b82c"],["/posts/63f85b30/index.html","160bf6b91bf8994d5c7bac95a195b364"],["/posts/68ff86f1/index.html","f508bd11807017fb951d4e9f997ec139"],["/posts/74b7ded6/index.html","147fbf76465a56f96a39d8021bf621c4"],["/posts/79b73c3c/index.html","90af436f963399faf8ac7b5931a854d8"],["/posts/811c9e47/index.html","c88f56fd76fd55c36ef4b961c7a9a7d2"],["/posts/82382909/index.html","e851170202283d235ba643658d4067e5"],["/posts/8c77fd47/index.html","9c03e4b1b11f664e0f0121440c761a02"],["/posts/9217952a/index.html","9546710ff0e20d96bc9315f858eff33f"],["/posts/9381121/index.html","f4437c3c27f3c68ec5df71e650bdd83d"],["/posts/9b5fc9b3/index.html","dcdb2bcb5c65d286c3a42b271918a9da"],["/posts/ab48daca/index.html","1228857cb2fa943b0702e07a328df68d"],["/posts/b33cc8d7/index.html","8c7759a72c617272006349fb947a31a3"],["/posts/b8a63f7e/index.html","c2f93d0225e0e4a6a326a86be400a271"],["/posts/bb25f712/index.html","6222ee5e521f65a188ae4f60ce9700b5"],["/posts/c09e23a4/index.html","eb0cde42fab5362854d4b260b2f001f1"],["/posts/c488b762/index.html","f634e3b9f7282436aa8ba23ae10bd08f"],["/posts/cb591cbf/index.html","7f0787dcc336ed8483e9c1e17f50cd28"],["/posts/cd5ebc21/index.html","5816caf81afb85e72703112568798374"],["/posts/cf26f792/index.html","904580e28f164c3ff5e59b6e20bc3b81"],["/posts/d223d3e7/index.html","d42bb5444c57648f7036813de4a3beb2"],["/posts/d6a09b45/index.html","1ba7bfa95fef00491a3df29f2e3834ca"],["/posts/ee8cc168/index.html","5932119916bf32390941e6a62b8520fe"],["/posts/f9b0c129/index.html","6c9bd3e756fd7fde5c603fc62091a82e"],["/sw-register.js","7ecc79b47cbaca6371e5872cdae4e932"],["/tags/Hexo/index.html","1489cfcda31d7045554cd05e21ee0b3f"],["/tags/LEECODE/index.html","417f3d33ec518c306bac4e68172144f8"],["/tags/LEECODE/page/2/index.html","6def22a3bcd147dd56bf0638fea1a10b"],["/tags/LEECODE/page/3/index.html","6005e18118e5f686d4097a4202224bab"],["/tags/index.html","780fdc9c768b5b13e5ce5f572983e2dc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
