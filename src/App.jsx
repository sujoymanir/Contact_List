import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     
      </div>
      

    
      </div>
    
    </>
  )
}

export default App
