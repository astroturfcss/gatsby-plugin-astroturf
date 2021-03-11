// match with Gatsby's CSS Modules rule
const EXTENSION = '.module.css'


exports.onCreateWebpackConfig = (
  { actions, loaders },
  pluginOptions
) => {
  const jsLoader = loaders.js()
  if (!jsLoader) {
    return;
  }
  
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: 'astroturf/loader',
              options: Object.assign({ extension: EXTENSION }, pluginOptions),
            },
          ],
        },
        {
          test: /\.tsx?$/,
          use: [
            loaders.js(),
            {
              loader: 'astroturf/loader',
              options: Object.assign({ extension: EXTENSION }, pluginOptions),
            },
          ],
        },
      ],
    },
  })
}
