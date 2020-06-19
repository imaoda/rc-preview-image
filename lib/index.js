"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _photoswipe = _interopRequireDefault(require("./photoswipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDom() {
  var dom = document.querySelector('#rc-preview-image');

  if (!dom) {
    dom = document.createElement('div');
    dom.id = 'rc-preview-image';
    dom.innerHTML = "\n        <div class=\"pswp__bg\"></div>\n        <div class=\"pswp__scroll-wrap\">\n            <div class=\"pswp__container\">\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n            </div>\n\n            <div class=\"pswp__ui pswp__ui--hidden\">\n            <div class=\"pswp__top-bar\">\n                <div class=\"pswp__counter\"></div>\n                <div class=\"pswp__preloader\">\n                <div class=\"pswp__preloader__icn\">\n                    <div class=\"pswp__preloader__cut\">\n                    <div class=\"pswp__preloader__donut\"></div>\n                    </div>\n                </div>\n                </div>\n            </div>\n            <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                <div class=\"pswp__share-tooltip\"></div>\n            </div>\n            <div class=\"pswp__caption\">\n                <div class=\"pswp__caption__center\"></div>\n            </div>\n            </div>\n        </div>\n        <div class=\"pswp__measure\"></div>";
    document.documentElement.appendChild(dom);
    dom.setAttribute('class', 'pswp');
  }

  return dom;
}

var isFetching = false;

function getImageSize(urlArr, cb) {
  var dom = getDom();
  var sizeArr = [];
  var measureDom = dom.querySelector('.pswp__measure');
  var cnt = 0;
  var total = urlArr.length;

  var _loop = function _loop(i) {
    var imgDom = document.createElement('img');
    measureDom.appendChild(imgDom);
    imgDom.src = urlArr[i];

    imgDom.onload = function () {
      sizeArr[i] = {
        src: urlArr[i],
        h: imgDom.height,
        w: imgDom.width
      };
      cnt++;
      measureDom.removeChild(imgDom);
      if (cnt === total) cb(sizeArr);
    };

    imgDom.onerror = function () {
      sizeArr[i] = {
        src: urlArr[i],
        h: 0,
        w: 0
      };
      cnt++;
      measureDom.removeChild(imgDom);
      if (cnt === total) cb(sizeArr);
    };
  };

  for (var i = 0; i < total; i++) {
    _loop(i);
  }
}

function preview(urlArr, index) {
  if (isFetching) return;
  isFetching = true;
  return new Promise(function (resolve, reject) {
    if (typeof urlArr === 'string') urlArr = [urlArr];
    var current = 0;
    if (typeof index == 'number') current = index;
    var pswpElement = getDom();
    getImageSize(urlArr, function (items) {
      var options = {
        index: current,
        history: false,
        loop: false,
        tapToClose: true,
        modal: true,
        closeEl: false,
        captionEl: false,
        fullscreenEl: false,
        zoomEl: false,
        shareEl: false,
        counterEl: false,
        arrowEl: false,
        preloaderEl: true,
        showAnimationDuration: 0
      };
      var gallery = new _photoswipe.default(pswpElement, items, options);
      gallery.init();
      resolve();
      isFetching = false;
    });
  });
}

var _default = preview;
exports.default = _default;