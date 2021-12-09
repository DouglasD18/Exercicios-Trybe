/* Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ). */

let backgroundColor = document.getElementById('background-color');
let color = document.getElementById('color');
let fontSize = document.getElementById('font-size');
let lineHeight = document.getElementById('line-height');
let fontFamily = document.getElementById('font-family');

function recebeAlterações(estilo) {
    localStorage.setItem('background-color', JSON.stringify(estilo[0]));
    localStorage.setItem('color', JSON.stringify(estilo[1]));
    localStorage.setItem('font-size', JSON.stringify(estilo[2]));
    localStorage.setItem('line-height', JSON.stringify(estilo[3]));
    localStorage.setItem('font-family', JSON.stringify(estilo[4]));
    return localStorage;
}

function aplicaAlterações(chave) {
    let main = document.querySelector('main');
    main.style.backgroundColor = JSON.parse(localStorage.getItem('background-color'));
    main.style.color = JSON.parse(localStorage.getItem('color'));
    main.style.fontSize = JSON.parse(localStorage.getItem('font-size'));
    main.style.lineHeight = JSON.parse(localStorage.getItem('line-height'));
    main.style.fontFamily = JSON.parse(localStorage.getItem('font-family'));
}

let button = document.getElementById('button');
button.addEventListener('click', function() {
    let estilo = [backgroundColor.value, color.value, fontSize.value, lineHeight.value, fontFamily.value];
    console.log(estilo);
    aplicaAlterações(recebeAlterações(estilo));
})