module.exports = {
  devServer: { // proxy request to port 3000 during development
    proxy: 'http://localhost:3000'
  }
}