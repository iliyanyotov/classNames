'use strict';

var isArray = require('isarray');
var isObject = require('isobject');

var isString = function (value) {
  return typeof value === 'string';
};

var isNumber = function (value) {
  return typeof value === 'number';
};

var hasOwnProperty = function (obj, key) {
  return Object.hasOwnProperty.call(obj, key)
};

var isTruthy = function (value) {
  return !!value;
};

module.exports = function (baseClass) {
  var modifiers = Array.prototype.slice.call(arguments, 1);

  if (!isString(baseClass)) return '';
  if (!modifiers.length) return baseClass;

  var key;
  var classes = [ baseClass ];

  var constructModifier = function (modifier) {
    if (baseClass) {
      return baseClass + '--' + modifier;
    } else {
      return modifier;
    }
  };

  modifiers.forEach(function (modifier) {
    if (isString(modifier) || isNumber(modifier)) {
      classes.push(constructModifier(modifier))
    } else if (isArray(modifier)) {
      classes = classes.concat(
        modifier.filter(isTruthy).map(constructModifier)
      )
    } else if (isObject(modifier)) {
      for (key in modifier) {
        if (hasOwnProperty(modifier, key) && modifier[key]) {
          classes.push(constructModifier(key))
        }
      }
    }
  });

  return classes.join(' ')
};
