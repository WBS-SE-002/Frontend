function ToDoItem({ todo, toggleTodo }) {
    return (
        <li className='flex items-center mb-2'>
            <label>
                <input
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    type='checkbox'
                    className='mr-2'
                />
                {todo.text}
            </label>
        </li>
    );
}

export default ToDoItem;
