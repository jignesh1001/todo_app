import Header from './components/header';
import Todos from './components/Todos'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import { useState,useEffect} from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
        initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
 //Deleting todos
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  } 

  // Adding todos
  const addTodo = (title,desc) =>{
    let sno;
    if(todos.length === 0){
      sno = 1;
    }
    else{ sno = todos[todos.length-1].sno + 1;}
    
    const myTodo = {
      sno : sno,
      title : title,
      desc: desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
   }
 

  const [todos,setTodos] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
    <Router>
      <div>
        <Header title="MyTodoList" searchBar={false} name="CodeWithLove" />
        <Routes>
          <Route path="/" element={<><AddTodo addTodo = {addTodo}/>
          <Todos todos = {todos} onDelete = {onDelete}/></>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
