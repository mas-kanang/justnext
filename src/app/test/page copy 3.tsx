'use client'
import { useReducer } from 'react';

interface State {
    count: number
};

type CounterAction =
    | { type: "reset" }
    | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setCount":
            return { ...state, count: action.value };
        default:
            throw new Error("Unknown action");
    }
}

export default function App() {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
    const addNine = () => dispatch({ type: "setCount", value: state.count + 9 });
    const reset = () => dispatch({ type: "reset" });

    return (
        <div className='flex  flex-col'>
            <h1>Welcome to my counter</h1>

            <p>Count: {state.count}</p>
            <button onClick={addNine}>Add 9</button>
            <button onClick={addFive}>Add 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
