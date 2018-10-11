# Linaria plugin for astroturf

This plugin modifies Gatsby's webpack configuration to support [astroturf][].

Install the plugin and astroturf:

```sh
yarn add gatsby-plugin-astroturf astroturf
```

Add it to your plugins in `gatsby-config.js`:

```js
plugins: [
  'gatsby-plugin-astroturf',
]
```

You can also pass [options][] to astroturf's webpack loader:

```js
plugins: [
  {
    resolve: 'gatsby-plugin-astroturf',
    options: {
      tagName: 'css',
      styledTag: 'styled',
    },
  },
]
```

Setting `extension` currently isn't possible because you might pick one which clashes with an existing webpack rule.

## PostCSS plugins

By default, CSS generated from astroturf is processed with [postcss-nested][]. You can add more [PostCSS plugins][] via `postcssPlugins`:

```js
plugins: [
  {
    resolve: 'gatsby-plugin-astroturf',
    options: {
      postcssPlugins: [
        require('postcss-nested'),
        require('postcss-custom-media'),
        require('autoprefixer')({ grid: true }),
      ],
    },
  },
]
```

When overriding defaults, don't forget to include postcss-nested or another plugin that adds support for nesting, e.g. [precss][].

Happy styling! :art:

[astroturf]: https://github.com/4Catalyzer/astroturf
[options]: https://github.com/4Catalyzer/astroturf#options
[PostCSS plugins]: https://www.postcss.parts/
[postcss-nested]: https://github.com/postcss/postcss-nested
[precss]: https://github.com/jonathantneal/precss
