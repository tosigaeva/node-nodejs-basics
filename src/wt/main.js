import {Worker} from 'worker_threads';
import os from 'os';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const THREAD_COUNT = os.cpus().length;

const performCalculations = async () => {
    const workerPath = path.join(__dirname, 'worker.js');
    const workerPromises = [];
    let currentNumber = 10;
    for (let i = 0; i < THREAD_COUNT; i++) {
      const  promise = new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {
          workerData: {number: ++currentNumber}
        });

        worker.on('message', (data) => {
          resolve({status: 'resolved', data});
        });

        worker.on('error', (error) => {
          resolve({status: 'error', data: null});
        });
      });

      workerPromises.push(promise);
    }

  const results = await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();