// test
import test from 'ava';
import sinon from 'sinon';

// src
import tap from 'src/tap';

test('if tap will call the fn passed with the value before returning the value', (t) => {
  const spy = sinon.spy();
  const value = {};

  const result = tap(spy)(value);

  t.true(spy.calledOnce);
  t.true(spy.calledWith(value));

  t.is(result, value);
});
