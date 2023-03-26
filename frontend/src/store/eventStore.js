import {configureStore} from "@reduxjs/toolkit";
import eventSlice from "./slices/eventSlice.js";

export default configureStore({
    reducer: {
        calendarEvents: eventSlice,
    }
})