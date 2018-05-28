// next.config.js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
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
