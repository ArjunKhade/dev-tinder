import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './appSlice';
import FeedReducer from './feedSlice';

const appStore = configureStore({
    reducer: {
     user: UserSlice,
     feed: FeedReducer,
    }
})


export default appStore;