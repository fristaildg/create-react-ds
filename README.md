# Create React DS
> CLI for bootstrapping your own awesome React design system / components library!

[![NPM](https://img.shields.io/npm/v/create-react-ds)](https://www.npmjs.com/package/create-react-ds)

## Features

- Supports Typescript by default
- Bundles `commonjs` and `es` formats
- [Rollup](https://rollupjs.org/) and [Esbuild](https://esbuild.github.io/) for bundling
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing
- [Styled Components](https://styled-components.com/) and [Styled System](https://styled-system.com/) for styling
- Easy Theming functionality
- [Ladle](https://ladle.dev/) for local development / component stories
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for code linting and formatting

## Usage
This package requires node `>=18.12.1`

```bash
npx create-react-ds my-design-system-name
```

## Development

```bash
npm run dev
```

This will start ladle in http:localhost:61000

## Bundle your library for publishing

```bash
npm run build
```

## Test you bundle locally before publishing

```bash
npm pack
```

This will create a .tar file (with the exact same content that would be published to npm) which you can `npm install` in any react / next / remix application of yours.
You will be able to consume the library from that application as if it was coming from a published package.

## Publish your library to npm

```bash
npm publish
```

Just make sure the name of your library is available in npm

## Update your published library

```bash
npm version major / minor / patch
npm publish
```

This will bump your library's version according to the semver standards

## Using your newly created components library

Once your library is published or packed, you can install it into your react application and start using it!

### Install the component library and its peer dependencies
```bash
npm install path-to-your-library styled-components styled-system
```

If your app uses typescript, you will also need to install `@types/styled-system` as a dev dependency.

### Import `ThemeProvider` in the root of your app

It will typically be in the `App` component, or in the `_app.tsx` file if it's a next app.
Wrap your main component in `ThemeProvider` so that you can leverage the theming functionality across your library's components in your app.

```jsx
import { ThemeProvider } from 'your-library';
...

return (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

Made with Love!! ❤️
