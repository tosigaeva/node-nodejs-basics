import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
    try {
      await fs.writeFile(filePath, 'I am fresh and young', {
        encoding: 'utf8',
        flag: 'wx'
      });
      console.log('fresh.txt was created successfully');
    } catch (error) {
      if (error.code === 'EEXIST') {
        throw new Error('FS operation failed');
      }
      throw error;
    }
};

await create();