const myStrArr: string[] = ['grapes', 'lemon', 'apple', 'watermelon']
myStrArr.unshift('ARRAY')

const printArr = document.querySelector('#arr') as HTMLElement

// for (const item of myStrArr) {
//   const text = document.createElement('span')
//   text.textContent = item
//   printArr.appendChild(text)
// }

// myStrArr.forEach(el => {
//   const content = document.createElement('span')
//   content.textContent = el
//   printArr.appendChild(content)
// })

for (let i = 0; i < myStrArr.length; i++) {
  if (i % 2 !== 0) {
    const content = document.createElement('span')
    content.textContent = myStrArr.join(', ')
    printArr.appendChild(content)
  }
}

// console.log(myStrArr);
