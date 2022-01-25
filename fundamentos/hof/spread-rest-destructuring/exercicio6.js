const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = list => {
  const [modelo, construtora, ano] = list;
  return {modelo, construtora, ano};
}

console.log((toObject(palio)));