const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

function readSimpsons() {
  return fs.readFile('./sympsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

function writeSimpsons(newSimpsons) {
  return fs.writeFile('./sympsons.json', JSON.stringify(newSimpsons));
}

app.get('/sympsons', async (req, res) => {
  try {
    const simpsons = await readSimpsons();
    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
})

app.listen(3005, () => {
  console.log('Aplicação ouvindo na porta 3005');
});