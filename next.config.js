// next.config.js
module.exports = {
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
  ],
  assetPrefix: true
    ? "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    : ""
};
// next.config.js
const withCSS = require("@zeit/next-css");
module.exports = withCSS({});
