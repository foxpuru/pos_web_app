const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  runtimeCaching,
  dest: "public",
  register: true,
  disable: process.env.NEXT_PUBLIC_ENVIRONMENT === "DEVELOPMENT",
  skipWaiting: true,
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
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        // dgram: false,
        fs: false,
        // net: false,
        // tls: false,
        // child_process: false,
      };
    }
    return config;
  },
});
// future: {
//   webpack5: true,
// },
// webpack: function (config, options) {
//   config.resolve.fallback = {
//     ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
//     // by next.js will be dropped. Doesn't make much sense, but how it is
//     fs: false, // the solution
//     child_process: false,
//     worker_threads: false,
//   };
//   config.experiments = {};
//   return config;
// },
// module.exports = {
//   webpack: config => {
//     config.node = {
//       fs: 'empty',
//       child_process: 'empty',
//       net: 'empty',
//       dns: 'empty',
//       tls: 'empty',
//     };
//     return config;
//   },
// };
