import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh"
  }
  return (
    <div className= "container" style = {myStyle}>
      <h3 className = "my-3">Todo List</h3>
      {props.todos.length===0 ? ("No Todos to Display"):
      props.todos.map((todo)=>{
          return( 
            <>
              <TodoItem todo = {todo} key = {todo.sno} handleDelete = {props.handleDelete}/><hr></hr>
            </>
          )
      })}
      
     
    </div>
  )
}

export default Todos