# format-thousands

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Format thousands with custom separator: 1 000 000

Demo: [vovanr.github.io/format-thousands][demo]

## Install

```
npm install --save format-thousands
```

## Usage

```js
var formatThousands = require('format-thousands');

formatThousands(1000);
//=> '1 000'

formatThousands(5000, {formatFourDigits: false});
//=> '5000'

formatThousands(1000000, '`');
//=> '1`000`000'

formatThousands(10000, {separator: "'"});
//=> "10'000"

formatThousands(-100000);
//=> "-100 000"

formatThousands(10000.0001)
//=> "10 000.0001"

formatThousands();
//=> ''
```

## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)

[demo]: http://vovanr.github.io/format-thousands

[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square

[npm-url]: https://npmjs.org/package/format-thousands
[npm-image]: http://img.shields.io/npm/v/format-thousands.svg?style=flat-square

[travis-url]: https://travis-ci.org/VovanR/format-thousands
[travis-image]: http://img.shields.io/travis/VovanR/format-thousands.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/VovanR/format-thousands
[coveralls-image]: http://img.shields.io/coveralls/VovanR/format-thousands.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/format-thousands
[depstat-image]: https://david-dm.org/VovanR/format-thousands.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/format-thousands
[depstat-dev-image]: https://david-dm.org/VovanR/format-thousands/dev-status.svg?style=flat-square
