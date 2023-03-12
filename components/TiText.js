"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TiText = TiText;
var _react = _interopRequireWildcard(require("react"));
var _helpers = _interopRequireDefault(require("../lib/helpers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var validateFields = _helpers["default"].validateFields,
  generatePlaceholder = _helpers["default"].generatePlaceholder;
function TiText(_ref) {
  var name = _ref.name,
    label = _ref.label,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    value = _ref.value,
    onChange = _ref.onChange,
    submit = _ref.submit,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    placeholder = _ref.placeholder,
    validate = _ref.validate,
    _ref$errorMessage = _ref.errorMessage,
    errorMessage = _ref$errorMessage === void 0 ? '' : _ref$errorMessage;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    valid = _useState2[0],
    setValid = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    pcHolder = _useState4[0],
    setPcHolder = _useState4[1];
  (0, _react.useEffect)(function () {
    if (typeof placeholder === 'undefined') {
      setPcHolder(generatePlaceholder(validate));
    } else {
      setPcHolder(placeholder);
    }
  }, []);
  (0, _react.useEffect)(function () {
    setValid(validateFields(validate, value));
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name,
    className: "block text-gray-700 font-bold mb-2"
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: name,
    name: name,
    autoComplete: autoComplete,
    placeholder: pcHolder,
    value: value,
    onChange: onChange,
    className: "border-2 border-gray-400 rounded-lg transition duration-75 py-3 px-4 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ".concat(valid === true ? 'border-green-500' : '', " ").concat(submit && valid === false ? 'border-red-500' : '')
  }), errorMessage && valid === false && submit ? /*#__PURE__*/_react["default"].createElement("h1", {
    className: "block text-red-500 mt-2 font-semibold tracking-wide"
  }, errorMessage) : null);
}