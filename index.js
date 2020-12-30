/**
 * Non-Breaking Space `&nbsp;`
 * @const {string}
 */
const NBSP = String.fromCharCode(160);

/**
 * @typedef {Object} ParsedNumber
 * @prop {string} integer
 * @prop {string} fraction
 * @prop {string} sign
 */

/**
 * @param {number} number
 * @returns {ParsedNumber}
 */
function parseNumber(number) {
  const isNegative = number < 0;
  let numberString = String(number);

  if (isNegative) {
    numberString = numberString.slice(1);
  }

  const decimal = numberString.split('.');

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

  let result = number.substr(0, 3);
  result = result.replace(/#/g, '');

  let i;
  const {length} = number;
  for (i = 3; i < length; i += 3) {
    result = result + separator + number.substr(i, 3);
  }

  return result;
}

/**
 * @param {number} number
 * @param {Object|string} [options=" "]
 * @param {string} [options.separator=" "]
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
  let result = '';
  let separator = NBSP;
  let formatFourDigits = true;

  if (!number && number !== 0) {
    return result;
  }

  const numberObject = parseNumber(number);
  const numberString = String(number);

  if (typeof options === 'object') {
    if (options.separator) {
      ({separator} = options);
    }

    if (typeof options.formatFourDigits === 'boolean') {
      ({formatFourDigits} = options);
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
