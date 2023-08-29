/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  // testEnvironment: 'jsdom',
  testEnvironment: 'jest-environment-jsdom',
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};