import React, {useEffect, useState} from 'react';
import * as styles from "./index.css";
import pngUrl from '@/assets/1.jpg';

function Home() {
    const [count, setCount] = useState(0);
    const [clientRendered, setClientRendered] = useState(false);

    useEffect(() => {
        setClientRendered(true);
    }, []);

    const MyImg = clientRendered ? <img src={pngUrl} width={500} alt="" /> : "";

    return (
        <div>
            <h1>首页1: {count}</h1>
            {MyImg}
            <div className={clientRendered ? styles.bg : ""}></div>
            <button className={clientRendered ? styles.beautifulButton : ""} onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default Home;
