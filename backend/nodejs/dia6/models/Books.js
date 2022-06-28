const connection = require('./connection');

const serialize = (books) => {
  return {
    id: books.id,
    title: books.title,
    authorId: books.author_id
  }
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books');

  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?';

  const [books] = await connection.execute(query, [authorId]);

  return books.map(serialize);
}

const getByBookId = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?';

  const [books] = await connection.execute(query, [id]);

  console.log(books);

  return books.map(serialize);
}

const validTitle = (title) => {
  if (title.length < 3) return false;

  return true;
}

const validAuthorId = async (authorId) => {
  const id = await connection.execute('SELECT id FROM model_example.authors WHERE id=?', [authorId])

  if (!id) return false;

  return true;
}

const createBook = async (title, authorId) => connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
	[title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  validTitle,
  validAuthorId,
  createBook,
};
