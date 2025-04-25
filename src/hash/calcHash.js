import fs from 'fs';
import {createHash} from 'crypto';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
   const sourcePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
   const stream = fs.createReadStream(sourcePath);
   const hash = createHash('sha256');

  stream.on('data', (chunk) => hash.update(chunk));
  stream.on('end', () => console.log(hash.digest('hex')));
  stream.on('error', (error) => console.error(error.message));
};

await calculateHash();