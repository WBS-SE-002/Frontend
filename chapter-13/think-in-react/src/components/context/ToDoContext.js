import { createContext, use } from 'react';

export const TodoContext = createContext();

export function useToDoContext() {
    const context = use(TodoContext);

    if (!context) {
        throw new Error('useToDo must be used within a TodoState');
    }

    return context;
}
