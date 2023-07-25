const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  runtimeCaching,
  dest: "public",
  register: true,
  // precache: {
  //   enable: true,
  //   globPatterns: [
  //     "_offline.js", // Example: an offline fallback page
  //     "/src/assets/images/*.png", // Example: PNG images in the "images" folder
  //     "/src/assets/styles/*.css", // Example: CSS files in the "styles" folder
  //     // "scripts/*.js", // Example: JS files in the "scripts" folder
  //     // Add other file paths as needed
  //   ],
  // },
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
