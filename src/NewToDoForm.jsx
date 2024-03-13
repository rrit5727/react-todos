import { useState } from 'react'


// Define


const NewToDoForm = ({addTodo}) => {
const [newTodo, setNewTodo] = useState('SEI');

    function handleAddTodo(event) {
        event.preventDefault();
        addTodo (newTodo);
        setNewTodo('');
    }

    return (
        <div>
            <h2>New To-Do</h2>
            <form onSubmit={handleAddTodo}>
                <input value={newTodo}
                        onChange={(event) => setNewTodo(event.target.value)} 
                        type="text" name="" id=""
                         
                />
                <button type='submit'>Add-To-Do</button>
            </form>
        </div>
    )
}


//Export
export default NewToDoForm

