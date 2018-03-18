// external dependencies
import {curry} from 'curriable';
import {sameValueZeroEqual} from 'fast-equals';

export const PRIMITIVES_TYPES = ['boolean', 'number', 'string', 'symbol', 'undefined'];

export const isNaN = (value) => value !== value;

export const isInteger = (value) => typeof value === 'number' && ~~value === value;

export const isPrimitive = (value) => value === null || !!~PRIMITIVES_TYPES.indexOf(typeof value);

export const isComplexObject = (value) => !isPrimitive(value) && !(value instanceof RegExp || value instanceof Date);

export const isValidLength = (value) => typeof value === 'number' && ~~value === value;

export const isArrayLike = (value) => !!value && typeof value !== 'function' && isValidLength(value.length);

export const isEqual = curry(sameValueZeroEqual);
