import React, {useEffect, useState} from 'react';
import * as styles from "./index.css";

function Home() {
    const [count, setCount] = useState(0);
    const [clientRendered, setClientRendered] = useState(false);

    useEffect(() => {
        setClientRendered(true);
    }, []);

    return (
        <div>
            <h1>首页1: {count}</h1>
            <button className={clientRendered ? styles.beautifulButton : ""} onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default Home;
