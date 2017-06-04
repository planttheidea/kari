// test
import test from 'ava';
import sinon from 'sinon';

// src
import equals from 'src/equals';
import * as utils from 'src/_utils/isEquivalent';

test('if equals calls isEquivalent', (t) => {
  const spy = sinon.spy(utils, 'default');

  const result = equals(new Map(), new Map());

  t.true(spy.calledOnce);
  t.true(result);

  spy.restore();
});
