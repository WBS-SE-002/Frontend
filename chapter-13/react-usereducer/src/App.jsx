import { useState, useReducer } from 'react';
function App() {
    return (
        <>
            <Counter />
        </>
    );
}

export default App;

function countReducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        case 'CHANGE':
            return action.payload;
    }
}

function Counter() {
    // const [count, setCount] = useState(0);

    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <>
            <h2>Counter</h2>
            <p>count:{count}</p>
            <button onClick={() => dispatch({ type: 'INCREASE' })}>
                increase
            </button>
            <button onClick={() => dispatch({ type: 'DECREASE' })}>
                decrease
            </button>

            <input
                type='number'
                onChange={(e) =>
                    dispatch({ type: 'CHANGE', payload: +e.target.value })
                }
            />
            {/* <button onClick={() => setCount((prev) => prev + 1)}>
                increase
            </button>
            <button onClick={() => setCount((prev) => prev - 1)}>
                decrease
            </button> */}
        </>
    );
}
