/* Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function checkPoints(tent, right) {
  let score = 0;
  for (let i = 0; i < tent.length; i++) {
    if (tent[i] === 'N.A') {
      continue;
    } else if (tent[i] === right[i]) {
      score += 1;
    } else {
      score -= 1;
    }
  }
  return score;
}

function returnPoints(tent, right, check) {
  return check(tent, right);
}

console.log(returnPoints(STUDENT_ANSWERS, RIGHT_ANSWERS, checkPoints));
