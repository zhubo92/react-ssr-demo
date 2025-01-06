import React, {useEffect, useState} from "react";
import * as styles from "./index.module.css";
import {Link} from "react-router-dom";

function Header() {
    const [clientRendered, setClientRendered] = useState(false);

    useEffect(() => {
        setClientRendered(true);
    }, []);

    return (
        <div className={clientRendered ? styles.header : ""}>
            <Link to="/">首页</Link>
            <Link to="/movies">电影列表</Link>
            <Link to="/detail/school">学校</Link>
            <Link to="/detail/company">公司</Link>
        </div>
    )
}

export default Header;
