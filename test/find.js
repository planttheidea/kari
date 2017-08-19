// test
import test from 'ava';
import sinon from 'sinon';

// src
import find from 'src/find';
import * as array from 'src/_utils/findInArray';
import * as object from 'src/_utils/findInObject';

test('if find will find call findInArray when the item is an array', (t) => {
  const items = [];
  const method = () => {};

  const findInArrayStub = sinon.stub(array, 'default');
  const findInObjectStub = sinon.stub(object, 'default');

  find(method)(items);

  t.true(findInArrayStub.calledOnce);
  t.true(findInArrayStub.calledWith(method, items, false));

  t.true(findInObjectStub.notCalled);

  findInArrayStub.restore();
  findInObjectStub.restore();
});

test('if find will find call findInObject when the item is an object', (t) => {
  const items = {};
  const method = () => {};

  const findInArrayStub = sinon.stub(array, 'default');
  const findInObjectStub = sinon.stub(object, 'default');

  find(method)(items);

  t.true(findInArrayStub.notCalled);

  t.true(findInObjectStub.calledOnce);

  const args = findInObjectStub.firstCall.args;

  t.is(args.length, 4);
  t.deepEqual(args, [method, items, Object.keys(items), false]);

  findInArrayStub.restore();
  findInObjectStub.restore();
});

test('if find will find call findInArray when the item is neither an array or object', (t) => {
  const items = 'foo';
  const method = () => {};

  const findInArrayStub = sinon.stub(array, 'default');
  const findInObjectStub = sinon.stub(object, 'default');

  find(method)(items);

  t.true(findInArrayStub.calledOnce);

  const args = findInArrayStub.firstCall.args;

  t.is(args.length, 3);
  t.deepEqual(args, [method, [items], false]);

  t.true(findInObjectStub.notCalled);

  findInArrayStub.restore();
  findInObjectStub.restore();
});
