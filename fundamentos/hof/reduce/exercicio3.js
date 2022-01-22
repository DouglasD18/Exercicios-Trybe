const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const withoutCase = names.map(str => str.toUpperCase());
  const palavras = withoutCase.reduce(((result, current) => result += current), '');
  let cont = 0;
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i] === 'A') {
      cont += 1;
    }
  }
  return cont;
}
