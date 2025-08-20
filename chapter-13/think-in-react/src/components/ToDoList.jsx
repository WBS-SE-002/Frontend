import ToDoItem from './ToDoItem';
import { useToDoContext } from './context/ToDoContext';

function ToDoList() {
    const { todos } = useToDoContext();
    return (
        <ul>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default ToDoList;
