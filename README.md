# Create React DS
> CLI for bootstrapping your own awesome React design system / components library!

[![NPM](https://img.shields.io/npm/v/create-react-ds)](https://www.npmjs.com/package/create-react-ds)

## Features

- Supports Typescript by default
- Bundles `commonjs` and `es` formats
- Rollup and Esbuild for bundling
- Jest and React Testing Library for testing
- Styled Components and Styled System for styling
- Easy Theming functionality
- Ladle for local development / component stories
- Eslint and prettier for code linting and formatting

## Usage

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

Made with LOL! (Lots of love) 😜
