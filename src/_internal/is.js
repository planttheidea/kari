// external dependencies
import {curry} from 'curriable';
import {sameValueZeroEqual} from 'fast-equals';

export const PRIMITIVES_TYPES = ['boolean', 'number', 'string', 'symbol', 'undefined'];

export const isNaN = (value) => {
  return value !== value;
};

export const isInteger = (value) => {
  return typeof value === 'number' && ~~value === value;
};

export const isPrimitive = (value) => {
  return ~PRIMITIVES_TYPES.indexOf(typeof value) || value === null;
};

export const isComplexObject = (value) => {
  return !isPrimitive(value) && !(value instanceof RegExp || value instanceof Date);
};

export const isValidLength = (value) => {
  return typeof value === 'number' && ~~value === value;
};

export const isArrayLike = (value) => {
  return !!value && typeof value !== 'function' && isValidLength(value.length);
};

export const isEqual = curry(sameValueZeroEqual);
