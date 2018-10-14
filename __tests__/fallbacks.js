import { onCreateWebpackConfig } from '../src/gatsby-node'
import getConfigWithoutPostcssLoader from '../__mocks__/webpack-config-without-postcss-loader'
import getConfigWithoutCssRules from '../__mocks__/webpack-config-without-css-rules'
import rules from '../__mocks__/rules'
import loaders from '../__mocks__/loaders'

test("when CSS Modules rule doesn't include postcss-loader", () => {
  const actions = { replaceWebpackConfig: jest.fn() }
  onCreateWebpackConfig({
    actions,
    getConfig: getConfigWithoutPostcssLoader,
    rules: {
      ...rules,
      css: rules.cssWithoutPostcss,
      cssModules: rules.cssModulesWithoutPostcss,
    },
    loaders,
  })
  expect(actions.replaceWebpackConfig).toMatchSnapshot()
})

test('when there are no CSS rules in the configuration', () => {
  const actions = { setWebpackConfig: jest.fn() }
  onCreateWebpackConfig({
    actions,
    getConfig: getConfigWithoutCssRules,
    rules,
    loaders,
  })
  expect(actions.setWebpackConfig).toMatchSnapshot()
})
