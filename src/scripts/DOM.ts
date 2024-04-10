const dictum: string[] = [
  'Your pain today will be your strength tomorrow',
  'One thing at a time',
  'We are what we repeatedly do',
  'Actions speak louder than words',
  'A journey of thousand miles begins with a single step',
  'An apple a day keeps the doctor away',
  'Better late than never',
  'Clothes do not make the man',
  'Cowards die many times before their deaths',
  'Don’t judge a book by its cover',
  'Every cloud has a silver lining',
  'Fall seven times. Stand up eight',
  'If it ain’t broke, don’t fix it',
  'Never put off until tomorrow what you can do today',
  'Practice makes perfect',
  'When in Rome, do as the Romans do',
  'Where there’s a will, there’s a way',
]

const headline = document.querySelector('#main-headline') as HTMLElement
const randomPhrase = dictum[Math.floor(Math.random() * Math.floor(dictum.length))];
const content = randomPhrase;
headline.innerText = content;

headline.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  console.log('event: ', target.id);
})
