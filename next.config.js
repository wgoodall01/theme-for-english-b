module.exports = {
  webpack: config => {
    // Enable js-yaml-loader to load the poem data at compile-time
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader"
    });
    return config;
  },

  assetPrefix: "/theme-for-english-b/"
};
