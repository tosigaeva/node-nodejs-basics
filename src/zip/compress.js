import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const soursePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const targetPath = path.join(__dirname, 'files', 'archive.gz');

  const gzib = zlib.createGzip();

  const readStream = fs.createReadStream(soursePath);
  const writeStream = fs.createWriteStream(targetPath);

  readStream.pipe(gzib).pipe(writeStream);

  readStream.on('error', (error) => {
    console.error(error.message);
  });

  writeStream.on('error', (error) => {
    console.error(error.message);
  });
};

await compress();