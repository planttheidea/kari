'use strict';

const Benchmark = require('benchmark');
const Table = require('cli-table2');
const ora = require('ora');

const _ = require('lodash/fp');
const k = require('../lib');
const R = require('ramda');

const showResults = (benchmarkResults) => {
  const table = new Table({
    head: [
      'Name',
      'Ops / sec',
      'Relative margin of error',
      'Sample size'
    ]
  });

  benchmarkResults.forEach((result) => {
    const name = result.target.name;
    const opsPerSecond = result.target.hz.toLocaleString('en-US', {maximumFractionDigits: 0});
    const relativeMarginOferror = `± ${result.target.stats.rme.toFixed(2)}%`;
    const sampleSize = result.target.stats.sample.length;

    table.push([
      name,
      opsPerSecond,
      relativeMarginOferror,
      sampleSize
    ]);
  });

  console.log(table.toString());
};

const sortDescResults = (benchmarkResults) => {
  return benchmarkResults.sort((a, b) => {
    return a.target.hz < b.target.hz ? 1 : -1;
  });
};

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

const runFilterArray = () => {
  const suite = new Benchmark.Suite('Filter array');

  const array = (new Array(100))
    .fill(1)
    .map((ignored, index) => {
      return ~~(Math.random() * index);
    });

  const fn = (value, index) => {
    return value % 6 === 0;
  };

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

runFilterArray();
