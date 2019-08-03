module.exports = {
  projects: [
    {
      displayName: "test"
    },
    {
      runner: "prettier",
      displayName: "lint:prettier",
      moduleFileExtensions: ["js", "json", "md"],
      testMatch: ["**/*.js", "**/*.json", "**/*.md"]
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      moduleFileExtensions: ["js"],
      testMatch: ["**/*.js"]
    }
  ]
};
