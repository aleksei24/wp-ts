interface User {
  id: number,
  name: string,
  aka: string,
  email: string
}

const FetchUsers = async (): Promise<User[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json().catch(err => {
      if (err instanceof Error)
        console.log(err.message)
    })
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof FetchUsers>>

const pro = document.querySelector('#pro') as HTMLElement

FetchUsers().then(users => {
  console.log(users);
  for (let i = 0; i < users.length; i++) {
    const element = users[i];
    const contentPromise = document.createElement('p')
    contentPromise.textContent = element.name.toString()
    pro.appendChild(contentPromise)
  }
})