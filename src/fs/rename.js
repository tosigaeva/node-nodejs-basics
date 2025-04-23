import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkFileExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

const rename = async () => {
  const sourcePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const targetPath = path.join(__dirname, 'files', 'properFilename.md');

  const [sourceExists, targetExists] = await Promise.all([
    checkFileExists(sourcePath),
    checkFileExists(targetPath)
  ]);

  if (!sourceExists || targetExists) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.rename(sourcePath, targetPath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();