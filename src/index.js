import pw from './photoswipe';
function getDom() {
  var dom = document.querySelector('#rc-preview-image');
  if (!dom) {
    dom = document.createElement('div');
    dom.id = 'rc-preview-image';
    dom.innerHTML = `
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
            <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            </div>

            <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <div class="pswp__preloader">
                <div class="pswp__preloader__icn">
                    <div class="pswp__preloader__cut">
                    <div class="pswp__preloader__donut"></div>
                    </div>
                </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
            </div>
        </div>
        <div class="pswp__measure"></div>`;
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
  for (let i = 0; i < total; i++) {
    let imgDom = document.createElement('img');
    measureDom.appendChild(imgDom);
    imgDom.src = urlArr[i];
    imgDom.onload = () => {
      sizeArr[i] = { src: urlArr[i], h: imgDom.height, w: imgDom.width };
      cnt++;
      measureDom.removeChild(imgDom);
      if (cnt === total) cb(sizeArr);
    };
    imgDom.onerror = () => {
      sizeArr[i] = { src: urlArr[i], h: 0, w: 0 };
      cnt++;
      measureDom.removeChild(imgDom);
      if (cnt === total) cb(sizeArr);
    };
  }
}

function preview(urlArr, index) {
  if (isFetching) return;
  isFetching = true;
  return new Promise((resolve, reject) => {
    if (typeof urlArr === 'string') urlArr = [urlArr];
    var current = 0;
    if (typeof index == 'number') current = index
    var pswpElement = getDom();
    getImageSize(urlArr, items => {
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
        showAnimationDuration: 0,
      };
      var gallery = new pw(pswpElement, items, options);
      gallery.init();
      resolve();
      isFetching = false;
    });
  });
}

export default preview;
