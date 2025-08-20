import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/TodoList';
function App() {
    return (
        <div className='max-w-3xl mx-auto p-4'>
            <AddToDo />
            <FilterComponent />
            <ToDoList />
        </div>
    );
}

export default App;
