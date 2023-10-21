// 1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

let filmTitle = Object.entries(reader.favoriteBooks[0]);
let message1 = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${filmTitle[0][1]}.`;
console.log('Mensagem 1: ' + message1);

let message2 = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0]['title']}.`;
console.log('Mensagem 2: ' + message2);