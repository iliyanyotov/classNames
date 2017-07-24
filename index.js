'use strict';

var isArray = require('isarray');
var isObject = require('isobject');

var hasOwnProperty = function (obj, key) {
  return Object.hasOwnProperty.call(obj, key)
};

var classNames = function () {
  var argsCount = arguments.length;

  if (!argsCount) return '';

  var argIndex, key, argument, classes = [];

  for (argIndex = 0; argIndex < argsCount; argIndex++) {
    argument = arguments[argIndex];

    if (typeof argument === 'number' || typeof argument === 'string') {
      classes.push(argument)
    } else if (isArray(argument)) {
      classes = classes.concat(argument)
    } else if (isObject(argument)) {
      for (key in argument) {
        if (hasOwnProperty(argument, key) && argument[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
};

module.exports = classNames;
