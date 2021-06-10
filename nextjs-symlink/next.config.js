module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.symlinks = false
    // Important: return the modified config
    return config
  },
}
