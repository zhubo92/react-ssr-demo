import React from 'react';
import {Outlet} from "react-router-dom";

function Movies() {
    return (
        <div>
            <Outlet />
            <h1>电影列表</h1>
            <ul>
                <li>电影1</li>
                <li>电影2</li>
            </ul>
        </div>
    )
}

export default Movies;
