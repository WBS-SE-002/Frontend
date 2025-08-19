import { DemoContext } from './DemoContext';
import { useState } from 'react';

export default function DemoState({ children }) {
    const [firstName, setFirstName] = useState('Karl');
    return (
        <DemoContext value={{ firstName, setFirstName }}>
            {children}
        </DemoContext>
    );
}
