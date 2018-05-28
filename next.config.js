// next.config.js
module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      "/": { page: "/" },
      "/home": { page: "/" },
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
};
// next.config.js
const withCSS = require("@zeit/next-css");
module.exports = withCSS({});
