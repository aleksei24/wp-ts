const myArr: string[] = ['grapes', 'lemon']
myArr.unshift('ARRAY: ')

const printArr = document.querySelector('#arr') as HTMLElement
// printArr.textContent = `${myArr}`
for (const item of myArr) {
  const text = document.createElement('span')
  text.textContent = item
  printArr.appendChild(text)
}

myArr.join('')