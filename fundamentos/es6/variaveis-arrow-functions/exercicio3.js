const fatorial = num => {
    if (num < 0) {
        return 'Não existe fatorial de número negativo!'
    } if (num == 0 || num ==1) {
        return 1;
    } else {
        let resultado = 1;
        while (num > 1) {
            resultado *= num;
            num -= 1;
        }
        return resultado;
    }
}

console.log(fatorial(0));

const longestWord = frase => {
    let palavras = frase.split(' ');
    let resultado = '';
    for (const palavra of palavras) {
        if (palavra.length > resultado.length) {
            resultado = palavra;
        }
    }
    return resultado;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); 