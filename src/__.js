// utils
import isFunction from './_utils/isFunction';

const PLACEHOLDER = '__KARI_PARAMETER_PLACEHOLDER__';

/**
 * @constant {string|Symbol} __ placeholder to use if you want to pass arguments out of order
 * @default
 */
export default isFunction(Symbol) ? Symbol(PLACEHOLDER) : PLACEHOLDER;
