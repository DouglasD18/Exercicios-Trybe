const fs = require('fs').promises;

function isDiferent(value) {
  if (value.id !== '10' && value.id !== '6') {
    return value;
  }
}

async function changeSympsons() {
  const fileContent = await fs.readFile('./sympsons.json', 'utf-8');
  const sympsons = JSON.parse(fileContent);
  const newSympsons = sympsons.filter(isDiferent);

  await fs.writeFile('./sympsons.json', JSON.stringify(newSympsons));
}

changeSympsons();