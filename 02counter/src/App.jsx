import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    counter=counter + 1;
    if (counter > 20) {
      counter = 20;
    }
    setCounter(counter);
    console.log("Add Button clicked",counter); 
  }

  const removeValue = () => {
    counter=counter - 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
     console.log("Remove button clicked",counter);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
