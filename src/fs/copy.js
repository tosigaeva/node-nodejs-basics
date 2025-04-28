import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkDirExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

const copy = async () => {
  const sourceDir = path.join(__dirname, 'files');
  const targetDir = path.join(__dirname, 'files_copy');

  const [sourceExists, targetExists] = await Promise.all([
    checkDirExists(sourceDir),
    checkDirExists(targetDir)
  ]);

  if (!sourceExists || targetExists) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.cp(sourceDir, targetDir, {recursive: true});
    console.log('Directory copied successfully');
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
