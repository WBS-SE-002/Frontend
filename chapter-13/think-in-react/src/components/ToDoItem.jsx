import { useToDoContext } from './context/ToDoContext';
function ToDoItem({ todo }) {
    const { dispatch } = useToDoContext();
    return (
        <li className='flex items-center mb-2'>
            <label>
                <input
                    checked={todo.completed}
                    onChange={() =>
                        dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
                    }
                    type='checkbox'
                    className='mr-2'
                />
                {todo.text}
            </label>
        </li>
    );
}

export default ToDoItem;
