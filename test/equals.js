// test
import test from 'ava';
import * as curriable from 'curriable';
import * as fe from 'fast-equals';
import sinon from 'sinon';

test('if equals curries deepEqual from fast-equals', (t) => {
  const spy = sinon.spy(curriable, 'curry');

  const equals = require('src/equals').default;

  t.true(spy.calledOnce);
  t.true(spy.calledWith(fe.deepEqual));

  t.true(equals(new Map(), new Map()));

  spy.restore();
});
