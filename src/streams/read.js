import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const sourcePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const stream = fs.createReadStream(sourcePath, {encoding: 'utf-8'});

  stream.pipe(process.stdout);

  stream.on('error', (err) => {
    console.error(err.message);
  });
};

await read();