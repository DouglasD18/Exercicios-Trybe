let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('Exercício 1');
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
        }
    }
}
console.log(numbers);

console.log('Exercício 2');
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
        }
    }
}
console.log(numbers);

console.log('Exercício 3');
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = [];
for (let i = 1; i < numbers.length; i++) {
    n = i - 1
    novo.push(numbers[i] * numbers[n]);   
} novo.push(numbers[numbers.length-1] * 2)
console.log(novo);