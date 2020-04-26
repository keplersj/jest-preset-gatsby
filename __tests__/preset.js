const path = require("path");

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (value, serialize) => {
    return serialize(path.relative(__filename, value));
  },
  test: (value) => typeof value === "string" && path.isAbsolute(value),
});

describe("Jest Preset for Gatsby Projects", () => {
  it("matches expectations", () => {
    const config = require("../jest-preset");
    expect(config).toMatchSnapshot();
  });
});
