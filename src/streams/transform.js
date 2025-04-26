import {Transform} from 'stream';

const transform = async () => {

  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      try {
        this.push(chunk.toString().split('').reverse().join(''));
        callback();
      } catch (error) {
        callback(error);
      }
    }
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  process.stdin.on('error', (error) => console.error(error.message));
  reverseTransform.on('error', (error) => console.error(error.message));
  process.stdout.on('error', (error) => console.error(error.message));
};

await transform();