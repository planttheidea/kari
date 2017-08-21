// test
import test from 'ava';

// src
import typeOf from 'src/typeOf';

test('if typeOf will create a method that checks if the value is the type of type', (t) => {
  const type = 'string';
  const trueValue = 'foo';
  const falseValue = 123;

  t.true(typeOf(type)(trueValue));
  t.false(typeOf(type)(falseValue));
});
