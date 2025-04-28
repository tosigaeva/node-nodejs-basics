import {spawn} from 'child_process';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const childPath = path.join(__dirname, 'files', 'script.js');
  const childProcess = spawn('node', [childPath, ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on('error', (error) => console.error(error.message));
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3']);
