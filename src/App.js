import { useEffect, useState } from 'react'
import './App.css';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

const App=()=> {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const handleDelete = (todo)=>{
     console.log("I am handleDelete", todo)
     setTodos(todos.filter((e)=>{
      return e!==todo;
     }))
     localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc)=>{
     console.log("I am adding todo", title, desc)
     let sno;
     if(todos.length===0){
      sno =1;
     }
     else{
      sno = todos[todos.length-1].sno + 1;
     }
     const myTodo= {
      sno: sno,
      title: title,
      desc: desc,      
     }
     setTodos([...todos, myTodo])
     console.log(myTodo)      
  }
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{    
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  return (
    <div className= "App"> 
    <BrowserRouter>    
     <Header title = "My Todos List"/>     
     <AddTodo addTodo = {addTodo}/>
     <Todos todos = {todos} handleDelete = {handleDelete}/> 
     <Routes>
      <Route exact path = "/home" element = {<Home/>}></Route>
      <Route exact path = "/about" element = {<About/>}></Route>
     </Routes>    
     <Footer/> 
     </BrowserRouter>
    </div>
  );
}

export default App;
