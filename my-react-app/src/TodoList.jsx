import React, { useState } from 'react'
import "./TodoList.css"

const TodoList = () => {
  const [tasks,setTask]=useState([])
  const [newTask,setNewTask]=useState("")

  function handleInputChange(event){
    setNewTask(event.target.value)
  }

  function handleAdd(){
    setTask((prevTasks=>[...prevTasks, newTask]))
    setNewTask("")
  }

  function handleDelete(index){
    const updatedTasks=tasks.filter((_,i)=>i!==index)
    setTask(updatedTasks)
  }
  
  function handleMoveUp(index){
    if(index>0){
      let newTaskOrder=[...tasks];
      [newTaskOrder[index-1],newTaskOrder[index]]=[newTaskOrder[index],newTaskOrder[index-1]]
      setTask(newTaskOrder)
    }
  }
  
  function handleMoveDown(index){
    if(index<tasks.length-1){
      let newTaskOrder=[...tasks];
      [newTaskOrder[index],newTaskOrder[index+1]]=[newTaskOrder[index+1],newTaskOrder[index]]
      setTask(newTaskOrder)
    }
  }

  return (
    <div className='todo-container container-fluid vh-100 d-flex align-items-center pt-4 flex-column'>
      <div className='row'>
        <div className='col'>
          <h1 className='display-2'>
            To-Do List
          </h1>
        </div>
      </div>
      <div className='row mt-3 w-50'>
        <div className='col-10'>
          <input className='form-control form-control-lg' value={newTask} onChange={handleInputChange} placeholder='Add a task to your To-Do List...'></input>
        </div>
        <button className='col-2 btn btn-success' onClick={handleAdd}> Add</button>
      </div>
      <div>
        <ol className='task-list'>
              {tasks.map((element,index)=>
              <li key={index}>
                <div className='tasks d-flex align-items-space-between gap-2 mt-5 p-3'>
                <span className='task-text'>{element}</span>
                <button className='btn btn-danger align-self-center' onClick={()=>handleDelete(index)}>Delete</button>
                <button className='btn btn-primary align-self-center' onClick={()=>handleMoveUp(index)}>Move Up</button>
                <button className='btn btn-primary align-self-center' onClick={()=>handleMoveDown(index)}>Move Down</button>
                </div>
              </li>)}
        </ol>
      </div>
    </div>
  )
}

export default TodoList
