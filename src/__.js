// utils
import isFunction from './_utils/isFunction';

const PLACEHOLDER = '__KARI_PARAMETER_PLACEHOLDER__';

export default isFunction(Symbol) ? Symbol(PLACEHOLDER) : PLACEHOLDER;
