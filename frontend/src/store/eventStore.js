import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "./reducers/eventReducer.js";

export default configureStore({
    reducer: {
        events: eventReducer,
    }
})