"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactIcons = require("react-icons");
var _hi = require("react-icons/hi2");
var _react = _interopRequireWildcard(require("react"));
var _Context = require("../lib/Context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var TiSelect = function TiSelect(_ref) {
  var name = _ref.name,
    value = _ref.value,
    children = _ref.children;
  var _useContext = (0, _react.useContext)(_Context.TiFormContext),
    setValues = _useContext.setValues;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(value || ''),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  (0, _react.useEffect)(function () {
    setValues(function (el) {
      return _objectSpread(_objectSpread({}, el), {}, _defineProperty({}, name, selected));
    });
  }, [selected]);
  var toggleOptions = function toggleOptions() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative mb-4 max-w-xs w-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-hidden": isOpen,
    className: "appearance-none border-2 border-gray-400 rounded-lg py-3 pl-4 pr-10 leading-tight transition focus:outline-none aria-hidden:shadow-outline aria-hidden:border-gray-700",
    id: name,
    name: name,
    onClick: toggleOptions
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold tracking-wide select-none"
  }, selected || 'Select'), /*#__PURE__*/_react["default"].createElement(_hi.HiChevronUpDown, {
    className: "absolute inset-y-0 right-0 h-full mx-3 text-gray-700"
  })), /*#__PURE__*/_react["default"].createElement(_Context.TiSelectContext.Provider, {
    value: {
      selected: selected,
      setSelected: setSelected,
      isOpen: isOpen,
      setIsOpen: setIsOpen
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-hidden": !isOpen,
    className: "absolute top-full left-0 py-1 right-0 z-10 transition-all ease-in-out duration-200 bg-white border border-gray-400 rounded-md shadow-lg mt-1 overflow-auto max-h-60 opacity-100 visible aria-hidden:invisible aria-hidden:opacity-0"
  }, children)));
};
var TiSelectOptions = function TiSelectOptions(_ref2) {
  var value = _ref2.value,
    disable = _ref2.disable,
    children = _ref2.children;
  var _useContext2 = (0, _react.useContext)(_Context.TiSelectContext),
    selected = _useContext2.selected,
    setSelected = _useContext2.setSelected,
    setIsOpen = _useContext2.setIsOpen;
  var handleClick = function handleClick() {
    if (!disable) {
      setSelected(value);
      setIsOpen(function (val) {
        return !val;
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative select-none pr-4 py-2 pl-11  ".concat(disable ? 'bg-slate-50' : 'hover:bg-gray-100  cursor-pointer', "  transition-all ease-in-out font-semibold"),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "block truncate ".concat(selected === value ? 'font-medium' : 'font-normal', " ").concat(disable ? 'text-gray-300' : null)
  }, children), selected === value ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute inset-y-0 left-0 flex items-center mx-3 text-amber-600"
  }, /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '1.4em',
      className: 'global-class-name text-green-500'
    }
  }, /*#__PURE__*/_react["default"].createElement(_hi.HiCheck, null))) : null));
};
TiSelect.Option = TiSelectOptions;
var _default = TiSelect;
exports["default"] = _default;