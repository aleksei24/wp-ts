const fruit: string[] = []
fruit.push('grapes')

const printArr = document.querySelector('#arr') as HTMLElement
printArr.textContent = `${fruit}`