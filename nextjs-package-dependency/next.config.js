module.exports = {
  webpack: (config, { defaultLoaders }) => {
    const rule = {
      test: /ui-lib\/.*\.(js)x?$/,
      use: [defaultLoaders.babel],
    }
    config.module.rules.push(rule)
    return config
  },
}
