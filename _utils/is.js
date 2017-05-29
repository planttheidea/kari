'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @function isArray
 *
 * @description
 * test if the item an array
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item an array
 */
var isArray = exports.isArray = Array.isArray;

/**
 * @function isNumber
 *
 * @description
 * test if the item a number
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a number
 */
var isNumber = exports.isNumber = function isNumber(object) {
  return typeof object === 'number';
};

/**
 * @function isObject
 *
 * @description
 * test if the item a object
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a object
 */
var isObject = exports.isObject = function isObject(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && !!object && object.constructor === Object;
};

/**
 * @function isString
 *
 * @description
 * test if the item a string
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item a string
 */
var isString = exports.isString = function isString(object) {
  return typeof object === 'string';
};

/**
 * @function isEmpty
 *
 * @description
 * is the object empty based on:
 * - is it truthy
 * - if an array, does it have length
 * - if an object, does it have keys
 * - is it anything else
 *
 * @param {*} object the object to test
 * @returns {boolean} is the item empty
 */
var isEmpty = exports.isEmpty = function isEmpty(object) {
  if (!object) {
    return true;
  }

  if (isArray(object) && !object.length) {
    return true;
  }

  return !isString(object) && !Object.keys(object).length;
};