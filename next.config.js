const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
  register: true,
  sw: "_offline.js",
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
    unoptimized: true,
  },
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
});
