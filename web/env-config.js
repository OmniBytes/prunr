const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.ASSET_PREFIX": prod ? "" : "",
  "process.env.GA": prod ? "UA-130842767-1" : ""
};
