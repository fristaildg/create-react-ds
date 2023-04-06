# Create React DS

> CLI for bootstrapping your own awesome React design system / components library!

[![NPM](https://img.shields.io/npm/v/create-react-ds)](https://www.npmjs.com/package/create-react-ds)

Create React DS provides a simple command line interface for generating a new project with a set of predefined components and styles. This tool helps to automate the process of creating a design system, which can save a lot of time and effort for developers. The tool also provides a set of options that can be configured to customize the design system to suit the specific needs of the project or organization.

## Features

- Supports Typescript by default
- Bundles `commonjs` and `es` formats
- [Rollup](https://rollupjs.org/) and [Esbuild](https://esbuild.github.io/) for bundling
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing
- [Styled Components](https://styled-components.com/) for styling
- Easy Theming functionality
- [Storybook](https://storybook.js.org/) for local development / component stories
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for code linting and formatting

## Table of contents

- [Usage](#usage)
- [Standalone mode](#standalone-mode)
- [Development](#development)
- [Bundle your library for publishing](#bundle-your-library-for-publishing)
- [Test you bundle locally before publishing](#test-you-bundle-locally-before-publishing)
- [Publish your library to npm](#publish-your-library-to-npm)
- [Update your published library](#update-your-published-library)
- [Using your newly created components library](#using-your-newly-created-components-library)
  - [Install the component library and its peer dependencies](#install-the-component-library-and-its-peer-dependencies)
  - [Import ThemeProvider in the root of your app](#import-themeprovider-in-the-root-of-your-app)
- [Local mode](#local-mode)


## Usage

This package requires node `>=18.12.1`

- [Standalone mode](#standalone-mode) - Bootstrap a new library to be developed and maintained as a project of it's own
- Local mode - Inject the components library files and dependencies into an already existing react project

## Standalone mode
This is de default (and recommended) way of using this library. It will bootstrap a new library to be developed and maintained as a project of it's own

```bash
npx create-react-ds my-design-system-name
```

### Development

```bash
npm run storybook
```

This will start storybook in localhost

### Bundle your library for publishing

```bash
npm run build
```

### Test you bundle locally before publishing

```bash
npm pack
```

This will create a .tar file (with the exact same content that would be published to npm) which you can `npm install` in any react / next / remix application of yours.
You will be able to consume the library from that application as if it was coming from a published package.

### Publish your library to npm

```bash
npm publish
```

Just make sure the name of your library is available in npm

### Update your published library

```bash
npm version major / minor / patch
npm publish
```

This will bump your library's version according to the semver standards

### Using your newly created components library

Once your library is published or packed, you can install it into your react application and start using it!

### Install the component library and its peer dependencies
```bash
npm install path-to-your-library styled-components themed-props
```

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

## Local mode
If you prefer to just develop your component library within your app instead of maintaining a separate project for it, then you can use this mode. It will inject the components files and dependencies into an already existing react project.

This mode assumes a typical frontend react / next.js app folder structure, so run the following command in the root of your app:

```bash
npx create-react-ds my-design-system-name --mode=local
```

The resulting folder structure should look something like this:

```
  myApp
  - scripts
  - - generate-component <----
  - - ...
  - src
  - - my-component-library <----
  - - ... 
  ...  
```

Also, some changes will have happened in your `package.json` file:

- All necessary dependencies installed: `styled-components`, `themed-props`

> *For more info on how to leverage the usage of the Theme and Styled Props, please refer to [Styled Components](https://styled-components.com/) and [Styled System](https://styled-system.com/) docs respectively.*

Made with Love!! ❤️
