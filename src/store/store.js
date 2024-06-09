import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from './sidebar-slice.js'

const store = configureStore({
    reducer:{
        sidebar: sidebarSlice,
    }
})


export default store