<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterOddIntegersSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an iterator which generates an interleaved sequence of odd integers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-iter-sequences-odd-integers
```

</section>

<section class="usage">

## Usage

```javascript
var iterOddIntegersSeq = require( '@stdlib/math-iter-sequences-odd-integers' );
```

#### iterOddIntegersSeq( \[options] )

Returns an iterator which generates an interleaved sequence of odd integers.

```javascript
var it = iterOddIntegersSeq();
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns -1

v = it.next().value;
// returns 3

v = it.next().value;
// returns -3

v = it.next().value;
// returns 5

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `9007199254740992`.

By default, the function returns a finite iterator to avoid exceeding the maximum safe double-precision floating-point integer. To adjust the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterOddIntegersSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns -1

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterOddIntegersSeq = require( '@stdlib/math-iter-sequences-odd-integers' );

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterOddIntegersSeq( opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-odd-integers.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-odd-integers

[test-image]: https://github.com/stdlib-js/math-iter-sequences-odd-integers/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-iter-sequences-odd-integers/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-odd-integers/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-odd-integers?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-odd-integers
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-odd-integers/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-odd-integers/main/LICENSE

</section>

<!-- /.links -->
