import React from 'react'

const TodoItem = ({todo, handleDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className = "btn btn-sm btn-danger" onClick = {()=>handleDelete(todo)}>Delete</button>
    </div>
  )
}

export default TodoItem