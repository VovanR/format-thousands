module.exports = function formatThousands(number, separator) {
	var result = '';
	if (number === undefined) {
		return result;
	}

	number = String(number);
	if (separator === undefined) {
		// &nbsp; (Non-Breaking Space)
		separator = String.fromCharCode(160);
	}

	if (number.length > 3) {
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
	} else {
		result = number;
	}

	return result;
};
