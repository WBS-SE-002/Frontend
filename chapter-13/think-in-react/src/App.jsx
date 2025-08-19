import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/TodoList';
function App() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    function toggleTodo(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed' && todo.completed) return true;
        if (filter === 'active' && !todo.completed) return true;
        return false;
    });

    return (
        <div className='max-w-3xl mx-auto p-4'>
            <AddToDo setTodos={setTodos} />
            <FilterComponent setFilter={setFilter} />
            <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
        </div>
    );
}

export default App;
