import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [counter, setCounter]= useState(13)
     const addValue= ()=>{
      console.log("Clicked",counter);
    //  counter=counter+1;
      setCounter(counter+1)
     }

     const removeValue=()=>{
      setCounter(counter-1);
     }
  return (
    <>
    <h1> chai aur code</h1>
    <h2> counter value: {counter}</h2>
    <button 
    onClick={addValue}>Add value</button>
    <br />   
    <button
    onClick={removeValue}> remove value</button>
    </>
  )
}

export default App
