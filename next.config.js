// next.config.js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack(config, options) {
    const { dev, isServer } = options;
    // const extractCSSPlugin = new ExtractTextPlugin({
    //   filename: "static/style.css",
    //   disable: dev
    // });
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: cssLoaderConfig(extractCSSPlugin, {
    //     cssModules,
    //     dev,
    //     isServer
    //   })
    // });
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    });
    return config;
  },
  exportPathMap: function(defaultPathMap) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/resume": { page: "/resume" },
      "/portfolio": { page: "/portfolio" },
      "/contact": { page: "/contact" }
    };
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "./static/images/favicon/favicon.ico"
    }
  ]
});

// module.exports = withCSS({
// });
