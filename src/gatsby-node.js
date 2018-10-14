// inspired by gatasby-plugin-postcss
// https://github.com/gatsbyjs/gatsby/blob/afd15c262b7c3fd3a39e962a29edefe1974a7380/packages/gatsby-plugin-postcss/src/gatsby-node.js

const EXTENSION = '.astroturf.css'

const findJsRule = ({ config, rules }) =>
  config.module.rules.find(({ test }) => test.source === rules.js().test.source)

const isCssRule = ({ test }) => test.source.endsWith('\\.css$')
const findCssRules = ({ config }) =>
  config.module.rules.find(
    ({ oneOf }) => Array.isArray(oneOf) && oneOf.every(isCssRule)
  )

export const onCreateWebpackConfig = (
  { actions, getConfig, rules, loaders },
  pluginOptions = {}
) => {
  const {
    // eslint-disable-next-line no-unused-vars
    postcssPlugins = [require('postcss-nested')],
    ...options
  } = pluginOptions

  const config = getConfig()

  const jsRule = findJsRule({ config, rules })
  const astroturfJsLoader = {
    loader: 'astroturf/loader',
    options: {
      ...options,
      extension: EXTENSION,
    },
  }
  jsRule.use.push(astroturfJsLoader)

  const cssRules = findCssRules({ config })
  const astroturfCssRule = rules.cssModules()
  astroturfCssRule.test = new RegExp(EXTENSION.replace(/\./g, '\\.') + '$')
  let postcssLoader = astroturfCssRule.use.find(({ loader }) =>
    /\bpostcss-loader\b/.test(loader)
  )
  if (postcssLoader == null) {
    postcssLoader = loaders.postcss()
    astroturfCssRule.use.push(postcssLoader)
    const cssLoader = astroturfCssRule.use.find(({ loader }) =>
      /\bcss-loader\b/.test(loader)
    )
    cssLoader.options.importLoaders = 1
  }
  postcssLoader.options.ident = 'postcss-astroturf'
  postcssLoader.options.plugins = postcssPlugins

  if (cssRules != null) {
    cssRules.oneOf.unshift(astroturfCssRule)
    actions.replaceWebpackConfig(config)
  } else {
    actions.setWebpackConfig({
      module: {
        rules: [astroturfCssRule],
      },
    })
  }
}
