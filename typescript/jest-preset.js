const base = require("../jest-preset");

module.exports = {
  ...base,
  transform: {
    ...base.transform,
    "^.+\\.tsx?$": `${__dirname}/preprocess.js`,
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleFileExtensions: ["ts", "tsx", ...base.moduleFileExtensions],
};
