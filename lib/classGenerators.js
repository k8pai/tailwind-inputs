"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var generateCustomStyles = function generateCustomStyles(customize) {
  var defaultStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rounded-lg bg-transparent selection:select-none transition duration-75 py-3 px-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline';
  var defaults = defaultStyles.split(' ').map(function (el) {
    return el;
  });
  var result = filterDefaultClass(customize, defaults);
  var response = generateFinalClass(customize, result);

  // console.log(result);
  // console.log(response);
  return response;
};
var generateFinalClass = function generateFinalClass(customize, result) {
  return result.map(function (el) {
    return el;
  }).join(' ') + ' ' + customize.split(' ').map(function (el) {
    return el;
  }).join(' ');
};
var filterDefaultClass = function filterDefaultClass(customize, defaults) {
  var res = '';
  var custom = customize.split(' ');
  custom.map(function (el) {
    var val = el.indexOf('-') > 0 ? el.substring(0, el.indexOf('-') + 1) : el;
    res += ' ' + defaults.filter(function (elem) {
      return elem.startsWith(val) || elem.startsWith(val.substring(0, val.length - 1));
    });
  });
  return defaults.filter(function (el) {
    return !res.includes(el);
  });
};
var _default = {
  generateCustomStyles: generateCustomStyles
};
exports["default"] = _default;