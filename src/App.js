import React, {useState, useEffect} from 'react';
import './App.css';

//Components
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import logo from './react.png'

function App() {

    
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus]=useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

    //Use Effect
    useEffect(()=>{
      getTodosFromLS();
    }, [])

    useEffect(()=>{
     filterHandler();
     saveLocalTodos();
    }, [todos, status])

  //Functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo=>todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo=>todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //Save to local storage
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  //get items from local storage
  const getTodosFromLS = () => {

    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let items = JSON.parse(localStorage.getItem('todos'));
      setTodos(items);
    }
  }






  return (
    <div className="App">
    <header>
      <h1>Pyong's Todo List</h1>
      <img className="logo" src={logo} alt=""/>
    </header>
    <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
