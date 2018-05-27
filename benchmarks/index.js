'use strict';

const Benchmark = require('benchmark');
const Table = require('cli-table2');
const ora = require('ora');

const _ = require('lodash/fp');
const k = require('../lib');
const R = require('ramda');
const d = require('doozy');

const showResults = (benchmarkResults) => {
  const table = new Table({
    head: ['Name', 'Ops / sec', 'Relative margin of error', 'Sample size']
  });

  benchmarkResults.forEach((result) => {
    const name = result.target.name;
    const opsPerSecond = result.target.hz.toLocaleString('en-US', {maximumFractionDigits: 0});
    const relativeMarginOferror = `± ${result.target.stats.rme.toFixed(2)}%`;
    const sampleSize = result.target.stats.sample.length;

    table.push([name, opsPerSecond, relativeMarginOferror, sampleSize]);
  });

  console.log(table.toString());
};

const sortDescResults = (benchmarkResults) => benchmarkResults.sort((a, b) => (a.target.hz < b.target.hz ? 1 : -1));

const spinner = ora('Running benchmark');

let results = [];

const onCycle = (event) => {
  results.push(event);
  ora(event.target.name).succeed();
};

const onComplete = () => {
  spinner.stop();

  const orderedBenchmarkResults = sortDescResults(results);

  showResults(orderedBenchmarkResults);
};

const getArrayWithRandomValues = () => new Array(100).fill(1).map((ignored, index) => ~~(Math.random() * index));

const getObjectWithRandomValues = () =>
  getArrayWithRandomValues().reduce((object, value, index) => {
    object[`data-for-${index}`] = value;

    return object;
  }, {});

const runFilterArray = () => {
  const suite = new Benchmark.Suite('Filter array');

  const array = getArrayWithRandomValues();

  const fn = (value) => value % 6 === 0;

  return new Promise((resolve) => {
    suite
      .add('lodash', () => {
        _.filter(fn)(array);
      })
      .add('ramda', () => {
        R.filter(fn)(array);
      })
      .add('kari', () => {
        k.filter(fn)(array);
      })
      .add('doozy', () => {
        d.transduce(d.filter(fn))(array);
      })
      .on('start', () => {
        console.log('');
        console.log('Starting cycles for filtering an array...');

        results = [];

        spinner.start();
      })
      .on('cycle', onCycle)
      .on('complete', () => {
        onComplete();
        resolve();
      })
      .run({
        async: true
      });
  });
};

const runFilterObject = () => {
  const suite = new Benchmark.Suite('Filter objbect');

  const object = getObjectWithRandomValues();

  const fn = (value) => value % 6 === 0;

  return new Promise((resolve) => {
    suite
      .add('lodash', () => {
        _.filter(fn)(object);
      })
      .add('ramda', () => {
        R.filter(fn)(object);
      })
      .add('kari', () => {
        k.filter(fn)(object);
      })
      .add('doozy', () => {
        d.transduce(d.filter(fn))(object);
      })
      .on('start', () => {
        console.log('');
        console.log('Starting cycles for filtering an object...');

        results = [];

        spinner.start();
      })
      .on('cycle', onCycle)
      .on('complete', () => {
        onComplete();
        resolve();
      })
      .run({
        async: true
      });
  });
};

const runMapArray = () => {
  const suite = new Benchmark.Suite('Map array');

  const array = getArrayWithRandomValues();

  const fn = (value) => value * 2 + 10;

  return new Promise((resolve) => {
    suite
      .add('lodash', () => {
        _.map(fn)(array);
      })
      .add('ramda', () => {
        R.map(fn)(array);
      })
      .add('kari', () => {
        k.map(fn)(array);
      })
      .add('doozy', () => {
        d.transduce(d.map(fn))(array);
      })
      .on('start', () => {
        console.log('');
        console.log('Starting cycles for mapping an array...');

        results = [];

        spinner.start();
      })
      .on('cycle', onCycle)
      .on('complete', () => {
        onComplete();
        resolve();
      })
      .run({
        async: true
      });
  });
};

const runMapObject = () => {
  const suite = new Benchmark.Suite('Map object');

  const object = getObjectWithRandomValues();

  const fn = (value) => value * 2 + 10;

  return new Promise((resolve) => {
    suite
      .add('lodash (returns an array of values instead of a new object)', () => {
        _.map(fn)(object);
      })
      .add('ramda', () => {
        R.map(fn)(object);
      })
      .add('kari', () => {
        k.map(fn)(object);
      })
      .add('doozy', () => {
        d.transduce(d.map(fn))(object);
      })
      .on('start', () => {
        console.log('');
        console.log('Starting cycles for mapping an object...');

        results = [];

        spinner.start();
      })
      .on('cycle', onCycle)
      .on('complete', () => {
        onComplete();
        resolve();
      })
      .run({
        async: true
      });
  });
};

const runReduceArray = () => {
  const suite = new Benchmark.Suite('Reduce array');

  const array = getArrayWithRandomValues();

  const fn = (total, value) => total + value;

  const doozyOptions = {passHandler: fn};

  return new Promise((resolve) => {
    suite
      .add('lodash', () => {
        _.reduce(fn)(0)(array);
      })
      .add('ramda', () => {
        R.reduce(fn)(0)(array);
      })
      .add('kari', () => {
        k.reduce(fn)(0)(array);
      })
      .add('doozy', () => {
        d.transduce(d.map((value) => value))(array, 0, doozyOptions);
      })
      .on('start', () => {
        console.log('');
        console.log('Starting cycles for reducing an array...');

        results = [];

        spinner.start();
      })
      .on('cycle', onCycle)
      .on('complete', () => {
        onComplete();
        resolve();
      })
      .run({
        async: true
      });
  });
};

const runReduceObject = () => {
  const suite = new Benchmark.Suite('Reduce object');

  const object = getObjectWithRandomValues();

  const fn = (total, value) => total + value;

  const doozyOptions = {passHandler: fn};

  return new Promise((resolve) => {
    suite
      .add('lodash', () => {
        _.reduce(fn)(0)(object);
      })
      .add('ramda (not supported)', () => {
        R.reduce(fn)(0)(object);
      })
      .add('kari', () => {
        k.reduce(fn)(0)(object);
      })
      .add('doozy', () => {
        d.transduce(d.map((value) => value))(object, 0, doozyOptions);
      })
      .on('start', () => {
        console.log('');
        console.log('Starting cycles for reducing an object...');

        results = [];

        spinner.start();
      })
      .on('cycle', onCycle)
      .on('complete', () => {
        onComplete();
        resolve();
      })
      .run({
        async: true
      });
  });
};

runFilterArray()
  .then(runFilterObject)
  .then(runMapArray)
  .then(runMapObject)
  .then(runReduceArray)
  .then(runReduceObject);
