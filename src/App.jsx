import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoList from "./ToDoList";
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (    
      <div>
        <h1>React To-do</h1>    
          <ToDoList />
      </div>      
    
  )
}

export default App
