import React from 'react'

import Todo from './Todo'

function Todocontainer({todos,deleteToDo}) {
  return (
    <div className='container'>
       {todos.map((todo,id) =>(
        <Todo todo={todo}  id={id} deleteToDo={deleteToDo}/>
       ))}

        
      </div>
  )
}

export default Todocontainer