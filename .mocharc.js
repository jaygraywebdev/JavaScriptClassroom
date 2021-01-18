function getCurrentTestDir() {
  if (process.env.TEST_ENV === 'nicole') {
    console.log("DINGINDINDGINDGINDGING");
    return ['./students/nicole/**/*.js']
  }
}

const watchFiles = getCurrentTestDir();

module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  'watch-ignore': ['node_modules'],
}