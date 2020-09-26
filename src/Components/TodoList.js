import React from 'react';
import Todo from './Todo'

const TodoList = ({todos,filteredTodos, setTodos})=>{
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {
          filteredTodos.map((todo)=>(
            <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id}/>
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList