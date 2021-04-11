interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
}


type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
    deleteTodo: (todo: ITodo) => void;
};
