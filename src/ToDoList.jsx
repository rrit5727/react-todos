//import stuff

import ToDoListItem from "./ToDoListItem"

    import "./ToDoList.css"; 
    import "./ToDoListItem.css";



// define the React functional component
const ToDoList = ( { todos } ) => {
   const toDoListItems = todos.map((t, idx) => <ToDoListItem todo={t} key={idx}/>)
    return (    
        <ul className="ToDoList">             
            { toDoListItems }            
        </ul>      

      
    )
} 


// export it
export default ToDoList