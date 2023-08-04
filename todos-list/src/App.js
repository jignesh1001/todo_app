import Header from './components/header';
import Todos from './components/Todos'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo';
import './App.css';
import { useState } from 'react';

function App() {
  

  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  } 

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


  const [todos,setTodos] = useState([ ])

  return (
    <>
    <Header title = "MyTodoList" searchBar={false } name = "CodeWithLove"/>
    <AddTodo addTodo = {addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
