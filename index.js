// &nbsp; (Non-Breaking Space)
var NBSP = String.fromCharCode(160);

/**
 * @param {Number} number
 * @param {Object|String} [options=' ']
 * @param {String} [options.separator=' ']
 * @param {Boolean} [options.formatFourDigits=true]
 * @returns {String}
 */
module.exports = function (number, options) {
	var result = '';
	var separator = NBSP;
	var formatFourDigits = true;

	if (!number && number !== 0) {
		return result;
	}

	number = String(number);

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
		number.length <= 3 ||
		(number.length === 4 && !formatFourDigits)
	) {
		result = number;
	} else {
		while (number.length % 3) {
			number = '#' + number;
		}

		result = number.substr(0, 3);
		result = result.replace(/#/g, '');
		var i;
		var length = number.length;
		for (i = 3; i < length; i += 3) {
			result = result + separator + number.substr(i, 3);
		}
	}

	return result;
};
