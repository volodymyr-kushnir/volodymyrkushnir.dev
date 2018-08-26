/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/apple-touch-icon.png",
    "revision": "9910024255790206c64ba1fd3cf272eb"
  },
  {
    "url": "assets/images/avatar.svg",
    "revision": "435264b2a9656d605e7610233e52ac05"
  },
  {
    "url": "assets/images/favicon-192x192.png",
    "revision": "ae84d25672ad88f425a9d051785c84a9"
  },
  {
    "url": "assets/images/favicon-512x512.png",
    "revision": "7f534b3669ea20857355ab67a5921760"
  },
  {
    "url": "assets/images/favicon.ico",
    "revision": "6394d09c96accf01539abe823e4d2a2c"
  },
  {
    "url": "assets/images/og-image.en_US.png",
    "revision": "c3edaec872166df83e564ef78c0b36e6"
  },
  {
    "url": "assets/images/og-image.ru_RU.png",
    "revision": "b613cad5c522ea521712d46d4d60f663"
  },
  {
    "url": "assets/images/og-image.uk_UA.png",
    "revision": "c3e4db5884523d386732e1fbc51b5402"
  },
  {
    "url": "assets/images/volodymyr.kushnir-2017-square.jpg",
    "revision": "f1d43fb4e8d7436d909b6fd61d2bcd85"
  },
  {
    "url": "assets/images/volodymyr.kushnir-2017-square.png",
    "revision": "6af613f4c199b523be00b6cb433fd5d4"
  },
  {
    "url": "assets/images/volodymyr.kushnir-2017.jpg",
    "revision": "7cb744ce232603c293c5cc75279697e7"
  },
  {
    "url": "assets/photos/323856_148624698589084_1191150964_o.jpg",
    "revision": "1402145ef793fbcf657eaf5c7f944bca"
  },
  {
    "url": "assets/photos/323868_148639808587573_1648505013_o.jpg",
    "revision": "7e39462d69434d6dae37bf5f97a218b7"
  },
  {
    "url": "assets/photos/324164_148624265255794_446501669_o.jpg",
    "revision": "5c01966483c269fc811f1f0a22fa769c"
  },
  {
    "url": "assets/photos/327086_148624111922476_1330178874_o.jpg",
    "revision": "81a021100b6691e9ee3ac8cef936e5e3"
  },
  {
    "url": "assets/photos/329642_148624421922445_2060074436_o.jpg",
    "revision": "eb1c87f9f28e95c4680cd1ce2f67771b"
  },
  {
    "url": "assets/photos/331152_148624551922432_1869335234_o.jpg",
    "revision": "14432a4b1aacff2c17783d38ea8e1983"
  },
  {
    "url": "assets/photos/412746_158114720973415_949035392_o.jpg",
    "revision": "0e1d3a2e703af34e6631c1673c455630"
  },
  {
    "url": "assets/photos/461737_173999722718248_1691527332_o.jpg",
    "revision": "b5e74f5afe8c890a76c22d97cdd29f43"
  },
  {
    "url": "assets/photos/466052_170309293087291_793458215_o.jpg",
    "revision": "516294d7a72c5e6c18f30b36ae905647"
  },
  {
    "url": "assets/photos/467536_170309526420601_636909857_o.jpg",
    "revision": "aafebe16402efe94b302ef6e94ffdc12"
  },
  {
    "url": "assets/photos/470468_170309399753947_1333978849_o.jpg",
    "revision": "548ae4f57e6d1cd995510b1af744a7b4"
  },
  {
    "url": "assets/photos/471025_173999919384895_1249822733_o.jpg",
    "revision": "29bc44adc14df9146de8d7d920ee716c"
  },
  {
    "url": "assets/photos/473110_173999982718222_1427466111_o.jpg",
    "revision": "3f20a60a31ba8b4fbb30bc9130b15f31"
  },
  {
    "url": "assets/photos/476877_173999862718234_1686531489_o.jpg",
    "revision": "0224d9f15174bed22e28476121b76b89"
  },
  {
    "url": "assets/sounds/meh.mp3",
    "revision": "cab8cb281bed323604cd6544eeb4c470"
  },
  {
    "url": "assets/stylesheets/base.css",
    "revision": "798ea6b005642b8460b18141b9fe1a6f"
  },
  {
    "url": "favicon.ico",
    "revision": "6394d09c96accf01539abe823e4d2a2c"
  },
  {
    "url": "index.html",
    "revision": "ff5dfc4b604359845c5548fa8e8e3e15"
  },
  {
    "url": "ru-ru/index.html",
    "revision": "d13d06f9eeee93985777b4c0d0e7488c"
  },
  {
    "url": "uk-ua/index.html",
    "revision": "e6e1d657da96eadefb42e28f7ea176b7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
