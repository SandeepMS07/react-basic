import React from 'react'

function TextInput(props) {
    const {setTodosList, todosList} = props
    const [todo, setTodo]  = React.useState('')
    const handleTodo = (e) => {
        if(e) {
            setTodo(e.target.value)
        }

    }

    const submitTodo = (e) => {
        if(todo){
            setTodosList([
            ...todosList,
          {
              id: todosList.length +1,
              name: todo
          }
          ]);
  
        }
        setTodo('')
        e.preventDefault();
        

    }

  return (
    <div>
      <form>
        <input 
            placeholder ="Enter the todo list"
            onChange={(e) => handleTodo(e)} type="text"  value={todo}
          />

          <button style={{background:"red", marginLeft: 24}} onClick={submitTodo}>
              Add Todod
          </button>
      </form>
        

    </div>
  )
}

export default TextInput