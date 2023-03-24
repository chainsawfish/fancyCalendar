import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    value: 0,
}

export const eventSlice = createSlice( {
    name: "calendarEvent",
    initialState,
    reducers: {
        addEvent: (state) => {

        },
        removeEvent: (state) => {

        }
    }
})

export const {addEvent, removeEvent} = eventSlice.actions;
export default eventSlice.reducer;