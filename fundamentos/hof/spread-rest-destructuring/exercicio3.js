const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = (person) => {
  const {name: personName, age, likes} = person;
  return `${personName} is ${age} years old and likes ${likes.join(', ')}.`
}
