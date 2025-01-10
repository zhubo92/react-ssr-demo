import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectIsClient} from "@/store/slices/envSlice";
import {fetchMovies, selectAllMovies, selectMoviesError, selectMoviesStatus} from "@/store/slices/moviesSlice";

function Movies() {
    const isClient = useSelector(selectIsClient);
    const moviesData = useSelector(selectAllMovies);
    const dispatch = useDispatch();
    const moviesStatus = useSelector(selectMoviesStatus);
    const moviesError = useSelector(selectMoviesError);

    useEffect(() => {
        if (isClient) dispatch(fetchMovies({
            page: 3,
            pageSize: 151
        }));
    }, [isClient]);

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
