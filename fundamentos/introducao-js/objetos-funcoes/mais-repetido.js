function maisRepetido(lista) {
    let num;
    let maisRepetio = 0;
    let descartavel;
    for (let i = 0; i < lista.length; i++) {
        descartavel = 0;
        for (let j = 0; j < lista.length; j++) {
            if (j !== i) {
                if (lista[j] === lista[i]) {
                    descartavel += 1;
                }
            }
        }
        if (descartavel > maisRepetio) {
            maisRepetio = descartavel;
            num = lista[i]
        }
    }
    return num;
}

let lista = [2, 3, 2, 5, 3, 3, 8, 2, 3];
let teste = maisRepetido(lista);
console.log(teste);