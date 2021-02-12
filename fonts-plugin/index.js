module.exports = function (context, options) {
  return {
    name: "fonts-plugin",
    configureWebpack(config, isServer, utils) {
      return config;
    },
  };
};
