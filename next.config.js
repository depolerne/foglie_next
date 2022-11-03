// module.exports = {
//   webpack: (config) => {
// config.node = {
//   fs: "empty",
// };
//     return config;
//   },
// };

module.exports = {
  webpack: (config, options) => {
    config.node = {
      fs: "empty",
    };
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "file-loader",
        },
      ],
    });

    return config;
  },
};
