import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useSelector, useStore} from "react-redux";
import {fetchMovies, selectAllMovies, selectMoviesError, selectMoviesStatus} from "@/store/slices/moviesSlice";

Movies.loadData = (store) => {
    return store.dispatch(fetchMovies({page: 12, pageSize: 23}));
}

function Movies() {
    const store = useStore();
    const moviesData = useSelector(selectAllMovies);
    const moviesStatus = useSelector(selectMoviesStatus);
    const moviesError = useSelector(selectMoviesError);

    useEffect(() => {
        if(window.requestPath !== "/movies") Movies.loadData(store);
    }, []);

    let content;

    if(moviesStatus === "loading") {
        content = <div>loading...</div>;
    } else if(moviesStatus === "completed") {
        content = moviesData.map(item => (
            <li key={item.id}>{item.name}</li>
        ));
    } else if(moviesStatus === "failed") {
        content = <div>{moviesError}</div>
    }

    return (
        <div>
            <Outlet />
            <h1>电影列表</h1>
            {content}
        </div>
    )
}

export default Movies;
