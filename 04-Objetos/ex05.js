// Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema. Para isso, considere a seguinte base de dados:
// Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

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
  ],
  other: [
    { name: 'Thays', lastName: 'Trindade' }
  ]
};

const keyValue = (obj, arrayPosition) => console.log(Object.values(obj)[arrayPosition])

keyValue(school, 1)