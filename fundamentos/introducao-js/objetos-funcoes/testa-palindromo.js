function testaPalindromo(palavra) {
    let cont = palavra.length - 1;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === palavra[cont]) {
            cont -= 1
        } else {
            return false;
            break;
        }
    }
    if (cont === -1) {
        return true;
    }
}

palavra = 'sopapos';
teste = testaPalindromo(palavra);
console.log(teste);