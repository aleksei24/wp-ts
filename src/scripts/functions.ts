const printFunction = document.querySelector('#func') as HTMLElement

function rootNumber(num: number) {
  return Math.sqrt(num)
}

let givenNumber_1 = 34
const resF_1 = rootNumber(givenNumber_1)

const printFuncOne = document.createElement('span')
printFuncOne.textContent = `Root from ${givenNumber_1} is ${resF_1}`
printFunction.append(printFuncOne)