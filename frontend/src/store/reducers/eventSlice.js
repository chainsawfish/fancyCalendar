import {createSlice} from "@reduxjs/toolkit";
import {eventsArray} from "../../data/eventsArray.js";
const initialState = {
    events: [...eventsArray],
}

export const eventSlice = createSlice( {
    name: "calendarEvents",
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events.push(action.payload)
        },
        removeEvent: (state,action) => {
            state.events = state.events.filter(event => event.id !== action.payload)
        }
    }
})

export const {addEvent, removeEvent} = eventSlice.actions;
export default eventSlice.reducer;