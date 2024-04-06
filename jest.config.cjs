module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  esmInterop: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}