import { TodoContext } from './ToDoContext';
import { useState } from 'react';
import { useReducer } from 'react';
import { addToDo } from '../../utils/todo';

function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return addToDo(state, action.payload);
        }
        case 'TOGGLE_TODO': {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: true };
                }
                return todo;
            });
        }
    }
}

export default function ToDoState({ children }) {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [filter, setFilter] = useState('all');

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed' && todo.completed) return true;
        if (filter === 'active' && !todo.completed) return true;
        return false;
    });

    return (
        <TodoContext
            value={{
                todos: filteredTodos,
                dispatch,
                filter,
                setFilter,
            }}
        >
            {children}
        </TodoContext>
    );
}
