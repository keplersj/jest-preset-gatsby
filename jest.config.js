module.exports = {
  projects: [
    {
      displayName: "test"
    },
    {
      preset: "jest-runner-prettier",
      displayName: "lint:prettier"
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      moduleFileExtensions: ["js"],
      testMatch: ["**/*.js"]
    }
  ]
};
