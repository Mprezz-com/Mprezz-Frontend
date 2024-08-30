// src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import searchReducer from './searchSlice';

// export const store = configureStore({
//   reducer: {
//     search: searchReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import SearchOption from "./SearchOption";

const store = configureStore({
    reducer: {
        search: SearchOption,
    },
});

export default store;
