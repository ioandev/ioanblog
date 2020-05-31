
  /*
  files: [
    'components/*.js'
  ],

  tests: [
    //'/*spec.js',
    'components/*.test.js'
  ],
  */

module.exports = () => ({
  autoDetect: true,

  reportConsoleErrorAsError: true,
  lowCoverageThreshold: 99,
  runAllTestsInAffectedTestFile: true
})
