"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  outputDir: "9fGuide",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "", // 页面 title，动态生成，这里可置空
    resolve: {
      alias: {
        "@": resolve("src"),
        images: "@/assets/images",
        components: "@/components",
        views: "@/views"
      }
    }
  }
};