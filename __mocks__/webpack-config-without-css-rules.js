import rules from './rules'

export default () => ({
  module: {
    rules: [rules.js()],
  },
})
