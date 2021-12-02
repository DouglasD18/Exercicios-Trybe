function maiorNome(lista) {
    let cont = -1;
    let resultado = '';
    for (const nome of lista) {
        if (nome.length > cont) {
            cont = nome.length;
            resultado = nome;
        }
    }
    return resultado;
}

let lista = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Cristiano'];
let teste = maiorNome(lista);
console.log(teste);