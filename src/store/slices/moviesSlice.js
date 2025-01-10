import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMoviesApi} from "@/api";
import {movies} from "@/store/initialState";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (ThunkArg) => {
        const {data: {list}} = await getMoviesApi(ThunkArg);
        return list;
    },
);

export const moviesSlice = createSlice({
    name: "movies",
    initialState: movies,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state, action) => {
                state.status = "loading";
                state.movies = [];
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "completed";
                state.movies = action.payload;
                state.error = null;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
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
