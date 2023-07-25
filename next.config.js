const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  swSrc: "/service-worker.js",
  runtimeCaching,
  disable: true,
  register: true,
  sw: "_offline.js",
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    // domains: ["musepos.com"],
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
