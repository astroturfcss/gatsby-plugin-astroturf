# astroturf plugin for Gatsby

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
    // defaults:
    options: {
      tagName: 'css',
      styledTag: 'styled',
      extension: '.module.css',
    },
  },
]
```

## PostCSS plugins

For astroturf to work properly you need to add nesting support. For that you can use [postcss-nested][] or another plugin which contains this feature, like [precss][]. You can install these plugins and [many more][PostCSS plugins] using [gatsby-plugin-postcss][]:

```
yarn add gatsby-plugin-postcss
```
```js
plugins: [
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

## Sass, Less etc.

If you'd like to use Sass, Less or some other preprocessor instead of (or in addition to) PostCSS, make sure that you adjust the `extension` option and install the appropriate Gatsby plugin. For example, this is all you need to add support for Sass:

```
yarn add gatsby-plugin-sass
```
```js
plugins: [
  'gatsby-plugin-sass',
  {
    resolve: 'gatsby-plugin-astroturf',
    options: {
      extension: '.module.scss',
    },
  },
]
```

Just make sure that your Gatsby plugin supports CSS Modules. Also, note that Sass already has support for nesting, so you don't need postcss-nested.

Happy styling! :art:

[astroturf]: https://github.com/4Catalyzer/astroturf
[options]: https://github.com/4Catalyzer/astroturf#options
[PostCSS plugins]: https://www.postcss.parts/
[postcss-nested]: https://github.com/postcss/postcss-nested
[precss]: https://jonathantneal.github.io/precss/
[gatsby-plugin-postcss]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-postcss
[precss]: https://github.com/jonathantneal/precss
