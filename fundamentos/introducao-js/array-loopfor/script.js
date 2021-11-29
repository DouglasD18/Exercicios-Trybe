let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('Exercício 1');
for (const number of numbers) {
    console.log(number);
}

console.log('Exercício 2');
let contador = 0;
for (const number of numbers) {
    contador += number
}
console.log(contador);

console.log('Exercício 3');
let media = 0;
let soma = 0;
for (const number of numbers) {
    soma += number;
}
media = soma / (numbers.length-1);
console.log(media);

console.log('Exercício 4');
if (media > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}

console.log('Exercício 5');
let maior = 0;
for (const number of numbers) {
    if (number > maior) {
        maior = number;
    }
}
console.log(maior);

console.log('Exercício 6');
impares = [];
for (const number of numbers) {
    if (number % 2 !== 0) {
        impares.push(number);
    }
}
if (impares != 0) {
    console.log(impares)
} else {
    console.log('nenhum valor ímpar encontrado')
}

console.log('Exercício 7');
let menor = numbers[0];
for (const number of numbers) {
    if (number < menor) {
        menor = number;
    }
}
console.log(menor);

console.log('Exercício 8');
vetor = [];
for (let i = 1; i <= 25; i++) {
    vetor.push(i);  
}
console.log(vetor);

console.log('Exercício 9');
vetor2 = [];
for (const number of vetor) {
    vetor2.push(number / 2);
}
console.log(vetor2);