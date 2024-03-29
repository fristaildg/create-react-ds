import chalk from 'chalk';
import path from 'path';
import { exec } from 'child_process';
import { copyToDestination } from './utils';
import PackageJson from '@npmcli/package-json';

const runLocalMode = async ({
  templateSrc,
  nameArg,
}: {
  templateSrc: string;
  nameArg: string;
}) => {
  // Copy the new library directory into a new or existing 'src' directory of the containing app
  console.log(chalk.blue.bold('Copying template files to destination'));
  await copyToDestination({
    srcPath: path.join(templateSrc, 'src'),
    destinationPath: path.join(process.cwd(), 'src', nameArg),
  });

  // Copy the scripts (generate-component) into a new or existing 'scripts' directory
  await copyToDestination({
    srcPath: path.join(templateSrc, 'scripts'),
    destinationPath: path.join(process.cwd(), 'scripts'),
  });
  console.log(chalk.green.bold('Done ✔'));

  // Install Dependencies
  console.log(chalk.white.bold(`Installing ${chalk.blue.bold('styled-components')} and ${chalk.blue.bold('themed-props')}... ☕️`));
  exec('npm install styled-components themed-props', { cwd: process.cwd() }, async (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(chalk.green.bold('Done ✔'));
    console.log(chalk.yellow.bold(`If you are using Typescript, you will also have to install ${chalk.blue.bold('@types/styled-components')}`))
    
    const pkgJson = await PackageJson.load(process.cwd());
    pkgJson.update({
      scripts: {
        ...pkgJson.content.scripts,
        'component': 'node scripts/generate-component',
      },
    });
    await pkgJson.save();
    console.log(chalk.green.bold('Done ✔'));
  });  
};

export default runLocalMode;
