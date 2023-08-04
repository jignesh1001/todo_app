import React from 'react'
import TodoItems from './TodoItems'
import './Todos.css'
const Todos = (props) => {
  let myStyle ={
    minHeight : "70vh",
  }
  return (
    <div className='container my-4' style={myStyle}>
      <h3 className='text-center fs-2 my-4'>Todos List</h3><hr />
      {
        props.todos.length === 0? <div className='text-center fs-4'>No todos to display</div>: 
      
      props.todos.map((todo)=>{
          return(
          <TodoItems todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>)
      })}
    
      
      

    </div>
  )
}

export default Todos
