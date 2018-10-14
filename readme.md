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

Changing `extension` isn't possible, gatsby-plugin-astroturf hardcodes it to `.module.css` in order to match Gatsby's CSS Modules webpack rule.

## PostCSS plugins

For astroturf to work properly you need to add nesting support. For that you can use [postcss-nested][] or another plugin which contains this feature, like [precss][]. You can install these plugins an [many more][PostCSS plugins] using [gatsby-plugin-postcss][]:

```
yarn add gatsby-plugin-postcss
```
```js
plugins: [
  // the order of these plugins isn't important
  'gatsby-plugin-postcss',
  'gatsby-plugin-astroturf',
]
```

You can specify PostCSS plugins through gatsby-plugin-postcss's `postCssPlugins` option, or by creating a `postcss.config.js` file:

```
yarn add postcss-nested
```
```js
// postcss.config.js
module.exports =  {
  plugins: {
    'postcss-nested': {},
  }
}
```

Happy styling! :art:

[astroturf]: https://github.com/4Catalyzer/astroturf
[options]: https://github.com/4Catalyzer/astroturf#options
[PostCSS plugins]: https://www.postcss.parts/
[postcss-nested]: https://github.com/postcss/postcss-nested
[precss]: https://jonathantneal.github.io/precss/
[gatsby-plugin-postcss]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-postcss
[precss]: https://github.com/jonathantneal/precss
