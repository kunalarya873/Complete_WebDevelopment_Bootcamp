import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ counter, setCounter] = useState(15)
  const addValue = () =>{
  console.log("clicked ", counter);
  if( counter >= 20){
    counter = 20
  }else{
    setCounter(counter+1)
  }
  }
  const removeValue= ()=>{
    if( counter <= 0){
      counter = 0
    }
    else{
      setCounter(counter-1)
    }
  }
  return (
   <>
  <h1>Chai aur react</h1>
  <h2>Counter Value: {counter}</h2>
  <button onClick={addValue}>Add value</button>
  <br/>
  <button onClick={removeValue}>decrease value</button>
   </>
  )
}

export default App
