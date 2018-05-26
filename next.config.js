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
      rel: 'icon',
      type: 'image/x-icon',
      href: './static/images/favicon/favicon.ico',
    },
  ],
};
