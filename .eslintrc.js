module.exports = {
  parserOptions: {
    ecmaVersion: 9 // Project uses object spread, introduced in ECMAScript 2018 (9)
  },
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:jest/recommended"
  ]
};
