const myNumArray: number[] = [48, 6, 5, 894, 44, 3, 56, 9, 57, 466, 49, 57, 34, 67]
const printNumArr = document.querySelector('#arrNum') as HTMLElement

myNumArray.forEach(el => {
  const content = document.createElement('span')
  content.textContent = `${el.toString()} `
  printNumArr.appendChild(content)
});