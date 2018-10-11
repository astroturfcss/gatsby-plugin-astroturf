import loaders from './loaders'

export default {
  js: () => ({
    test: /\.jsx?/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  }),
  css: () => ({
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: {},
      },
      {
        loader: 'css-loader',
        options: {},
      },
      loaders.postcss(),
    ],
  }),
  cssWithoutPostcss: () => ({
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: {},
      },
      {
        loader: 'css-loader',
        options: {},
      },
    ],
  }),
  cssModules: () => ({
    test: /\.module\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: {},
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      loaders.postcss(),
    ],
  }),
  cssModulesWithoutPostcss: () => ({
    test: /\.module\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: {},
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  }),
}
