const myStrArr: string[] = ['grapes', 'lemon']
myStrArr.unshift('ARRAY: ')

const printArr = document.querySelector('#arr') as HTMLElement
// printArr.textContent = `${myArr}`
for (const item of myStrArr) {
  const text = document.createElement('span')
  text.textContent = item
  printArr.appendChild(text)
}

myStrArr.join('')