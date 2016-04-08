import test from 'ava';
import fn from './';

test('is function', t => {
	t.is(typeof fn, 'function');
});

test('should return \'1\'', t => {
	t.is(fn(1), '1');
});

test('should return \'12\'', t => {
	t.is(fn(12), '12');
});

test('should return \'123\'', t => {
	t.is(fn(123), '123');
});

test('should set default thousands separator', t => {
	const nbsp = String.fromCharCode(160);
	t.is(fn(1234567890), `1${nbsp}234${nbsp}567${nbsp}890`);
});

test('should set custom thousands separator', t => {
	t.is(fn(1234567890, '_'), '1_234_567_890');
});

test('should return empty string if fired without args', t => {
	t.is(fn(), '');
});

test('should not format `null`', t => {
	t.is(fn(null), '');
});
