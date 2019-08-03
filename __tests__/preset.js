const path = require("path");

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (val, serialize) => {
    return serialize(path.relative(__filename, val));
  },
  test: val => typeof val === "string" && path.isAbsolute(val)
});

describe("Jest Preset for Gatsby Projects", () => {
  it("matches expectations", () => {
    const config = require("../jest-preset");
    expect(config).toMatchSnapshot();
  });
});
