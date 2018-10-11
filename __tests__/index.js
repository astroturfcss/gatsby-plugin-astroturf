import { onCreateWebpackConfig } from '../src/gatsby-node'
import getConfig from '../__mocks__/webpack-config'
import rules from '../__mocks__/rules'
import loaders from '../__mocks__/loaders'

const postcssPluginsSerializer = {
  test: val => typeof val === 'function' && val.name === 'postcssPlugins',
  print: val => val.toString(),
}

expect.addSnapshotSerializer(postcssPluginsSerializer)

it('adds astroturf/loader and rule for generated CSS Modules', () => {
  const actions = { replaceWebpackConfig: jest.fn() }
  onCreateWebpackConfig({ actions, getConfig, rules, loaders })
  expect(actions.replaceWebpackConfig).toMatchSnapshot()
})

it('passes PostCSS plugins to the CSS rule', () => {
  const actions = { replaceWebpackConfig: jest.fn() }
  onCreateWebpackConfig(
    { actions, getConfig, rules, loaders },
    {
      postcssPlugins: () => [
        require('postcss-import'),
        require('postcss-nested'),
        require('autoprefixer'),
      ],
    }
  )
  expect(actions.replaceWebpackConfig).toMatchSnapshot()
})

it('passes other options to astroturf/loader', () => {
  const actions = { replaceWebpackConfig: jest.fn() }
  onCreateWebpackConfig(
    { actions, getConfig, rules, loaders },
    { tagName: 'css', styledTag: 'styled' }
  )
  expect(actions.replaceWebpackConfig).toMatchSnapshot()
})

it("can't override CSS extension", () => {
  const actions = { replaceWebpackConfig: jest.fn() }
  onCreateWebpackConfig(
    { actions, getConfig, rules, loaders },
    { extension: '.wont.work.css' }
  )
  onCreateWebpackConfig({ actions, getConfig, rules, loaders })
  const [
    [firstConfig],
    [secondConfig],
  ] = actions.replaceWebpackConfig.mock.calls
  expect(firstConfig).toEqual(secondConfig)
})
