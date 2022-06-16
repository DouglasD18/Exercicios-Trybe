const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

function readSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

function writeSimpsons(newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await readSimpsons();
    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = await readSimpsons();
  const simpson = simpsons.find((r) => r.id === id);
  if (!simpson) return res.status(404).json({ message: 'simpson not found!'});

  res.status(200).json(simpson);
});

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await readSimpsons()
    const simpson = simpsons.find((r) => r.name === name);
    if (simpson) {
      res.status(409).json({ message: 'id already exists' })
    }
    simpsons.push({ id, name });
    writeSimpsons(simpsons);
    res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3005, () => {
  console.log('Aplicação ouvindo na porta 3005');
});
