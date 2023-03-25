import {createSlice} from "@reduxjs/toolkit";
const jsonArr = localStorage.getItem("fancyCalendar");

const savedState = jsonArr !== null ? JSON.parse(localStorage.getItem("fancyCalendar")) : []

const initialState = {
    events: [...savedState]
}

export const eventSlice = createSlice( {
    name: "calendarEvents",
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events.push(action.payload)
            localStorage.setItem("fancyCalendar", JSON.stringify(state.events))
        },
        removeEvent: (state,action) => {
            state.events = state.events.filter(event => event.id !== action.payload)
        }
    }
})

export const {addEvent, removeEvent} = eventSlice.actions;
export default eventSlice.reducer;