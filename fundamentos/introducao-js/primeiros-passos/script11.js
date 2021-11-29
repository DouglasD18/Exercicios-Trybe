/* INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

const salarioBruto = 3000;
let salarioBase;
let impostoDeRenda;
let salarioLiquido;

function calcImpostoDeRenda(n) {
    if (n > 1903.98) {
        if (n >= 1903.99 &&  n <= 2826.65) {
            impostoDeRenda = (n * 0.075) - 142.80;
            return impostoDeRenda;
        } else if (n >= 2826.66 &&  n <= 3.751,05) {
            impostoDeRenda = (n * 0.15) - 354.80;
            return impostoDeRenda;
        } else if (n >= 3.751,06 &&  n <= 4664.68) {
            impostoDeRenda = (n * 0.225) - 636.13;
            return impostoDeRenda;
        } else if (n > 4664.68) {
            impostoDeRenda = (n * 0.275) - 869.36;
            return impostoDeRenda;
        } 
    } else {
        impostoDeRenda = 0;
        return impostoDeRenda;
    }
}

function calcSalarioBase(n) {
    if (n > 1556.95) {
        salarioBase = salarioBruto - (salarioBruto * .08);
        return salarioBase;
    } else if (n >= 1556.95 &&  n <= 2594.92) {
        salarioBase = salarioBruto - (salarioBruto * .09);
        return salarioBase;
    } else if (n >= 2594.92 &&  n <= 5189.82) {
        salarioBase = salarioBruto - (salarioBruto * .11);
        return salarioBase;
    } else {
        salarioBase = salarioBruto - 570.88;
        return salarioBase;
    }
}

salarioBase = calcSalarioBase(salarioBruto);
salarioLiquido = salarioBase - calcImpostoDeRenda(salarioBase);
console.log(salarioLiquido);