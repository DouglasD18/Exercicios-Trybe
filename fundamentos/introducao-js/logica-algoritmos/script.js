/* Exercício 1 */
let n = 5;
for (let i = 0; i < n; i++) {
    let linhas = '';
    for (let j =0; j < n; j++){
        linhas += '*';
    }
    console.log(linhas);
}
console.log('\n');

/* Exercício 2*/
n = 5;
for (let i = 1; i <= n; i++) {
    let linhas = '';
    for (let j =0; j < i; j++){
        linhas += '*';
    }
    console.log(linhas);
}
console.log('\n');

/* Exercício 3*/
n = 5;
let d = n - 1;
for (let i = 0; i < n; i++) {
    let linhas = '';
    for (let j = 0; j < n; j++){
        if (j >= d) {
            linhas += '*'
        } else {
            linhas += ' '
        }
    }
    console.log(linhas);
    d -= 1;
}
console.log('\n');