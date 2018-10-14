module.exports = {
  js: () => ({
    test: /\.jsx?/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  }),
}
