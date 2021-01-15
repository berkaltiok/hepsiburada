module.exports = {
  publicPath: process.env.BUILD === 'production'
    ? '/hepsiburada/'
    : '/'
}
