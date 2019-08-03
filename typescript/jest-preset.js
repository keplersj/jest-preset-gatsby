const base = require("../jest-preset");

module.exports = {
  ...base,
  transform: {
    "^.+\\.tsx?$": `${__dirname}/preprocess.js`,
    "^.+\\.jsx?$": `${__dirname}/../preprocess.js`
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
