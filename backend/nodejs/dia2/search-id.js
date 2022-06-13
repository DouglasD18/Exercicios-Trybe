const fs = require('fs').promises;

async function searchId(id) {
  const fileContent = await fs.readFile('./sympsons.json', 'utf-8');
  const sympsons = JSON.parse(fileContent);
  const theOne = sympsons.find((person) => Number(person.id) === id);

  if (!theOne) {
    throw new Error('id não encontrado');
  }

  console.log(theOne);
  return theOne;
}

searchId(3);