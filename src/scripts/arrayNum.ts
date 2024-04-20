const myNumArray: number[] = [48, 6, 5, 894, 44, 3, 56, 9, 57, 466, 49, 57, 34]
const printNumArr = document.querySelector('#arrNum') as HTMLElement

myNumArray.forEach(el => {
  const content = document.createElement('span')
  content.textContent = `${el} `
  printNumArr.appendChild(content)
});

const arrMap = myNumArray.filter(n => n > 10).join(' ')
const printRes = document.createElement('p')
printRes.textContent = `mapped Arr: ${arrMap}`
printNumArr.append(printRes)
