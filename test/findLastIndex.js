// test
import test from 'ava';
import sinon from 'sinon';

// src
import findLastIndex from 'src/findLastIndex';
import * as array from 'src/_utils/findInArray';
import * as object from 'src/_utils/findInObject';
import * as reverse from 'src/_utils/reverse';

test('if findLastIndex will find call findInArray and reverse when the item is an array', (t) => {
  const items = [];
  const method = () => {};

  const reversedItems = [];

  const reverseStub = sinon.stub(reverse, 'default').returns(reversedItems);
  const findInArrayStub = sinon.stub(array, 'default');
  const findInObjectStub = sinon.stub(object, 'default');

  findLastIndex(method)(items);

  t.true(reverseStub.calledOnce);
  t.true(reverseStub.calledWith(items));

  t.true(findInArrayStub.calledOnce);
  t.true(findInArrayStub.calledWith(method, reversedItems, true));

  t.true(findInObjectStub.notCalled);

  reverseStub.restore();
  findInArrayStub.restore();
  findInObjectStub.restore();
});

test('if findLastIndex will find call findInObject when the item is an object', (t) => {
  const items = {};
  const method = () => {};

  const reversedItems = {};

  const reverseStub = sinon.stub(reverse, 'default').returns(reversedItems);
  const findInArrayStub = sinon.stub(array, 'default');
  const findInObjectStub = sinon.stub(object, 'default');

  findLastIndex(method)(items);

  t.true(reverseStub.calledOnce);

  t.true(findInArrayStub.notCalled);

  t.true(findInObjectStub.calledOnce);

  const args = findInObjectStub.firstCall.args;

  t.is(args.length, 4);
  t.deepEqual(args, [method, items, Object.keys(items), true]);

  reverseStub.restore();
  findInArrayStub.restore();
  findInObjectStub.restore();
});

test('if findLastIndex will find call findInArray when the item is neither an array or object', (t) => {
  const items = 'foo';
  const method = () => {};

  const reversedItems = 'oof';

  const reverseStub = sinon.stub(reverse, 'default').returns(reversedItems);
  const findInArrayStub = sinon.stub(array, 'default');
  const findInObjectStub = sinon.stub(object, 'default');

  findLastIndex(method)(items);

  t.true(reverseStub.calledOnce);
  t.true(reverseStub.calledWith(items));

  t.true(findInArrayStub.calledOnce);

  const args = findInArrayStub.firstCall.args;

  t.is(args.length, 3);
  t.deepEqual(args, [method, [reversedItems], true]);

  t.true(findInObjectStub.notCalled);

  reverseStub.restore();
  findInArrayStub.restore();
  findInObjectStub.restore();
});
