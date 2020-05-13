"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _ListContainer = _interopRequireDefault(require("./ListContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var screenWidth = typeof document !== 'undefined' && document.documentElement.clientWidth;
var screenHeight = typeof document !== 'undefined' && document.documentElement.clientHeight;

var WrapViewer = /*#__PURE__*/function (_Component) {
  _inherits(WrapViewer, _Component);

  var _super = _createSuper(WrapViewer);

  function WrapViewer() {
    var _this;

    _classCallCheck(this, WrapViewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      index: 0
    };

    _this.changeIndex = function (index) {
      // console.info('changeIndex index = ', index)
      _this.setState({
        index: index
      });
    };

    return _this;
  }

  _createClass(WrapViewer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return _objectSpread({}, this.context);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var index = this.props.index;
      this.setState({
        index: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          zIndex = _this$props.zIndex,
          urls = _this$props.urls,
          maxZoomNum = _this$props.maxZoomNum,
          gap = _this$props.gap,
          speed = _this$props.speed;
      var index = this.state.index;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "wx-image-viewer",
        style: {
          zIndex: zIndex
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "viewer-cover"
      }), /*#__PURE__*/_react.default.createElement(_ListContainer.default, {
        screenWidth: screenWidth,
        screenHeight: screenHeight,
        changeIndex: this.changeIndex,
        urls: urls,
        maxZoomNum: maxZoomNum,
        gap: gap,
        speed: speed,
        index: index
      }));
    }
  }]);

  return WrapViewer;
}(_react.Component);

WrapViewer.propTypes = {
  index: PropTypes.number.isRequired,
  // 当前显示图片的http链接
  urls: PropTypes.array.isRequired,
  // 需要预览的图片http链接列表
  maxZoomNum: PropTypes.number.isRequired,
  // 最大放大倍数
  zIndex: PropTypes.number.isRequired,
  // 组件图层深度
  gap: PropTypes.number.isRequired,
  // 间隙
  speed: PropTypes.number.isRequired // Duration of transition between slides (in ms)

};
WrapViewer.childContextTypes = {};
var _default = WrapViewer;
exports.default = _default;