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

test('if tap will handle being sent multiple args', (t) => {
  const spy = sinon.spy();
  const value = {};
  const value2 = {};

  const result = tap(spy)(value, value2);

  t.true(spy.calledOnce);
  t.true(spy.calledWith(value, value2));

  t.is(result, value);
});

test('if tap will handle being sent no args', (t) => {
  const spy = sinon.spy();

  const result = tap(spy)();

  t.true(spy.calledOnce);
  t.is(spy.firstCall.args.length, 0);

  t.is(result, undefined);
});
