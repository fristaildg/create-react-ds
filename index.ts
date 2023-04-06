#! /usr/bin/env node
import path from 'path';
import { program } from 'commander';
import runLocalMode from './src/runLocalMode';
import runStandaloneMode from './src/runStandaloneMode';

program
  .version('0.40.0', '-v, --version')
  .usage('[OPTIONS]...')
  .argument('[string]', 'Name of the library')
  .option('-m, --mode <string>', 'Select if it is local or standalone (default)')
  .parse(process.argv)

const options = program.opts();
const nameArg = program.args[0] || 'my-design-system';
const templateSrc = path.join(__dirname, 'template');
const destination = path.join(process.cwd(), nameArg);

const isLocalMode = options.mode && options.mode === 'local';
const isStandaloneMode = !isLocalMode || options.mode === 'standalone';

if (isLocalMode) runLocalMode({
  templateSrc,
  nameArg,
});

if (isStandaloneMode) runStandaloneMode({
  templateSrc,
  destination,
  nameArg,
});
