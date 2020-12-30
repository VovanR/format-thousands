const test = require('ava');
const fn = require('.');

const NBSP = String.fromCharCode(160);

test('is function', t => {
  t.is(typeof fn, 'function');
});

test('should return `1`', t => {
  t.is(fn(1), '1');
});

test('should return `0`', t => {
  t.is(fn(0), '0');
});

test('should return `12`', t => {
  t.is(fn(12), '12');
});

test('should return `123`', t => {
  t.is(fn(123), '123');
});

test('should return `1 000`', t => {
  t.is(fn(1000), `1${NBSP}000`);
});

test('should return `10 000`', t => {
  t.is(fn(10000), `10${NBSP}000`);
});

test('should set default thousands separator', t => {
  t.is(fn(1234567890), `1${NBSP}234${NBSP}567${NBSP}890`);
});

test('should set custom thousands separator', t => {
  t.is(fn(1234567890, '_'), '1_234_567_890');
  t.is(fn(1234567890, {separator: '_'}), '1_234_567_890');
});

test('should not set separator if length < 5', t => {
  const options = {formatFourDigits: false};
  t.is(fn(1000, options), '1000');
  t.is(fn(10000, options), `10${NBSP}000`);
});

test('should set separator if length < 5', t => {
  const options = {formatFourDigits: true};
  t.is(fn(1000, options), `1${NBSP}000`);
  t.is(fn(10000, options), `10${NBSP}000`);
});

test('should return empty string if fired without args', t => {
  t.is(fn(), '');
});

test('should not format `null` and `undefined`', t => {
  t.is(fn(null), '');
  t.is(fn(undefined), '');
});

test('should not format frac', t => {
  t.is(fn(10000.0001, ' '), '10 000.0001');
  t.is(fn(-1000000000.545, ' '), '-1 000 000 000.545');
  t.is(fn(123456.1234567, ' '), '123 456.1234567');
});

test('should not format sign', t => {
  t.is(fn(-100000, ' '), '-100 000');
  t.is(fn(-100000000.545, ' '), '-100 000 000.545');
});
