// 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:
// “Julia tem {quantidade} livros favoritos.”

// {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

// “Julia tem 1 livro favorito.”

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

reader.favoriteBooks.push({
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
})

const countBooks = () => {
  const books = reader.favoriteBooks.length;
  if (books === 1){
    console.log(`${reader.name} tem ${books} livro favorito.`)
  }else{
    console.log(`${reader.name} tem ${books} livros favoritos.`);
  }
}
countBooks();
