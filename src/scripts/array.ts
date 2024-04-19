const myStrArr: string[] = ['grapes', 'lemon', 'apple', 'watermelon']
const printArr = document.querySelector('#arr') as HTMLElement

const addElemBefore = myStrArr.unshift('tomato', 'plum')

// for (const item of myStrArr) {
//   const text = document.createElement('span')
//   text.textContent = item
//   printArr.appendChild(text)
// }

myStrArr.forEach(el => {
  const content = document.createElement('span')
  content.textContent = el
  printArr.appendChild(content)
})

// for (let i = 0; i < myStrArr.length; i++) {
//   const el = myStrArr[i]
//   const content = document.createElement('span')
//   content.textContent = el.toString()
//   printArr.appendChild(content)
// }

