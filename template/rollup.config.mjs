import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';

export default [
  {
    plugins: [typescript(), esbuild()],
    input: ['./src/index.ts', './src/theme/index.ts'],
    external: (id) => !/^[./]/.test(id),
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        exports: 'auto',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        interop: 'compat',
      },
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        exports: 'auto',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
  },
];
