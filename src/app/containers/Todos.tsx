import * as React from "react";

import { TodoContext } from "../context/TodoContext";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";

// container that must return a card with list of todos and an option to add a todo
const Todos = () => {
  const { todos, updateTodo, saveTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;
  
  const AddEmptyTodo = () =>{

  }

  return (
    <>
      <div>
        {todos.map((todo: ITodo) => (
          <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
        ))}
      </div>
      <div>
        <button onClick={AddEmptyTodo}>add</button>
      </div>
    </>
  );
};

export default Todos;
