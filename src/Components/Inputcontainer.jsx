import React from 'react'

function Inputcontainer({inputVal,writeToDo ,displayToDo}) {
  return (
    <div className="input-container">
        <input type="text" value={inputVal} onChange={writeToDo}/>
        <button onClick={displayToDo}>+</button>
      </div>
  )
}

export default Inputcontainer