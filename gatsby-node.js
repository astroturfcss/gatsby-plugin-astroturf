// match with Gatsby's CSS Modules rule
const EXTENSION = '.module.css'

const findJsRule = ({ config, rules }) =>
  config.module.rules.find(({ test }) => test.source === rules.js().test.source)

exports.onCreateWebpackConfig = (
  { actions, getConfig, rules },
  pluginOptions
) => {
  const config = getConfig()

  const jsRule = findJsRule({ config, rules })
  const astroturfJsLoader = {
    loader: 'astroturf/loader',
    options: Object.assign({}, pluginOptions, {
      extension: EXTENSION,
    }),
  }
  jsRule.use.push(astroturfJsLoader)

  actions.replaceWebpackConfig(config)
}
