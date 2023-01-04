#! /usr/bin/env node

import fs from 'fs';
import path from 'path';
import PackageJson from '@npmcli/package-json';
import { exec } from 'child_process';

const nameArg = process.argv[2] || 'my-design-system';
const templateSrc = path.join(__dirname, 'template');
const destination = path.join(process.cwd(), nameArg);

fs.rename(path.join(templateSrc, '_gitignore'), path.join(templateSrc, '.gitignore'), (error) => {
  if (error) {
    console.log(error);
    return;
  };
});

fs.cp(templateSrc, destination, { recursive: true }, async (error) => {
  if (error) {
    console.log(error);
    return;
  }

  const pkgJson = await PackageJson.load(destination);

  pkgJson.update({
    name: nameArg,
  });

  await pkgJson.save();

  console.log('Installing dependencies');
  exec('npm install', { cwd: destination }, (error) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log('Done!, Time to create your awesome Design System!')
  });
});
