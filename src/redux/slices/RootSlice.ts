import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Movie Title",
        director: "Director",
        rating: "Movie Rating",
        run_time: "Run Time"
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseDirector: (state, action) => { state.director = action.payload},
        chooseRating: (state, action) => { state.rating = action.payload},
        chooseRunTime: (state, action) => { state.run_time = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseDirector, chooseRating, chooseRunTime } = rootSlice.actions