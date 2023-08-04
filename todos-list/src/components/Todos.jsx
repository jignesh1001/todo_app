import React from 'react'
import TodoItems from './TodoItems'
import './Todos.css'
const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center fs-1 my-4'>Todos List</h3>
      {
        props.todos.length === 0? <div className='default-text fs-4'>No todos to display</div>: 
      
      props.todos.map((todo)=>{
          return(
          <TodoItems todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>)
      })}
    
      
      

    </div>
  )
}

export default Todos
