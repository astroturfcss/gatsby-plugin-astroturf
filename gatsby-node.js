// match with Gatsby's CSS Modules rule
const EXTENSION = '.module.css'


exports.onCreateWebpackConfig = (
  { actions },
  pluginOptions
) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          use: [
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
