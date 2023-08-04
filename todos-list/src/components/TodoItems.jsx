import React from 'react'
import './TodoItems.css'

const TodoItems = ({todo,onDelete}) => {
  return (
    <div className='items'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm  mx-4 " onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItems
