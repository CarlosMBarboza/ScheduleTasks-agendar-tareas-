import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos,updateTodo, deleteTodo}) => {
    return (
        <>
        {
          todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo } />
          ))
        }
        </>
    );
};
