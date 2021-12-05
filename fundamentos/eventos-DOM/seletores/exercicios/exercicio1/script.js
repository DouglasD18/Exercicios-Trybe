/*
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
document.querySelector('p').innerText = "Trabalhando na área e muito feliz com isso. Aprendendo e me sentindo mais realizado a cada dia.";

let verde = document.querySelectorAll('.main-content');
for (let i = 0; i < verde.length; i++) {
       verde[i].style.backgroundColor = 'rgb(76,164,109)';
}

function mudaCor(classe) {
       let fundoBranco = document.getElementsByClassName(classe);
       fundoBranco[0].style.backgroundColor = 'white';
}
mudaCor('center-content');

function corrije(tagName) {
       document.getElementsByTagName(tagName)[0].innerText = 'Exercício 5.1 - JavaScript';
}
corrije('h1');

function upper(tagName) {
       let texto = document.getElementsByTagName(tagName);
       for (let i = 0; i < texto.length; i++) {
              texto[i].innerText.toUpperCase(); 
       }
}
upper('p');

function exibe(tagName) {
       let exibidos = document.querySelectorAll(tagName).innerText;
       for (let i = 0; i < exibidos.length; i++) {
              console.log(exibidos[i]);
       }
}
exibe('p');