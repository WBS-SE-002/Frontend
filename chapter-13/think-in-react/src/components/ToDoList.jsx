import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
}

export default ToDoList;
