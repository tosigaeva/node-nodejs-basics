import fs from 'fs/promises';

const create = async () => {
    try {
      await fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', {
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