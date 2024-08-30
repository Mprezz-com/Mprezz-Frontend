// // src/redux/searchSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// export const searchSlice = createSlice({
//   name: 'search',
//   initialState: {
//     term: '',
//   },
//   reducers: {
//     setSearchTerm: (state, action) => {
//       state.term = action.payload;
//     },
//   },
// });

// export const { setSearchTerm } = searchSlice.actions;

// export default searchSlice.reducer;

import { createSlice, configureStore } from "@reduxjs/toolkit";

export const searchSliceOption = createSlice({
    name: "search",
    initialState: {
        content: null,
    },
    reducers: {
        setSearchContent: (state, action) => {
            console.log("This is action from redux", action);
            state.content = action.payload;
        },
    },
});

export const { setSearchContent } = searchSliceOption.actions;

export default searchSliceOption.reducer;
