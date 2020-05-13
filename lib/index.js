"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireWildcard(require("react-dom"));

var _WxImageViewer = _interopRequireDefault(require("./components/WxImageViewer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var previewImage = function previewImage(url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      current = _ref.current,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  var div = document.createElement('div');
  var urls = typeof url === 'string' ? [url] : url;
  var currentIndex = current > urls.length - 1 ? 0 : current;

  var onSuccess = function onSuccess(res) {
    success && success(res);
    complete && complete(res);
    Promise.resolve(res);
  };

  var onError = function onError(res) {
    fail && fail(res);
    complete && complete(res);
    Promise.reject(res);
  };

  var props = {
    urls: urls,
    onError: onError,
    onClose: function onClose() {
      (0, _reactDom.unmountComponentAtNode)(div);
    }
  };

  if (currentIndex > -1) {
    props.index = currentIndex;
  }

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_WxImageViewer.default, props), div);

  return onSuccess({
    errMsg: 'previewImage:ok'
  });
};

var _default = previewImage;
exports.default = _default;