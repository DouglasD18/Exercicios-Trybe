const express = require('express');
const Authors = require('./models/Authors');
const Books = require('./models/Books');

const app = express();
app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Authors.getAll();

  res.status(200).send(authors);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = author_id
  ? await Books.getByAuthorId(author_id)
  : await Books.getAll();

  res.status(200).send(books);
});

app.listen(3000, () => {
  console.log('Rodando na porta 3000.');
});
