const connection = require('./connection');

const serialize = (authors) => {
  return {
    id: authors.id,
    firstName: authors.first_name,
    middleName: authors.middle_name,
    lastName: authors.last_name
  }
}

const getNewAuthors = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const getAll = async () => {
  const [authors] =  await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors');

  return authors.map(serialize).map(getNewAuthors);
}

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};

const createAuthor = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

module.exports = {
  getAll,
  isValid,
  createAuthor,
};
