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
    if (args.length >= arity) {
      return fn(...args);
    }

    return (...futureArgs) => {
      return curried(...args, ...futureArgs);
    };
  };

  Object.defineProperty(curried, 'name', {
    value: fn.name
  });

  return curried;
}
