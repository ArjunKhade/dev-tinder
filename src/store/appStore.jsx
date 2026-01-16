import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './appSlice'

const appStore = configureStore({
    reducer: {
     user: UserSlice
    }
})


export default appStore;