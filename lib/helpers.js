"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var validateFields = function validateFields(type, value) {
  if (typeof type === 'undefined') {
    return null;
  }
  if (type === 'number') {
    if (value === '') {
      return null;
    }
  }
  if (type === 'noSpace') {
    if (value === '') {
      return null;
    }
    if (value.includes(' ')) {
      return false;
    }
    return !/\s/.test(value) ? true : null;
  }
  if (type === 'password') {
    if (value === '') {
      return null;
    }
    if (value.length <= 8) {
      return false;
    }
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$#]{8,}$/;
    return passwordPattern.test(value) ? true : null;
  }
  if (type === 'username') {
    if (value === '') {
      return null;
    }
    if (value.includes(' ') || value.length > 19) {
      return false;
    }
    var usernamePattern = /^[a-zA-Z_][a-zA-Z0-9_]{3,19}$/;
    var res = usernamePattern.test(value);
    return res ? true : null;
  }
  if (type === 'email') {
    if (value === '') {
      return null;
    }

    // Check for not allowed characters
    var notAllowedChars = /[ "(),:;<>\[\]\\]/g;
    if (notAllowedChars.test(value)) {
      return false;
    }

    // Check for dots at the beginning or end of the local part
    var dotsAtBeginningOrEnd = /^\.|\.$/;
    if (dotsAtBeginningOrEnd.test(value === null || value === void 0 ? void 0 : value.split('@')[0])) {
      return false;
    }

    // Check for dots immediately before or after the @ symbol
    var dotsBeforeOrAfterAt = /\.@|@\./g;
    if (dotsBeforeOrAfterAt.test(value)) {
      return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var _res = emailPattern.test(value) && value.endsWith('@gmail.com');
    return _res ? true : null;
  }
  if (type === 'discordId') {
    var discordIdPattern = /^[a-zA-Z0-9_]{2,32}#[0-9]{4}$/;
    var usernameRegex = /^[a-zA-Z0-9_]{2,32}$/;
    var discriminatorRegex = /^[0-9]{0,4}$/;
    if (value === '' || value.length <= 2) {
      return null;
    }
    if (!value.includes('#') && !usernameRegex.test(value)) {
      return false;
    }
    if (value.includes('#')) {
      var _value$split = value.split('#'),
        _value$split2 = _slicedToArray(_value$split, 2),
        username = _value$split2[0],
        discriminator = _value$split2[1];
      if (!discriminatorRegex.test(discriminator)) {
        return false;
      }
    }
    return discordIdPattern.test(value) ? true : null;
  }
  return value.length > 0 ? true : null;
};
var generatePlaceholder = function generatePlaceholder(type) {
  if (type === 'default') {
    return "Can't be empty!";
  }
  if (type === 'noSpace') {
    return 'No space accepted.';
  }
  if (type === 'username') {
    return 'Enter an username.';
  }
  if (type === 'email') {
    return 'username@gmail.com';
  }
  if (type === 'discordId') {
    return 'username#0000';
  }
};
var _default = {
  validateFields: validateFields,
  generatePlaceholder: generatePlaceholder
};
exports["default"] = _default;