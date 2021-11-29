const custo = 25;
const venda = 80;

const custoTotal = custo * 1.2;

if (custo > 0 && venda > 0) {
    lucro = venda - custoTotal;
    console.log(lucro);
} else {
    console.log("Valores de entrada errados.")
}