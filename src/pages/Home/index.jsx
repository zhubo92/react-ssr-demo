import React, {useState} from 'react';
import * as styles from "./index.module.css";
import pngUrl from '@/assets/1.jpg';
import {useSelector} from "react-redux";

function Home() {
    const [count, setCount] = useState(0);
    const isClient = useSelector((state) => state.env.isClient);

    const MyImg = isClient ? <img src={pngUrl} width={200} alt="" /> : "";

    return (
        <div>
            <h1>首页: {count}</h1>
            <h1></h1>
            <button className={isClient ? styles.beautifulButton : ""} onClick={() => setCount(count + 1)}>+1</button>
            <div className={isClient ? styles.bg : ""}></div>
            {MyImg}
        </div>
    );
}

export default Home;
