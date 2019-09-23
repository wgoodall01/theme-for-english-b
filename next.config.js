module.exports = {
  webpack: config => {
    // Enable js-yaml-loader to load the poem data at compile-time
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader"
    });
    return config;
  },

  ...(process.env.NODE_ENV === "production"
    ? {
        assetPrefix: "/theme-for-english-b/",
        experimental: {
          publicDirectory: true
        }
      }
    : {})
};
