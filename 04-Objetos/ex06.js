//Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

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


const countStudentsByCourse = (array) => {
  let count = 0;
  for (let index = 0; index < array.length; index += 1){
    count = count + array[index]['students'];
  }
  return count;
}
console.log(countStudentsByCourse(school.lessons));