"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = void 0;
exports.TiButton = TiButton;
exports.TiForm = TiForm;
exports.TiLabel = TiLabel;
exports.TiPassword = TiPassword;
exports.TiText = TiText;
var _react = _interopRequireWildcard(require("react"));
var _reactIcons = require("react-icons");
var _ti = require("react-icons/ti");
var _classGenerators = _interopRequireDefault(require("../lib/classGenerators"));
var _helpers = _interopRequireDefault(require("../lib/helpers"));
var _im = require("react-icons/im");
var _excluded = ["name", "title"],
  _excluded2 = ["name", "label", "validate", "loader", "autoComplete", "errorMessage", "customize", "readOnlyText"],
  _excluded3 = ["name", "label", "validate", "autoComplete", "loader", "showPass", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Create a context for managing form state
var FormContext = /*#__PURE__*/(0, _react.createContext)({
  values: {},
  setValue: function setValue() {},
  submit: false,
  setSubmit: function setSubmit() {}
});

// Form component that maintains form state using context
exports.FormContext = FormContext;
function TiForm(_ref) {
  var _ref$initialValues = _ref.initialValues,
    initialValues = _ref$initialValues === void 0 ? {} : _ref$initialValues,
    className = _ref.className,
    onSubmit = _ref.onSubmit,
    children = _ref.children;
  var _useState = (0, _react.useState)(initialValues),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    submit = _useState4[0],
    setSubmit = _useState4[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
    onSubmit(values);
  };
  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: className
  }, /*#__PURE__*/_react["default"].createElement(FormContext.Provider, {
    value: {
      values: values,
      setValue: setValues,
      submit: submit,
      setSubmit: setSubmit
    }
  }, children));
}

// tailwind-inputs label
function TiLabel(_ref2) {
  var name = _ref2.name,
    title = _ref2.title,
    restProps = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/_react["default"].createElement("label", _extends({
    htmlFor: name
  }, restProps), title);
}

// tailwind-inputs button
function TiButton(props) {
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "submit"
  }, props), "Submit");
}

// Input component that uses form state from context
function TiText(_ref3) {
  var name = _ref3.name,
    label = _ref3.label,
    validate = _ref3.validate,
    _ref3$loader = _ref3.loader,
    loader = _ref3$loader === void 0 ? false : _ref3$loader,
    _ref3$autoComplete = _ref3.autoComplete,
    autoComplete = _ref3$autoComplete === void 0 ? 'off' : _ref3$autoComplete,
    errorMessage = _ref3.errorMessage,
    customize = _ref3.customize,
    readOnlyText = _ref3.readOnlyText,
    restProps = _objectWithoutProperties(_ref3, _excluded2);
  var validateFields = _helpers["default"].validateFields;
  var generateCustomStyles = _classGenerators["default"].generateCustomStyles;
  var _useContext = (0, _react.useContext)(FormContext),
    values = _useContext.values,
    setValue = _useContext.setValue;
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    valid = _useState6[0],
    setValid = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    animate = _useState8[0],
    setAnimate = _useState8[1];
  var _useState9 = (0, _react.useState)('rounded-lg bg-transparent selection:select-none transition duration-75 py-3 px-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline'),
    _useState10 = _slicedToArray(_useState9, 2),
    className = _useState10[0],
    setClassName = _useState10[1];
  (0, _react.useEffect)(function () {
    if (customize) {
      setClassName(generateCustomStyles(customize));
    }
  }, [customize]);
  (0, _react.useEffect)(function () {
    setValid(validateFields(validate, ''));
  }, []);
  var handleChange = function handleChange(event) {
    console.log(values);
    setAnimate(true);
    setValue(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, event.target.value)));
    setValid(validateFields(validate, event.target.value));
    setTimeout(function () {
      setAnimate(false);
    }, 300);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name,
    className: "block text-lg ml-1 font-semibold mb-2"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: name,
    name: name,
    value: readOnlyText !== null && readOnlyText !== void 0 ? readOnlyText : values[name] || '',
    autoComplete: autoComplete,
    onChange: handleChange,
    className: className + "".concat(readOnlyText ? 'border-0 outline-none' : '', " ").concat(valid === true ? 'border-green-400' : '', " ").concat(valid === false ? 'border-red-400' : '')
  }, restProps)), /*#__PURE__*/_react["default"].createElement("div", {
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
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiTick, null)) : null)), errorMessage && valid === false ? /*#__PURE__*/_react["default"].createElement("h1", {
    className: "block text-red-500 mt-px ml-1 font-semibold tracking-wide"
  }, errorMessage) : null);
}

// tailwind-inputs password field
function TiPassword(_ref4) {
  var name = _ref4.name,
    label = _ref4.label,
    _ref4$validate = _ref4.validate,
    validate = _ref4$validate === void 0 ? 'password' : _ref4$validate,
    _ref4$autoComplete = _ref4.autoComplete,
    autoComplete = _ref4$autoComplete === void 0 ? 'off' : _ref4$autoComplete,
    _ref4$loader = _ref4.loader,
    loader = _ref4$loader === void 0 ? false : _ref4$loader,
    _ref4$showPass = _ref4.showPass,
    showPass = _ref4$showPass === void 0 ? true : _ref4$showPass,
    className = _ref4.className,
    restProps = _objectWithoutProperties(_ref4, _excluded3);
  var validateFields = _helpers["default"].validateFields;
  var _useContext2 = (0, _react.useContext)(FormContext),
    values = _useContext2.values,
    setValue = _useContext2.setValue;
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    valid = _useState12[0],
    setValid = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    animate = _useState14[0],
    setAnimate = _useState14[1];
  var _useState15 = (0, _react.useState)('password'),
    _useState16 = _slicedToArray(_useState15, 2),
    inpType = _useState16[0],
    setInpType = _useState16[1];
  (0, _react.useEffect)(function () {
    setValid(validateFields(validate, ''));
  }, []);

  // useEffect(() => {
  // 	console.log('valid ' + name + '? = ', valid);
  // 	console.log('submit = ', submit);
  // }, [valid]);

  var handleChange = function handleChange(event) {
    setAnimate(true);
    setValue(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, event.target.value)));
    // console.log(
    // 	'value = ',
    // 	event.target.value,
    // 	', type = ',
    // 	validate,
    // 	', valid? = ',
    // 	validateFields(validate, event.target.value),
    // );
    setValid(validateFields(validate, event.target.value));
    setTimeout(function () {
      setAnimate(false);
    }, 300);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name,
    className: "block text-lg ml-1 font-semibold mb-2"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: name,
    name: name,
    type: inpType,
    value: values[name] || '',
    autoComplete: autoComplete,
    onChange: handleChange,
    className: className || "rounded-lg transition duration-75 py-3 px-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline ".concat(valid === true ? 'border-green-400' : '', " ").concat(valid === false ? 'border-red-400' : '')
  }, restProps)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute z-40 inset-y-0 right-0 flex items-center px-3 rounded-r-lg focus:outline-none space-x-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex items-center space-x-2"
  }, animate && loader && valid === null ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
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
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiTick, null)) : null, showPass ? /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return inpType === 'password' ? setInpType('text') : setInpType('password');
    },
    type: "button",
    className: "flex items-center rounded-r-lg focus:outline-none"
  }, inpType === 'password' ? /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '1.4em',
      className: 'global-class-name text-gray-700'
    }
  }, /*#__PURE__*/_react["default"].createElement(_im.ImEye, null)) : /*#__PURE__*/_react["default"].createElement(_reactIcons.IconContext.Provider, {
    value: {
      size: '1.4em',
      className: 'global-class-name text-gray-700'
    }
  }, /*#__PURE__*/_react["default"].createElement(_im.ImEyeBlocked, null))) : null))));
}