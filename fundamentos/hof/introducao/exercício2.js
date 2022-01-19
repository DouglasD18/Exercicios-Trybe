const check = (apostado, sorteado) => {
  if (apostado === sorteado) {
    console.log("Parabéns você ganhou");
  } else {
    console.log('Tente novamente');
  }
};

const doSort = (func, apostado) => {
  const sorteado = Math.floor(Math.random() * 5) + 1;
  func(apostado, sorteado);
};

doSort(check, 5);
