// test
import test from 'ava';
import _ from 'lodash';
import sinon from 'sinon';

// src
import tryCatch from 'src/tryCatch';

test('if tryCatch will fire only tryFn if there are no errors', (t) => {
  const tryFn = sinon.spy(JSON, 'parse');
  const catchFn = sinon.spy(_, 'identity');

  const value = '{"foo": "bar"}';

  const result = tryCatch(tryFn, catchFn)(value);

  t.true(tryFn.calledOnce);
  t.true(tryFn.calledWith(value));

  t.true(catchFn.notCalled);

  t.deepEqual(result, {
    foo: 'bar'
  });

  tryFn.restore();
  catchFn.restore();
});

test('if tryCatch will fire tryFn and then catchFn if there is an error', (t) => {
  const tryFn = sinon.spy(JSON, 'parse');
  const catchFn = sinon.spy(_, 'identity');

  const value = {foo: 'bar'};

  const result = tryCatch(tryFn, catchFn)(value);

  t.true(tryFn.calledOnce);
  t.true(tryFn.calledWith(value));

  t.true(catchFn.calledOnce);

  const args = catchFn.firstCall.args;

  t.is(args.length, 2);

  t.true(_.isError(args[0]));
  t.is(args[1], value);

  t.is(result, args[0]);

  tryFn.restore();
  catchFn.restore();
});
