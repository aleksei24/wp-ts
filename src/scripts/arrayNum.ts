const myNumArray: number[] = [48, 6, 5, 894, 44, 3, 56, 9, 57, 466, 49, 57, 34]
const printNumArr = document.querySelector('#arrNum') as HTMLElement

myNumArray.forEach(el => {
  const content = document.createElement('span')
  content.textContent = `${el} `
  printNumArr.appendChild(content)
});

const arrMap = myNumArray.filter(n => n > 10).join(' ')
const printResOne = document.createElement('p')
printResOne.textContent = `filtered Arr: ${arrMap}`
printNumArr.append(printResOne)

const arrReduce = myNumArray.reduce((acc, cur) => acc + cur, 0,)
const printResTwo = document.createElement('span')
printResTwo.textContent = `reduced Arr: ${arrReduce}`
printNumArr.append(printResTwo)