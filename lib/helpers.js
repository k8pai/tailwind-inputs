"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var validateFields = function validateFields(type, value) {
  if (!type) {
    return false;
  }
  if (type === 'default') {
    return !!value;
  }
};
var _default = validateFields;
exports["default"] = _default;