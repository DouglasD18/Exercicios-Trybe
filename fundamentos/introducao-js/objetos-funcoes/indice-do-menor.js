function retornaMenor(lista) {
    let indice = 0;
    let maior = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] <= maior) {
            maior = lista[i];
            indice = i;
        }
    }
    return indice;
}

let lista = [2, 4, 6, 7, 10, 0, 18];
let teste = retornaMenor(lista);
console.log(teste);