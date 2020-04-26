module.exports = {
  transform: {
    "^.+\\.jsx?$": `${__dirname}/preprocess.js`,
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-raw-loader",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  setupFiles: [`${__dirname}/loadershim.js`],
};
