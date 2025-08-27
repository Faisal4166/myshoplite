module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?/.*|react-redux/.*)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@env$": "<rootDir>/__mocks__/envMock.js",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@navigation/(.*)$": "<rootDir>/src/navigation/$1",
    "^@screens/(.*)$": "<rootDir>/src/screens/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^services$": "<rootDir>/src/services/index.ts",
  },
};
