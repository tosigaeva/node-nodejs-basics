import path from 'path';
import {fileURLToPath} from 'url';
import os from 'os';
import http from 'http';
import './files/c.cjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

const unknownObject = (
  await import(
    path.join(__dirname, 'files', random > 0.5 ? 'a.json' : 'b.json'),
    {with: {type: 'json'}}
  )
).default;

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
})

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

