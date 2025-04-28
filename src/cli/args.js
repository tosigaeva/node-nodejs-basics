const parseArgs = () => {
  const prefix = '--';
  const args = process.argv.slice(2);
  const result = [];

  for(let i = 0; i < args.length; i += 2) {
    const prop = args[i].startsWith(prefix) ? args[i].slice(2) : args[i];
    result.push(`${prop} is ${args[i+1]}`);
  }

  console.log(result.join(', '));
};

parseArgs();