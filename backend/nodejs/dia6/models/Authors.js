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
  const [authors] =  await connection.execute('SELECT id, name, middle_name, last_name FROM authors');

  return authors.map(serialize).map(getNewAuthors);
}

module.exports = {
  getAll,
};
