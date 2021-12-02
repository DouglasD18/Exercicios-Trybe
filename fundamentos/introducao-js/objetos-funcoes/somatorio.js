function somatorio(n) {
    let vezes = 1;
    let sum = 0;
    let lista = '';
    while (vezes <= n) {
        sum += vezes;
        if (vezes != n) {
            lista += (vezes.toString() + '+');
        } else {
            lista += vezes.toString();
        }
        vezes++
    }
    lista += ('=' + sum.toString());
    return lista;
}

let teste = somatorio(5);
console.log(teste);