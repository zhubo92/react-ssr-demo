import React from "react";
import * as styles from "./index.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {
    const isClient = useSelector((state) => state.env.isClient);

    return (
        <div className={isClient ? styles.header : ""}>
            <Link to="/">首页</Link>
            <Link to="/movies">电影列表</Link>
            <Link to="/detail/school">学校</Link>
            <Link to="/detail/company">公司</Link>
            <Link to="/counter">计数器</Link>
        </div>
    )
}

export default Header;
