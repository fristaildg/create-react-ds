import fs from 'fs';
import { exec } from 'child_process';

export const copyToDestination = ({ srcPath, destinationPath }: { srcPath: string; destinationPath: string }) => {
  return new Promise((resolve, reject) => {
    fs.cp(srcPath, destinationPath, { recursive: true }, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(true);
    });
  });
};

export const npmInstall = (destination: string) => {
  return new Promise((resolve, reject) => {
    exec('npm install', { cwd: destination }, (error) => {
      if (error) {
        reject(error)
        return;
      }

      resolve(true);
    });
  });
};
