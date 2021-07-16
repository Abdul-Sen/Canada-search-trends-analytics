import * as React from 'react';
const DEFAULT_TODOS =[
  {
      id: 1,
      title: "post 1",
      description: "this is a description",
      status: false
    },
    {
      id: 2,
      title: "post 2",
      description: "this is a description",
      status: true
    }
];

export const TodoContext = React.createContext< TodoContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ( { children } ) => {
    const [todos, setTodos] = React.useState<ITodo[]>(DEFAULT_TODOS);

    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
          id: Math.random(), // not really unique - but fine for this example
          title: todo.title,
          description: todo.description,
          status: false
        };
        setTodos([...todos, newTodo]);
      };
    
      const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
          if (todo.id === id) {
            todo.status = true;
            setTodos([...todos]);
          }
        });
      };

      const deleteTodo = (todo: ITodo) => {
       let newTodos: ITodo[] = todos.splice(todos.indexOf((todo)), 1);
       setTodos([...newTodos]);
      }

      return (
        <TodoContext.Provider value={{ todos, saveTodo, updateTodo, deleteTodo }}>
          {children}
        </TodoContext.Provider>
      );
};

export default TodoProvider;