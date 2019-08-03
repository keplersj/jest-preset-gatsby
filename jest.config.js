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
    }
  ]
};
