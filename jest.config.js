/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",

  testEnvironment: "jsdom",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "^@/i18n$": "<rootDir>/__mocks__/i18n.ts",

    "^react-i18next$": "<rootDir>/__mocks__/react-i18next.ts",

    "^@/(.*)$": "<rootDir>/src/$1",
  },

  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
  },

  transformIgnorePatterns: ["/node_modules/"],
};
