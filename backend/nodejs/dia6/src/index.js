const express = require('express');
const Authors = require('../models/Authors');
const Books = require('../models/Books');

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

app.get('/books/:id', async (req, res) => {
  const id = Number(req.params.id);

  const books = await Books.getByBookId(id);

  if (!books) return res.status(404).json({ message: 'Not found'});

  res.json(200).send(books);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Authors.isValid(first_name, middle_name. last_name)) {
    res.status(400).json({ message: "Invalid data!"})
  }

  await Authors.createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Author creation is successful' })
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  const titleIsValid = Books.validTitle(title);
  const authorIdIsValid = await Books.validAuthorId(author_id);

  if (!titleIsValid || !authorIdIsValid) {
    res.status(400).json({ message: 'Invalid data!' });
  }

  await Books.createBook(title, author_id);

  res.status(201).json({ message: 'Book creation is successful' })
});

app.listen(3003, () => {
  console.log('Rodando na porta 3003.');
});
