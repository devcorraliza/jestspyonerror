module.exports = {
  coverageProvider: "v8",
  maxWorkers: "85%",
  testEnvironment: "jest-environment-jsdom",
  testRunner: "jest-circus/runner",
  roots: ["<rootDir>/lib"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        $schema: "http://json.schemastore.org/swcrc",
        jsc: {
          experimental: {
            plugins: [["jest_workaround", {}]],
          },
        },
        module: {
          type: "commonjs",
        },
      },
    ],
  },
  globals: {},
  transformIgnorePatterns: [],
};
