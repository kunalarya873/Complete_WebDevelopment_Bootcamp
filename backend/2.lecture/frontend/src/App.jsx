import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() =>{
    axios.get("/api/jokes")
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
    <h1>Chai aur full stack</h1>
    <p> Jokes {jokes.length}</p>
    {
      jokes.map(joke => <p key={joke.id}>
        <div>{joke.joke}</div></p>)
    }
    </>
  )
}

export default App
