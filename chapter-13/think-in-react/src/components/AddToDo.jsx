import { useState } from 'react';

function AddToDo({ setTodos }) {
    const [newTodo, setNewTodo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!newTodo.trim()) return alert('Please enter a to-do item');
        setTodos((prevTodos) => [
            { id: Date.now(), text: newTodo, completed: false },
            ...prevTodos,
        ]);
        setNewTodo('');
    }
    return (
        <form onSubmit={handleSubmit} className='mb-4 flex'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                type='text'
                name='todo'
                placeholder='Add a new to-do'
                className='flex-1 border rounded px-2 py-1 mr-2'
            />
            <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded'
            >
                Add
            </button>
        </form>
    );
}

export default AddToDo;
