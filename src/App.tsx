import { useState, useEffect } from 'react'
import './App.css'

interface UsersList {
  name: string
  age: number
  email: string
}

function App() {
  const [users, setUsers] = useState<UsersList[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((res) => setUsers(res.data))
  }, [])

  return <div className="App">{JSON.stringify(users, null, '\t')}</div>
}

export default App
