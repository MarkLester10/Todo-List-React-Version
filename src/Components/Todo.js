import React from 'react';


const Todo = ({todo, todos, setTodos}) => {

  //Events
  const deleteHandler = (e) =>{
    const element = e.target.parentElement;
    element.classList.add("fall");

    setTimeout(()=>{
      setTodos(todos.filter((el) => el.id!== todo.id))
    }, 500);
    e.preventDefault();
  }

  const completeHandler = (e) => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
    e.preventDefault();
  }

  return(
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.text}</li>
      <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  );
}

export default Todo;