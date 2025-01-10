let initialState = {
    counter: {
        value: 0,
    },
    env: {
        isClient: false,
    },
    movies: {
        movies: [],
        status: "idle", // idle空闲 loading请求中 completed请求成功 failed请求失败
        error: null,
    },
}

if(typeof window !== 'undefined' && window.storeState) {
    initialState = window.storeState;
}

export const {movies, env, counter} = initialState;

export default initialState;
