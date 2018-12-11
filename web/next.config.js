module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  },
  //assetPrefix: process.env.NODE_ENV === "production" ? "/prunr" : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://omnibytes.gitlab.io/prunr"
      : "",
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/prunr/static"
  }
};
