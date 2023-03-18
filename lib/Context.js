"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TiSelectContext = exports.TiInputContext = exports.TiFormContext = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Context for managing form states
var TiFormContext = /*#__PURE__*/(0, _react.createContext)({
  values: {},
  setValues: function setValues() {},
  submit: false,
  setSubmit: function setSubmit() {}
});
exports.TiFormContext = TiFormContext;
var TiSelectContext = /*#__PURE__*/(0, _react.createContext)({
  selected: '',
  setSelected: function setSelected() {},
  isOpen: false,
  setIsOpen: function setIsOpen() {}
});
exports.TiSelectContext = TiSelectContext;
var TiInputContext = /*#__PURE__*/(0, _react.createContext)({
  value: '',
  setValue: function setValue() {},
  valid: null,
  setValid: function setValid() {}
});
exports.TiInputContext = TiInputContext;