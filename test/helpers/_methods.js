// external dependencies
import fs from 'fs';

const FILES_OR_DIRECTORIES_TO_SKIP = [
  // files
  'allTestsExist.js',
  'index.js',
  '__.js',

  // directories
  'helpers',
  '_utils'
];

export const getFiles = (directory) => {
  return fs.readdirSync(directory).filter((file) => {
    return !~FILES_OR_DIRECTORIES_TO_SKIP.indexOf(file);
  });
};
