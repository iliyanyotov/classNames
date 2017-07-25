'use strict';

var isArray = require('isarray');
var isObject = require('isobject');

var hasOwnProperty = function (obj, key) {
  return Object.hasOwnProperty.call(obj, key)
};

var classNames = function (baseClass) {
  var modifiers = Array.prototype.slice.call(arguments, 1);
  var modifiersCount = modifiers.length;

  var key;
  var classes = [];

  if (baseClass) classes.push(baseClass);
  if (!modifiersCount) return classes;

  var constructModifier = function (modifier) {
    if (baseClass) {
      return baseClass + '--' + modifier;
    } else {
      return modifier;
    }
  };

  modifiers.forEach(function (modifier) {
    if (
      typeof modifier === 'number' ||
      typeof modifier === 'string'
    ) {
      classes.push(constructModifier(modifier))
    } else if (isArray(modifier)) {
      classes = classes.concat(modifier.filter(function (item) { return item }).map((function (item) {
        return constructModifier(item)
      })))
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

module.exports = classNames;
