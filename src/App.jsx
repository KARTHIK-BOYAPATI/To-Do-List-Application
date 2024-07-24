import React, { useState } from 'react'
import './App.css'

import Todocontainer from './Components/Todocontainer'
import Inputcontainer from './Components/Inputcontainer'

function App() {

  const [inputVal, setInputVal] = useState('')
  const [todos, setToDos] = useState([])

  function writeToDo(e) {
    setInputVal(e.target.value)
  }

  function displayToDo() {
    if (inputVal !== "") {
      setToDos(prevToDos => [...prevToDos, inputVal])
      setInputVal('')
    }
  }

  function deleteToDo(todoIndex) {
    setToDos(prevToDos =>prevToDos.filter((prevToDos,prevToDoIndex) => prevToDoIndex !== todoIndex))
}

  return (
    <main>
      <h1>To do-List</h1>
      <Inputcontainer inputVal={inputVal} writeToDo={writeToDo} displayToDo={displayToDo} />
      <Todocontainer displayToDo={displayToDo} todos={todos} deleteToDo={deleteToDo} />
    </main>
  )
}

export default App