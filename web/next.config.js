const webpack = require("webpack");

const isProd = (process.env.NODE_ENV || "production") === "production";
const assetPrefix = isProd ? "" : "";

module.exports = {
  assetPrefix: assetPrefix,
  exportPathMap: () => ({
    "/": { page: "/" },
    "/demo/auth": { page: "/demo/auth" },
    "/demo/dashboard": { page: "/demo/dashboard" },
    "/demo/page": { page: "/demo/page" },
    "/blog": { page: "/blog" }
  }),
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix)
      })
    );

    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    return config;
  }
};
