import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar-slice",
    initialState:{
        isSidebarVisisble:false
    },
    reducers:{
        toggleSideBar:(state)=>{
            state.isSidebarVisisble= !state.isSidebarVisisble
        }
    }
})

export const {toggleSideBar} = sidebarSlice.actions
export default sidebarSlice.reducer

