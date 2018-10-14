const rules = require('./rules')

module.exports = () => ({
  module: {
    rules: [rules.js()],
  },
})
