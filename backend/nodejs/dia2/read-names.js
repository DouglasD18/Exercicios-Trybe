const fs = require('fs').promises; 

async function readNames() {
  const fileContent = await fs.readFile('./sympsons.json', 'utf-8');
  const sympsons = JSON.parse(fileContent);
  const strings = sympsons.map(({id, name}) => `${id} - ${name}`);

  console.log(strings);
}

readNames();