/**
 * Non-Breaking Space `&nbsp;`
 * @const {string}
 */
var NBSP = String.fromCharCode(160);

/**
 * @typedef ParsedNumber
 * @prop {Object} options
 * @prop {string} options.integer
 * @prop {string} options.fraction
 * @prop {string} options.sign
 */

/**
 * @param {number} number
 * @returns {ParsedNumber}
 */
function parseNumber(number) {
	var isNegative = number < 0;
	var numberString = String(number);
	if (isNegative) {
		numberString = numberString.slice(1);
	}
	var decimal = numberString.split('.');
	return {
		integer: decimal[0],
		fraction: decimal[1] || '',
		sign: isNegative ? '-' : ''
	};
}

/**
 * @param {number} number
 * @param {string} separator
 * @returns {string}
 */
function format(number, separator) {
	number = String(number);

	while (number.length % 3) {
		number = '#' + number;
	}

	var result = number.substr(0, 3);
	result = result.replace(/#/g, '');
	var i;
	var length = number.length;
	for (i = 3; i < length; i += 3) {
		result = result + separator + number.substr(i, 3);
	}

	return result;
}

/**
 * @param {number} number
 * @param {Object|string} [options=' ']
 * @param {string} [options.separator=' ']
 * @param {boolean} [options.formatFourDigits=true]
 * @returns {string}
 *
 * @example
 * formatThousands(1000);
 * //=> '1 000'
 *
 * formatThousands(5000, {formatFourDigits: false});
 * //=> '5000'
 *
 * formatThousands(10000, {separator: "'"});
 * //=> "10'000"
 */
module.exports = function (number, options) {
	var result = '';
	var separator = NBSP;
	var formatFourDigits = true;

	if (!number && number !== 0) {
		return result;
	}

	var numberObject = parseNumber(number);
	var numberString = String(number);

	if (typeof options === 'object') {
		if (options.separator) {
			separator = options.separator;
		}

		if (typeof options.formatFourDigits === 'boolean') {
			formatFourDigits = options.formatFourDigits;
		}
	} else if (typeof options !== 'undefined') {
		separator = options;
	}

	if (
		numberObject.integer.length <= 3 ||
		(numberObject.integer.length === 4 && !formatFourDigits)
	) {
		result = numberString;
	} else {
		result += numberObject.sign;
		result += format(numberObject.integer, separator);
		if (numberObject.fraction) {
			result += '.';
			result += numberObject.fraction;
		}
	}

	return result;
};
