var webpack = require("webpack");

  plugins: [   new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })]
