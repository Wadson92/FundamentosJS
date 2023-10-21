// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

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

const changeTurn = (obj, key, valueKey) => {
  for (let index = 0; index < obj.lessons.length; index += 1){
    // console.log(obj.lessons[index][key])
    if (obj.lessons[index][key] === 'Python'){
      obj.lessons[index][valueKey] = 'Noite';
      // console.log(valueKey);
    }
  }
}
changeTurn(school, 'course', 'shift')
console.log(school)