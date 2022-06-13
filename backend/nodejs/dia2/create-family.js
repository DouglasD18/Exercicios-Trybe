const fs = require('fs').promises;

async function createSympsonsFamily() {
  const fileContent = await fs.readFile('./sympsons.json', 'utf-8');
  const sympsons = JSON.parse(fileContent);
  const family = sympsons.filter((sympsom) => Number(sympsom.id) < 6);

  await fs.writeFile('./sympsons-family.json', JSON.stringify(family));
}

createSympsonsFamily();