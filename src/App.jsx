import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoList from "./ToDoList";
import './App.css'
import "./NewToDoForm";
import NewToDoForm from './NewToDoForm';




function App() {
  const [todos, setTodos] = useState([
    'Have Fun',
    'Learn React',
    'Learn the MERN-Stack'
  ])

  const [showTodos, setShowTodos] = useState(true)

  function addTodo(todo) {
    setTodos([...todos, todo]);
    //replace state, don't mutate it
  }

  return (    
      <div className='App'>
        <h1>React To-do</h1>
        <button onClick={ () => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
          { showTodos && <ToDoList todos={ todos }/>}

      <hr />

      <NewToDoForm addTodo={addTodo}/>

      </div>       
    

  )
}

export default App
