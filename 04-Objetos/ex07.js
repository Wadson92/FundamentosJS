// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// Nessa função ele vai retornar true ou false em todas as situações que existerem ou não determinada chave.
// const checkKey = (obj, keyName) => {
//   const teste = Object.values(obj)[0]
//   for (let index = 0; index < teste.length; index += 1){
//     console.log(Object.keys(teste[index]).includes(keyName))
//   }
// }
// checkKey(school, 'professor')

// Nessa função ele vai validar se o campo 'professor' está presente/existe em todos os elementos, mesmo que esteja vazio, se sim ele vai retonar 1 true apenas, se não 1 false que representará para todos mesmo que exista. Diferente do código acima que mostra true onde existe e false onde não existe.
const verifyKeys = (obj, key) => {
  for (let index = 0; index < obj.lessons.length; index += 1){
    if (obj.lessons[index][key] === undefined){
      return false;
    }
  }
  return true;
}

console.log(verifyKeys(school, 'professor'))