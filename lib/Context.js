"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TiSelectContext = exports.TiMultiselectContext = exports.TiInputContext = exports.TiFormContext = void 0;
var _react = require("react");
// Context for managing form state
var TiFormContext = /*#__PURE__*/(0, _react.createContext)({
  values: {},
  setValues: function setValues() {},
  submit: false,
  setSubmit: function setSubmit() {},
  valid: [],
  setValid: function setValid() {}
});
exports.TiFormContext = TiFormContext;
var TiSelectContext = /*#__PURE__*/(0, _react.createContext)({
  selected: '',
  setSelected: function setSelected() {},
  isOpen: false,
  setIsOpen: function setIsOpen() {}
});
exports.TiSelectContext = TiSelectContext;
var TiMultiselectContext = /*#__PURE__*/(0, _react.createContext)({
  selected: [],
  setSelected: function setSelected() {},
  isOpen: false,
  setIsOpen: function setIsOpen() {}
});
exports.TiMultiselectContext = TiMultiselectContext;
var TiInputContext = /*#__PURE__*/(0, _react.createContext)({
  value: '',
  setValue: function setValue() {},
  valid: null,
  setValid: function setValid() {}
});
exports.TiInputContext = TiInputContext;