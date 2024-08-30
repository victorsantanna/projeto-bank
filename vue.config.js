const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000, // Substitua 3000 pela porta desejada
  },
});
