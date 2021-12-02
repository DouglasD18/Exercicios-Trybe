let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

//Exercício 6
console.log('O livro favorito da ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama \'' + leitor.livrosFavoritos[0].titulo) + '\'.';

//Exercício 7 
leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
};

//Exercício 8
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');