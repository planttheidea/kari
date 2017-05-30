const PLACEHOLDER = '__KARI_PARAMETER_PLACEHOLDER__';

export const __ = typeof Symbol === 'function' ? Symbol(PLACEHOLDER) : PLACEHOLDER;

/**
 * @function getArgsToPass
 *
 * @description
 * get the complete args with previous placeholders being filled in
 *
 * @param {Array<*>} originalArgs the arguments from the previous run
 * @param {Array<*>} nextArgs the arguments from the next run
 * @returns {Array<*>} the complete list of args
 */
export const getArgsToPass = (originalArgs, nextArgs) => {
  let argsToPass = [],
      index = -1;

  while (++index < originalArgs.length) {
    argsToPass[index] = nextArgs.length && originalArgs[index] === __ ? nextArgs.shift() : originalArgs[index];
  }

  return argsToPass;
};

/**
 * @function getAreArgsFilled
 *
 * @description
 * determine if the args are considered filled based on matching arity and not having any placeholders
 *
 * @param {Array<*>} args the args passed to the function
 * @param {number} arity the arity of the function
 * @returns {boolean} are all of the args filled
 */
export const getAreArgsFilled = (args, arity) => {
  if (args.length !== arity) {
    return false;
  }

  let index = -1;

  while (++index < arity) {
    if (args[index] === __) {
      return false;
    }
  }

  return true;
};

/**
 * @function curry
 *
 * @description
 * get the method passed as a curriable method based on its parameters
 *
 * @param {function} fn the method to make curriable
 * @param {number} [arity=fn.length] the arity of fn
 * @returns {function(*): *} the fn passed as a curriable method
 */
export default function curry(fn, arity = fn.length) {
  const curried = (...args) => {
    if (getAreArgsFilled(args, arity)) {
      return fn(...args);
    }

    return (...nextArgs) => {
      return curried(...getArgsToPass(args, nextArgs), ...nextArgs);
    };
  };

  Object.defineProperty(curried, 'name', {
    value: fn.name
  });

  return curried;
}