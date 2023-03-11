"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lib = require("../lib");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TextInput = function TextInput(_ref) {
  var name = _ref.name,
    label = _ref.label,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    value = _ref.value,
    onChange = _ref.onChange,
    submit = _ref.submit,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$validate = _ref.validate,
    validate = _ref$validate === void 0 ? null : _ref$validate,
    _ref$valid = _ref.valid,
    valid = _ref$valid === void 0 ? false : _ref$valid,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$validMessage = _ref.validMessage,
    validMessage = _ref$validMessage === void 0 ? '' : _ref$validMessage,
    _ref$errorMessage = _ref.errorMessage,
    errorMessage = _ref$errorMessage === void 0 ? '' : _ref$errorMessage;
  var checker = (0, _lib.validateFields)(validate, value);

  // console.log(checker);
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
    value: value,
    onChange: onChange,
    className: "border-2 border-gray-400 rounded-lg transition duration-75 py-3 px-4 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ".concat(checker ? 'border-green-500' : '', " ").concat(submit && !checker ? 'border-red-500' : '')
  }), valid ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(checker ? 'block text-green-500/90 p-1 font-semibold tracking-wide' : 'hidden')
  }, /*#__PURE__*/_react["default"].createElement("h1", null, validMessage)) : null, error ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(submit && !checker ? 'block text-red-500/90 p-1 font-semibold tracking-wide' : 'hidden')
  }, /*#__PURE__*/_react["default"].createElement("h1", null, errorMessage)) : null);
};
var _default = TextInput;
exports["default"] = _default;