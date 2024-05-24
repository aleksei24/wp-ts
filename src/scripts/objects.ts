const printObject = document.querySelector('#obj') as HTMLObjectElement

function createCustomer(customer: {
  name: string, age: number, visitDaily?: boolean
}) {
  return `${customer.name}, ${customer.age}, ${customer.visitDaily}`
}

const customer_one = createCustomer({ name: 'Bill', age: 45, visitDaily: false })

const printObjOne = document.createElement('span')
printObjOne.textContent = `Customer 1: ${customer_one}`
printObject.append(printObjOne)