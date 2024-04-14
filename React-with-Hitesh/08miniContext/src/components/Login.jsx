import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {
    const [username, setUsername] =  React.useState('')
    const [password, setPassword]  = React.useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})

    }
  return (
    <div>
        <h2>
            Login
            <br/>
            <input type='text' placeholder="Username" value={username} 
            onChange={(e) => setUsername(e.target.value)}/>
            <br/>
            <input type='password' placeholder="Password" value={password} 
            onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <button onClick={handleSubmit} >Login</button>
        </h2>
    </div>
  )
}

export default Login