import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const sourcePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const writeStream = fs.createWriteStream(sourcePath);

  process.stdin.pipe(writeStream);

  process.stdin.on('error', (error) => {
    console.error(error.message);
  });

  writeStream.on('error', (error) => {
    console.error(error.message);
  })
};

await write();