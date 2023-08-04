import Header from './components/header';
import Todos from './components/Todos'
import Footer from './components/Footer'
import './App.css';
import { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("Deleted of item",todo.sno)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  } 

  const [todos,setTodos] = useState( [
    {
      sno: 1,
      title: "Go To Gym",
      desc: " Eat Sleep Lift Eat Sleep Lift Reapeat Sleep Lift ReapeattEat Sleep Lift ReapeatEat Sleep Lift ReapeatEat Sleep Lift Reapeat"
    },
    {
      sno: 2,
      title: "Go To GroceryShop",
      desc: "Go To Grocercy"
    },
    {
      sno: 3,
      title: "Go To Market",
      desc: "Go To Market"
    },
    {
      sno: 4,
      title: "Go To PlayGround",
      desc: "Go To PlayGround Go To PlayGround Go To PlayGround Go To PlayGround Go To PlayGround"
    },
    {
      sno: 5,
      title: "Go To PlayGround",
      desc: "Go To PlayGround Go To PlayGround Go To PlayGround Go To PlayGround Go To PlayGround"
    },
    {
      sno: 6,
      title: "Go To SuperMarket",
      desc: "Go To PlayGround Go To PlayGround Go To PlayGround Go To PlayGround Go To PlayGround"
    }
  ])
  return (
    <>
    <Header title = "MyTodoList" searchBar={false } name = "CodeWithLove"/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
