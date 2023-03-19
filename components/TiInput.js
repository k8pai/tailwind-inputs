"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _helpers = _interopRequireDefault(require("../lib/helpers"));
var _reactIcons = require("react-icons");
var _ti = require("react-icons/ti");
var _classGenerators = _interopRequireDefault(require("../lib/classGenerators"));
var _react = _interopRequireWildcard(require("react"));
var _hi = require("react-icons/hi2");
var _Context = require("../lib/Context");
var _excluded = ["name", "title"],
  _excluded2 = ["children"],
  _excluded3 = ["errorMessage", "children"],
  _excluded4 = ["name", "validate", "customize", "loader", "autoComplete", "errorMessage", "readOnlyText"],
  _excluded5 = ["name", "validate", "customize", "loader", "autoComplete", "errorMessage"],
  _excluded6 = ["name", "validate", "customize", "autoComplete", "min", "max"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TiLabel = function TiLabel(_ref) {
  var name = _ref.name,
    title = _ref.title,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("label", _extends({
    htmlFor: name
  }, restProps), title);
};
var TiInput = function TiInput(_ref2) {
  var children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    valid = _useState2[0],
    setValid = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    inpValue = _useState4[0],
    setInpValue = _useState4[1];
  return /*#__PURE__*/_react["default"].createElement("div", rest, /*#__PURE__*/_react["default"].createElement(_Context.TiInputContext.Provider, {
    value: {
      value: inpValue,
      setValue: setInpValue,
      valid: valid,
      setValid: setValid
    }
  }, children));
};
var TiError = function TiError(_ref3) {
  var _ref3$errorMessage = _ref3.errorMessage,
    errorMessage = _ref3$errorMessage === void 0 ? false : _ref3$errorMessage,
    children = _ref3.children,
    rest = _objectWithoutProperties(_ref3, _excluded3);
  var _useContext = (0, _react.useContext)(_Context.TiInputContext),
    valid = _useContext.valid;
  return /*#__PURE__*/_react["default"].createElement("h1", _extends({
    "aria-hidden": errorMessage && valid === false,
    className: "text-red-500 mt-px ml-1 font-semibold tracking-wide transition-all ease-in-out duration-300 opacity-0 invisible aria-hidden:visible aria-hidden:opacity-100"
  }, rest), children);
};
var TiText = function TiText(_ref4) {
  var name = _ref4.name,
    validate = _ref4.validate,
    customize = _ref4.customize,
    _ref4$loader = _ref4.loader,
    loader = _ref4$loader === void 0 ? false : _ref4$loader,
    _ref4$autoComplete = _ref4.autoComplete,
    autoComplete = _ref4$autoComplete === void 0 ? 'off' : _ref4$autoComplete,
    errorMessage = _ref4.errorMessage,
    readOnlyText = _ref4.readOnlyText,
    rest = _objectWithoutProperties(_ref4, _excluded4);
  var validateFields = _helpers["default"].validateFields;
  var _useContext2 = (0, _react.useContext)(_Context.TiFormContext),
    values = _useContext2.values,
    setValues = _useContext2.setValues,
    submit = _useContext2.submit;
  var _useContext3 = (0, _react.useContext)(_Context.TiInputContext),
    value = _useContext3.value,
    setValue = _useContext3.setValue,
    valid = _useContext3.valid,
    setValid = _useContext3.setValid;
  var generateCustomStyles = _classGenerators["default"].generateCustomStyles;
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    animate = _useState6[0],
    setAnimate = _useState6[1];
  var _useState7 = (0, _react.useState)('rounded-lg bg-transparent selection:select-none transition duration-75 py-3 pl-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline'),
    _useState8 = _slicedToArray(_useState7, 2),
    className = _useState8[0],
    setClassName = _useState8[1];

  // useEffect(() => {
  // 	setValid(validateFields(validate, value));
  // }, []);

  (0, _react.useEffect)(function () {
    if (typeof validate !== 'undefined' && valid === null) {
      setValid(false);
    } else if (typeof validate === 'string' && valid === null) {
      setValid(false);
    }
  }, [submit]);
  (0, _react.useEffect)(function () {
    setValid(validateFields(validate, value));
    setAnimate(true);
    setTimeout(function () {
      setAnimate(false);
    }, 300);
    if (typeof validate === 'undefined') setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    if (typeof validate === 'string' && valid) setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
  }, [value]);
  (0, _react.useEffect)(function () {
    if (customize) {
      setClassName(generateCustomStyles(customize));
    }
  }, [customize]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: name,
    name: name,
    value: value || '',
    autoComplete: autoComplete,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    },
    className: className + "".concat(readOnlyText ? 'border-0 outline-none' : '', " ").concat(valid === true ? 'border-green-400' : '', " ").concat(valid === false ? 'border-red-400' : '')
  }, rest)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute z-40 inset-y-0 w-11 right-0 flex items-center px-3 rounded-r-lg focus:outline-none space-x-2"
  }, animate && loader && valid === null ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
    role: "status"
  }) : valid === false ? /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '1.5em',
      className: 'global-class-name text-red-500'
    }
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiTimes, null)) : valid === true ? /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '1.5em',
      className: 'global-class-name text-green-500'
    }
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiTick, null)) : null));
};
var TiMail = function TiMail(_ref5) {
  var name = _ref5.name,
    _ref5$validate = _ref5.validate,
    validate = _ref5$validate === void 0 ? 'email' : _ref5$validate,
    customize = _ref5.customize,
    _ref5$loader = _ref5.loader,
    loader = _ref5$loader === void 0 ? false : _ref5$loader,
    _ref5$autoComplete = _ref5.autoComplete,
    autoComplete = _ref5$autoComplete === void 0 ? 'off' : _ref5$autoComplete,
    errorMessage = _ref5.errorMessage,
    rest = _objectWithoutProperties(_ref5, _excluded5);
  var validateFields = _helpers["default"].validateFields;
  var _useContext4 = (0, _react.useContext)(_Context.TiFormContext),
    values = _useContext4.values,
    setValues = _useContext4.setValues,
    submit = _useContext4.submit;
  var _useContext5 = (0, _react.useContext)(_Context.TiInputContext),
    value = _useContext5.value,
    setValue = _useContext5.setValue,
    valid = _useContext5.valid,
    setValid = _useContext5.setValid;
  var generateCustomStyles = _classGenerators["default"].generateCustomStyles;
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    animate = _useState10[0],
    setAnimate = _useState10[1];
  var _useState11 = (0, _react.useState)('rounded-lg bg-transparent selection:select-none transition duration-75 py-3 pl-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline'),
    _useState12 = _slicedToArray(_useState11, 2),
    className = _useState12[0],
    setClassName = _useState12[1];
  (0, _react.useEffect)(function () {
    if (valid === false) {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, '')));
    }
  }, [valid]);
  (0, _react.useEffect)(function () {
    if (typeof validate === 'string' && valid === null) {
      setValid(false);
    }
  }, [submit]);
  (0, _react.useEffect)(function () {
    setValid(validateFields(validate, value));
    setAnimate(true);
    setTimeout(function () {
      setAnimate(false);
    }, 300);
    if (typeof validate === 'undefined' && valid === null) setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    if (typeof validate === 'string' && valid !== false) setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
  }, [value]);
  (0, _react.useEffect)(function () {
    if (customize) {
      setClassName(generateCustomStyles(customize));
    }
  }, [customize]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: name,
    name: name,
    value: value || '',
    autoComplete: autoComplete,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    },
    className: className + " ".concat(valid === true ? 'border-green-400' : '', " ").concat(valid === false ? 'border-red-400' : '')
  }, rest)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute z-40 inset-y-0 w-11 right-0 flex items-center px-3 rounded-r-lg focus:outline-none space-x-2"
  }, animate && loader && valid === null ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
    role: "status"
  }) : valid === false ? /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '1.5em',
      className: 'global-class-name text-red-500'
    }
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiTimes, null)) : valid === true ? /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '1.5em',
      className: 'global-class-name text-green-500'
    }
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiTick, null)) : null));
};
var TiNumber = function TiNumber(_ref6) {
  var name = _ref6.name,
    _ref6$validate = _ref6.validate,
    validate = _ref6$validate === void 0 ? 'number' : _ref6$validate,
    customize = _ref6.customize,
    _ref6$autoComplete = _ref6.autoComplete,
    autoComplete = _ref6$autoComplete === void 0 ? 'off' : _ref6$autoComplete,
    _ref6$min = _ref6.min,
    min = _ref6$min === void 0 ? 0 : _ref6$min,
    _ref6$max = _ref6.max,
    max = _ref6$max === void 0 ? 100 : _ref6$max,
    rest = _objectWithoutProperties(_ref6, _excluded6);
  var validateFields = _helpers["default"].validateFields;
  var _useContext6 = (0, _react.useContext)(_Context.TiFormContext),
    values = _useContext6.values,
    setValues = _useContext6.setValues,
    submit = _useContext6.submit;
  var _useContext7 = (0, _react.useContext)(_Context.TiInputContext),
    value = _useContext7.value,
    setValue = _useContext7.setValue,
    valid = _useContext7.valid,
    setValid = _useContext7.setValid;
  var generateCustomStyles = _classGenerators["default"].generateCustomStyles;
  var _useState13 = (0, _react.useState)('rounded-lg bg-transparent selection:bg-green-400 selection:text-white transition duration-75 py-3 pl-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline'),
    _useState14 = _slicedToArray(_useState13, 2),
    className = _useState14[0],
    setClassName = _useState14[1];
  (0, _react.useEffect)(function () {
    setValue(parseInt(0));
  }, []);
  (0, _react.useEffect)(function () {
    if (valid === false) {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, 0)));
    } else {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    }
  }, [valid]);
  (0, _react.useEffect)(function () {
    if (valid === null) {
      setValid(false);
    }
  }, [submit]);
  (0, _react.useEffect)(function () {
    console.log(_typeof(value), value);
    setValid(validateFields(validate, value));
    if (value < min || value.length === 0) setValid(null);
    if (value > max) setValid(false);
    if (value >= min && value <= max) setValid(true);
  }, [value]);
  (0, _react.useEffect)(function () {
    if (customize) {
      setClassName(generateCustomStyles(customize));
    }
  }, [customize]);
  var handleChange = function handleChange(event) {
    var val = parseInt(event.target.value);
    if (!isNaN(val)) {
      setValue(val);
    } else if (isNaN(val)) {
      setValue(0);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "group relative"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: name,
    name: name,
    value: value,
    autoComplete: autoComplete,
    onChange: handleChange,
    className: className + " ".concat(valid === true ? 'border-green-400' : '', " ").concat(valid === false ? 'border-red-400' : '')
  }, rest)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute z-40 inset-y-0 h-full right-0 flex flex-col justify-center space-y-1 px-3 rounded-r-lg focus:outline-none transition-all duration-200 ease-in-out invisible opacity-0 group-hover:visible group-hover:opacity-100"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "border rounded-md py-px px-1",
    onClick: function onClick(event) {
      event.preventDefault();
      setValue(function (val) {
        return parseInt(val) + 1;
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '.75em',
      className: 'global-class-name'
    }
  }, /*#__PURE__*/_react["default"].createElement(_hi.HiChevronUp, null))), /*#__PURE__*/_react["default"].createElement("button", {
    className: "border rounded-md py-px px-1",
    onClick: function onClick(event) {
      event.preventDefault();
      setValue(function (val) {
        return parseInt(val) - 1;
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '.75em',
      className: 'global-class-name'
    }
  }, /*#__PURE__*/_react["default"].createElement(_hi.HiChevronDown, null)))));
};
TiInput.Label = TiLabel;
TiInput.Error = TiError;
TiInput.Text = TiText;
TiInput.Mail = TiMail;
TiInput.Number = TiNumber;
var _default = TiInput;
exports["default"] = _default;