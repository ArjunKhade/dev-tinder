import { createSlice } from "@reduxjs/toolkit";


const connectionsSlice = createSlice({
    initialState: null,
    name:'connections',
    reducers:{
        addConnections: (state, action) => action.payload,
        removeConnection: () => null
    }
})

export const {addConnections, removeConnection} = connectionsSlice.actions;
export default connectionsSlice.reducer