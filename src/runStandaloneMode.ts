import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { copyToDestination, npmInstall } from './utils';
import PackageJson from '@npmcli/package-json';

const runStandaloneMode = async ({
  templateSrc,
  destination,
  nameArg,
}: {
  templateSrc: string;
  destination: string;
  nameArg: string;
}) => {
  fs.rename(path.join(templateSrc, '_gitignore'), path.join(templateSrc, '.gitignore'), (error) => {
    if (error) {
      console.log(error);
      return;
    };
  });

  console.log(chalk.blue.bold('Copying template files to destination'));

  await copyToDestination({ srcPath: templateSrc, destinationPath: destination });
  
  console.log(chalk.green.bold('Done ✔'));
  const pkgJson = await PackageJson.load(destination);
  
  pkgJson.update({
    name: nameArg,
  });
  await pkgJson.save();

  console.log(chalk.blue.bold('Installing dependencies, this might take some minutes... ☕️'));
  await npmInstall(destination);
  console.log(chalk.green.bold('Done!, Time to create your awesome Design System! 🎉'));
};

export default runStandaloneMode;
