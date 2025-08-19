import { createContext, use } from 'react';

export const DemoContext = createContext();

export function useDemoContext() {
    const context = use(DemoContext);

    if (!context)
        throw new Error(
            'useDemoContext must be used within a DemoContextProvider'
        );

    return context;
}
