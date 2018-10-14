const { onCreateWebpackConfig } = require('../gatsby-node')
const getConfig = require('../__mocks__/get-config')
const rules = require('../__mocks__/rules')

it('appends astroturf/loader to the JS rule', () => {
  const actions = { replaceWebpackConfig: jest.fn() }
  onCreateWebpackConfig({ actions, getConfig, rules })
  expect(actions.replaceWebpackConfig).toMatchSnapshot()
})

it('passes options to astroturf/loader', () => {
  const actions = { replaceWebpackConfig: jest.fn() }
  onCreateWebpackConfig(
    { actions, getConfig, rules },
    { tagName: 'css', styledTag: 'styled' }
  )
  expect(actions.replaceWebpackConfig).toMatchSnapshot()
})

it("can't override CSS extension", () => {
  const actions = { replaceWebpackConfig: jest.fn() }
  onCreateWebpackConfig(
    { actions, getConfig, rules },
    { extension: '.wont.work.css' }
  )
  onCreateWebpackConfig({ actions, getConfig, rules })
  const [
    [firstConfig],
    [secondConfig],
  ] = actions.replaceWebpackConfig.mock.calls
  expect(firstConfig).toEqual(secondConfig)
})
