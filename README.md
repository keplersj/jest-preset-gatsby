# jest-preset-gatsby

[![Build Status](https://travis-ci.org/keplersj/jest-preset-gatsby.svg?branch=master)](https://travis-ci.org/keplersj/jest-preset-gatsby)
[![npm version](https://badge.fury.io/js/jest-preset-gatsby.svg)](https://badge.fury.io/js/jest-preset-gatsby)

Preset for testing Gatsby sites using Jest, based off [the official documentation on testing Gatsby with Jest](https://www.gatsbyjs.org/docs/unit-testing/). Compatible with both JavaScript and TypeScript codebases.

_Warning: Does Not Include `gatsby` module mocks._

## Installation

Install preset using npm:

```shell
npm install --save-dev jest-preset-gatsby
```

or yarn:

```shell
yarn add --dev jest-preset-gatsby
```

## Usage

Configure Jest to use the preset in `jest.config.js`:

```js
module.exports = {
  preset: "jest-preset-gatsby"
};
```

or `package.json`:

```json
{
  "jest": {
    "preset": "jest-preset-gatsby"
  }
}
```

### Using in a TypeScript Project

This preset also includes a preset for TypeScript projects; configure Jest to use it in `jest.config.js`:

```js
module.exports = {
  preset: "jest-preset-gatsby/typescript"
};
```

or `package.json`:

```json
{
  "jest": {
    "preset": "jest-preset-gatsby/typescript"
  }
}
```

### Mocking Gatsby Module

This package does not include mocks for the `gatsby` module. In order to sufficiently test your project your should probably mock the `gatsby` module, add the following at `__mocks__/gatsby.js` if you're in need of one:

```js
const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
};
```

## Related Packages

- [`jest-runner-prettier`](https://github.com/keplersj/jest-runner-prettier) - Use Jest to check your codebase against `prettier`
- [`jest-runner-stylelint`](https://github.com/keplersj/jest-runner-stylelint) - Use Jest to check your styles with `stylelint`
- [`jest-runner-eslint`](https://github.com/jest-community/jest-runner-eslint) - Use Jest to check your code with `eslint`
- [`jest-raw-loader`](https://github.com/keplersj/jest-raw-loader) - Load the raw content of files in Jest, replicating the behavior of `webpack`'s `raw-loader`

## License

Copyright 2019 Kepler Sticka-Jones. Licensed MIT
