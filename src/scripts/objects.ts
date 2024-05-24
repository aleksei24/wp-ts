const printObject = document.querySelector('#obj') as HTMLObjectElement

interface Customer {
  name: string,
  age: number,
  visitDaily?: boolean
}

function createCustomer(customer: Customer) {
  return `${customer.name}, ${customer.age}, ${customer.visitDaily}`
}

const customer_one = createCustomer({ name: 'Bill', age: 45, })

const printObjOne = document.createElement('span')
printObjOne.textContent = `Customer 1: ${customer_one}`
printObject.append(printObjOne)