import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ToDoState from './components/context/ToDoState.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToDoState>
            <App />
        </ToDoState>
    </StrictMode>
);
