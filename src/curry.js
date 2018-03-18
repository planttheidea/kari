// external dependencies
import {curry} from 'curriable';

/**
 * @function curry
 * 
 * @description
 * convert a function into a curriable method
 * 
 * @param {function} fn the function to curry
 * @param {number} [arity=fn.length] the arity of the function
 * @returns {function(...Array<any>): any} the curried function
 */
export default curry;
