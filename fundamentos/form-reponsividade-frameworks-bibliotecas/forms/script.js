let nome = document.getElementById('nome');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');
let endereco = document.getElementById('endereco');
let cidade = document.getElementById('cidade');
let select = document.getElementById('estado');
let curriculo = document.getElementById('curriculo');
let cargo= document.getElementById('cargo');
let description = document.getElementById('description');
let dataInicial = document.getElementById('date');
let urs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
let estado = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
let validar = document.getElementById('submit');
let limpar = document.getElementById('reset');
let dados = document.getElementById('dados-validados');
let erros = document.getElementById('erros');
let mensagemDeErro;

for (let i = 0; i < urs.length; i++) {
    let options = document.createElement('option');
    select.appendChild(options)
    options.setAttribute("value", urs[i]);
    options.innerText = estado[i];
}

function dadosValidados() {
    let p;
    p = document.createElement('p');
    p.innerText = `Seu nome é: ${nome.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `Seu email é: ${email.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `Seu CPF é: ${cpf.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `Seu endereço é: ${endereco.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `Sua cidade é: ${cidade.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `Seu estado é: ${select.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `O resumo do seu currículo é: ${curriculo.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `Seu último cargo foi: ${cargo.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `A descrição do seu último cargo é: ${description.value}`;
    dados.appendChild(p);
    p = document.createElement('p');
    p.innerText = `Sua data inicial foi: ${dataInicial.value}`;
    dados.appendChild(p);
}

function limpaTudo() {
    nome.value = '';
    email.value = '';
    cpf.value = '';
    endereco.value = '';
    cidade.value = '';
    select.value = 'AC';
    curriculo.value = '';
    cargo.value = '';
    description.value = '';
    dataInicial.value = '';
    dados.innerHTML = '';
    erros.innerHTML = '';
}

dataInicial.addEventListener('focusout', function(){
    let result = dataInicial.value;
    let day = parseInt(result.substr(0, 2));
    let month = parseInt(result.substr(3, 2));
    let year = parseInt(result.substr(6));
    if (result.length != 10 || result[2] != '/' && result[5] != '/') {
        mensagemDeErro = 'O formato da data inicial é inválido.';
        alert('O formato da data é inválido.');
    } else if (day < 0 || day > 31)  {
        mensagemDeErro = 'O dia da data inicial é inválido.'
        alert('O dia é inválido.')
    } else if (month < 0 || month > 12) {
        mensagemDeErro = 'O mês da data inicial é inválido.'
        alert('O mês é inválido.')
    } else if (year < 0) {
        mensagemDeErro = 'O ano da data inicial é inválido.'
        alert('O ano é inválido.')
    }
})

validar.addEventListener('click', function(){
    if (!mensagemDeErro) {
        dados.innerHTML = '';
        erros.innerHTML = '';
        dadosValidados();
    } else {
        erros.innerText = mensagemDeErro;
        mensagemDeErro = '';
    }
})

limpar.addEventListener('click', limpaTudo);