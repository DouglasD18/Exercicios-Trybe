function primo(num) {
    let resto = 1;
    let i = 2;
    let resultado = true;
    if (num !== 2) {
        while (i < num) {
            resto = num % i;
            if (resto === 0) {
                resultado = false;
                break;
            } else{
                resto = 1;
            }
            i += 1;
        }
    } 
    return resultado;
}

let teste = primo(30);
console.log(teste);