import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const soursePath = path.join(__dirname, 'files', 'archive.gz');
  const targetPath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const  unzib = zlib.createGunzip();

  const readStream = fs.createReadStream(soursePath);
  const writeStream = fs.createWriteStream(targetPath);

  readStream.pipe(unzib).pipe(writeStream);

  readStream.on('error', (error) => {
    console.error(error.message);
  });

  writeStream.on('error', (error) => {
    console.error(error.message);
  });
};

await decompress();