const printResult = document.querySelector('#log_two') as HTMLElement
const res: string = 'Hello from DOM.ts'
const thisYear: string = new Date().getFullYear().toString()
printResult.setAttribute('datetime', thisYear)

printResult.innerText = res
printResult.textContent = thisYear

