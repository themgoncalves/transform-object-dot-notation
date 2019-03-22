# transform-object-dot-notation
> Transform object string dot notation into object reference

[![NPM][npm-image]][npm-url]
[![CircleCI][circle-ci-image]][circle-ci-url]
[![GitHub All Releases][releases-image]][releases-url]
[![GitHub stars][stars-image]][stars-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![GitHub issues][issues-image]][issues-url]
[![Awesome][awesome-image]][awesome-url]


## Example

### Accessing deeply nested properties

```js
const obj = {
  foo: {
    bar: {
      baz: {
        val: 'hello world',
      },
    },
  },
};

const val = obj['foo.bar.baz.val']  // hello world
```

### Calling deeply nested functions

```js
const obj = {
  foo: {
    bar: {
      baz: class {
      },
    },
  },
};

const baz = new obj['foo.bar.baz'] // baz instance
```

### Constructing deeply nested classes

```js
const obj = {
  foo: {
    bar: {
      baz: function() {
        return 'hello world'
      },
    },
  },
};

const baz = obj['foo.bar.baz'] () // hello world
```
## Installation

```sh
npm install --save-dev @themgoncalves/transform-object-dot-notation
```

**Note**: `transform-object-dot-notation` **should be ** listed in the `devDependencies`.

<br />

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```javascript
{
 "plugins": ["@themgoncalves/transform-object-dot-notation"]
}
```

<br />

### Via CLI

```bash
$ babel --plugins @themgoncalves/transform-object-dot-notation script.js
```

### Via Node API

```bash
require("@babel/core").transform("code", {
  plugins: ["@themgoncalves/transform-object-dot-notation"]
});
```


## Plugin Options

#### `optionalChaining`

Type: `boolean`
Default: `false`

When `true`, this transform will output the object  _dot notation_ reference
as [Optional Chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining).

In that case, `transform-object-dot-notation` **should be placed before** `@babel/plugin-proposal-optional-chaining`

**Example**

In

```js
obj['foo.bar.baz']
```

Out (`optionalChaining === true`)

```js
obj.foo?.bar?.baz
```

Out (`optionalChaining === false`)

```js
obj.foo.bar.baz
```

## Release History
* 0.1.1
    * First release
    * NEW: `optionalChaining` option
* 0.0.1
    * Work in progress

<br />

## Meta

### Author
**Marcos Gonçalves** – [LinkedIn](http://linkedin.com/in/themgoncalves/) – [Website](http://www.themgoncalves.com)

### License
Distributed under the MIT license. [Click here](/LICENSE) for more information.

[https://github.com/themgoncalves/transform-object-dot-notation](https://github.com/themgoncalves/transform-object-dot-notation)

## Contributing

1. Fork it (<https://github.com/themgoncalves/transform-object-dot-notation/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m ':zap: Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[circle-ci-url]: https://circleci.com/gh/themgoncalves/transform-object-dot-notation
[circle-ci-image]: https://circleci.com/gh/themgoncalves/transform-object-dot-notation.svg?style=svg
[vulnerabilities-image]: https://snyk.io/test/github/themgoncalves/transform-object-dot-notation/badge.svg
[vulnerabilities-url]: https://snyk.io/test/github/themgoncalves/transform-object-dot-notation
[issues-image]: https://img.shields.io/github/issues/themgoncalves/transform-object-dot-notation.svg
[issues-url]: https://github.com/themgoncalves/transform-object-dot-notation/issues
[stars-image]: https://img.shields.io/github/stars/themgoncalves/transform-object-dot-notation.svg
[stars-url]: https://github.com/themgoncalves/transform-object-dot-notation/stargazers
[forks-image]: https://img.shields.io/github/forks/themgoncalves/transform-object-dot-notation.svg
[forks-url]: https://github.com/themgoncalves/transform-object-dot-notation/network
[awesome-image]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
[releases-image]: https://img.shields.io/github/downloads/atom/atom/total.svg
[releases-url]: https://github.com/themgoncalves/transform-object-dot-notation
[awesome-url]: https://github.com/themgoncalves/transform-object-dot-notation
[npm-image]: https://img.shields.io/npm/v/transform-object-dot-notation.svg
[npm-url]: https://www.npmjs.com/package/transform-object-dot-notation
