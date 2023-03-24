import {configureStore} from "@reduxjs/toolkit";
import eventSlice from "./reducers/eventSlice.js";

export default configureStore({
    reducer: {
        calendarEvents: eventSlice,
    }
})