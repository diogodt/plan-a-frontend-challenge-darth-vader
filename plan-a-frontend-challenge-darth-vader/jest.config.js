module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect",
      "<rootDir>/src/setupTests.js"
    ],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "/src/index.js",
      "/src/serviceWorker.js"
    ]
  };
  