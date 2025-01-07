import React, {useState} from 'react';
import * as styles from "./index.module.css";
import pngUrl from '@/assets/1.jpg';
import {useSelector} from "react-redux";
import {ENV_TYPE} from "@/store/slices/envSlice";

function Home() {
    const [count, setCount] = useState(0);
    const env = useSelector((state) => state.env.type);
    const isClient = env === ENV_TYPE.CLIENT;

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
