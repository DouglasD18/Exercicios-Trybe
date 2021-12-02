function verificaFim(palavra, final) {
    let i = palavra.length - 1;
    let j = final.length - 1;
    let resultado = true;
    while (j >= 0) {
        if (palavra[i] === final[j]) {
            i -= 1;
            j -= 1;
        } else {
            resultado = false;
            break
        }
    }
    return resultado;
}

let palavra = 'trybe';
let final = 'ybe';
teste = verificaFim(palavra, final);
console.log(teste);