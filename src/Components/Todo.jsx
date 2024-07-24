import React from 'react'

function Todo({ todo, deleteToDo, id }) {


    function handledeleteToDO() {
        deleteToDo(id)
    }
    return (
        <div className='todo'>
            <p>{todo}</p>
            <div className='actions'>
                <input type="checkbox" />
                <button onClick={handledeleteToDO}>Delete</button>
            </div>
        </div>
    )
}

export default Todo