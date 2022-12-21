const { build } = require('esbuild');

const entryFile = 'src/index.ts';
const sharedConfig = {
  bundle: true,
  entryPoints: [entryFile],
  minify: true,
  sourcemap: true,
  logLevel: 'info',
  jsx: 'automatic',
};

build({
  ...sharedConfig,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ["esnext", "node12.22.0"],
});

build({
  ...sharedConfig,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ["esnext", "node12.22.0"],
});
