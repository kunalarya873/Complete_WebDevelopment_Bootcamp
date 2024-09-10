import './App.css'
import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef= useRef(null);


  const passwordGenerator = useCallback(() => {
    let result = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str += "!@#$%^&*()_-+={}[]|\\?<>,.;:"
    for(let i=1; i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1)
      result += str.charAt(char)
    }
    return setPassword(result)
  },[length, charAllowed, numberAllowed, setPassword])


  const copyPasswordtoClickboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password)
  }, [password])

  
  useEffect( ()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-400'>
    <h1 className='text-center text-4xl text-white'>Password Generator</h1>
    <div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
<input type="text" value ={password} className='outline-none w-full py-2 px-3' placeholder='password' readOnly ref={passwordRef} /><button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordtoClickboard}>copy</button></div>
<div className='flex text-sm gap-x-2'><div className='flex items-center gap-x-1'>
<input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} /><label>Length: {length}</label>
</div>
<div className="flex items-center gap-x-1">
<input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev)=>!prev);}}/><label htmlFor='numberInput'>Number</label>
<input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={() => { setCharAllowed((prev)=>!prev);}}/><label htmlFor='characterInput'>Character</label>
</div>
</div>
</div>
    </>
  )
}

export default App
