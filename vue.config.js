const path = require('path')
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:3000'
  },
  chainWebpack: config => {
    config.resolve.alias.set(
      'vue$',
      path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
    )
  }
}
