module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  globals: {
    'ts-jest': {
      tsConfig: 'test/tsconfig.json',
      diagnostics: false,
    },
  },
  moduleDirectories: ['node_modules', 'src', './'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/test/__setup__/setupFiles.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/__setup__/setupTests.ts'],
  testRegex: '/test/.*?\\.(test|spec)\\.(j|t)sx?$',
  testURL: 'http://localhost:3000',
  verbose: false,
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
