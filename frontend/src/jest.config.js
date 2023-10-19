module.exports = {
    testEnvironment: "jsdom",
    testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(test).js"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleNameMapper: {
      "\\.(svg)$": "<rootDir>/path/to/empty-module.js", // Ruta al módulo vacío
    },
  };
  