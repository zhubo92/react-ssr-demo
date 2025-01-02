import React, {useState} from 'react';

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>首页1: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}