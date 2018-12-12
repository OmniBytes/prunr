const webpack = require("webpack");

const isProd = (process.env.NODE_ENV || "production") === "production";
const assetPrefix = isProd ? "/prunr" : "";

module.exports = {
  assetPrefix: assetPrefix,
  exportPathMap: () => ({
    "/": { page: "/" }
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

    return config;
  }
};
