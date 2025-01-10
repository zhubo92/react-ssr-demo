import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMoviesApi} from "@/api";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (ThunkArg) => {
        const {data: {list}} = await getMoviesApi(ThunkArg);
        return list;
    },
);

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status: "idle", // idle空闲 loading请求中 completed请求成功 failed请求失败
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state, action) => {
                console.log("pending")
                state.status = "loading";
                state.movies = [];
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                console.log("fulfilled", action.payload)
                state.status = "completed";
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                console.log("rejected");

                state.status = "failed";
                state.movies = [];
                state.error = action.error.message ?? "Unknown error";
            });
    }
});

export const selectAllMovies = state => state.movies.movies;
export const selectMoviesStatus = state => state.movies.status;
export const selectMoviesError = state => state.movies.error;

export default moviesSlice.reducer;
