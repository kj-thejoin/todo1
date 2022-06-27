// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


module.exports = {
  css: {sourceMap:true},
    {    
    loaderOptions: {
      scss: {
        prependData:
          @import "@/assets/style/_mixins.scss";
          @import "@/assets/style/_variables.scss";
      }
    }
  }
}