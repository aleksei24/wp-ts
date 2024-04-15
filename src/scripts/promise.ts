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

FetchUsers().then(users => {
  console.log(users);
})