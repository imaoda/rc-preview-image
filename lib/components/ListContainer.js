"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _ImageContainer = _interopRequireDefault(require("./ImageContainer"));

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

// 快速拖动时间限制
var DEFAULT_TIME_DIFF = 200;

var ListContainer = /*#__PURE__*/function (_PureComponent) {
  _inherits(ListContainer, _PureComponent);

  var _super = _createSuper(ListContainer);

  function ListContainer(props, context) {
    var _this;

    _classCallCheck(this, ListContainer);

    _this = _super.call(this, props, context);
    _this.state = {
      left: 0
    };

    _this.easing = function (distance) {
      var t = distance;
      var b = 0;
      var d = _this.props.screenWidth; // 允许拖拽的最大距离

      var c = d / 2.5; // 提示标签最大有效拖拽距离

      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };

    _this.handleStart = function () {
      _this.startLeft = _this.state.left;
      _this.startTime = new Date().getTime();
      _this.isNeedSpring = false;
    };

    _this.handleMove = function (diffX) {
      var nDiffx = diffX; // 限制最大 diffx 值

      if (Math.abs(nDiffx) > _this.props.screenWidth) {
        if (nDiffx < 0) {
          nDiffx = -_this.props.screenWidth;
        }

        if (nDiffx > 0) {
          nDiffx = _this.props.screenWidth;
        }
      }

      if (_this.state.left >= 0 && nDiffx > 0) {
        nDiffx = _this.easing(nDiffx);
      } else if (_this.state.left <= -_this.maxLeft && nDiffx < 0) {
        nDiffx = -_this.easing(-nDiffx);
      }

      _this.setState({
        left: _this.startLeft + nDiffx
      });
    };

    _this.handleEnd = function (isAllowChange) {
      var index;

      var diffTime = new Date().getTime() - _this.startTime; // console.info('handleEnd %s', isAllowChange, diffTime, this.state.left, this.startLeft, this.props.index)
      // 快速拖动情况下切换图片


      if (isAllowChange && diffTime < DEFAULT_TIME_DIFF) {
        if (_this.state.left < _this.startLeft) {
          index = _this.props.index + 1;
        } else {
          index = _this.props.index - 1;
        }
      } else {
        index = Math.abs(Math.round(_this.state.left / _this.perDistance));
      } // 处理边界情况


      if (index < 0) {
        index = 0;
      } else if (index > _this.length - 1) {
        index = _this.length - 1;
      }

      _this.setState({
        left: -_this.perDistance * index
      });

      _this.isNeedSpring = true;

      if (index !== _this.props.index) {
        _this.props.changeIndex(index);

        return true;
      }

      return false;
    };

    _this.isNeedSpring = false;
    var screenWidth = props.screenWidth,
        urls = props.urls,
        _index = props.index,
        gap = props.gap;
    _this.length = urls.length;
    _this.perDistance = screenWidth + gap;
    _this.maxLeft = _this.perDistance * (_this.length - 1);
    _this.state.left = -_this.perDistance * _index;
    return _this;
  }

  _createClass(ListContainer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return _objectSpread({}, this.context);
    }
  }, {
    key: "componentDidUpdate",
    // componentWillMount() {
    // // 挪动到 constructor 里了
    //   const { screenWidth, urls, index, gap } = this.props;
    //   this.length = urls.length;
    //   this.perDistance = screenWidth + gap;
    //   this.maxLeft = this.perDistance * (this.length - 1);
    //   this.setState({
    //     left: -this.perDistance * index,
    //   });
    // }
    value: function componentDidUpdate(prevProps) {
      if (prevProps.index !== this.props.index) {
        this.isNeedSpring = true;
        this.setState({
          left: -this.perDistance * this.props.index
        });
      }
    } // componentWillReceiveProps(nextProps) {
    // 挪动到 componentDidUpdate 里了
    //   if (this.props.index !== nextProps.index) {
    //     this.isNeedSpring = true;
    //     this.setState({
    //       left: -this.perDistance * nextProps.index,
    //     });
    //   }
    // }

    /**
     * 拖拽的缓动公式 - easeOutSine
     * Link http://easings.net/zh-cn#
     * t: current time（当前时间）；
     * b: beginning value（初始值）；
     * c: change in value（变化量）；
     * d: duration（持续时间）。
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          maxZoomNum = _this$props.maxZoomNum,
          screenWidth = _this$props.screenWidth,
          screenHeight = _this$props.screenHeight,
          urls = _this$props.urls,
          speed = _this$props.speed;
      var left = this.state.left;
      var defaultStyle = {};

      if (this.isNeedSpring) {
        var duration = "".concat(speed, "ms");
        defaultStyle.WebkitTransitionDuration = duration;
        defaultStyle.transitionDuration = duration;
      }

      var translate = "translate3d(".concat(left, "px, 0, 0)");
      defaultStyle.WebkitTransform = translate;
      defaultStyle.transform = translate;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "viewer-list-container",
        style: defaultStyle
      }, urls.map(function (item, i) {
        return /*#__PURE__*/_react.default.createElement(_ImageContainer.default, {
          key: i // eslint-disable-line
          ,
          src: item,
          maxZoomNum: maxZoomNum,
          handleStart: _this2.handleStart,
          handleMove: _this2.handleMove,
          handleEnd: _this2.handleEnd,
          left: _this2.perDistance * i,
          screenWidth: screenWidth,
          screenHeight: screenHeight
        });
      }));
    }
  }]);

  return ListContainer;
}(_react.PureComponent);

ListContainer.propTypes = {
  maxZoomNum: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired,
  gap: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
};
ListContainer.childContextTypes = {};
var _default = ListContainer;
exports.default = _default;