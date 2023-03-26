import {createSlice} from "@reduxjs/toolkit";
const jsonArr = localStorage.getItem("fancyCalendar");
const savedState = jsonArr !== null ? JSON.parse(jsonArr) : []

const initialState = {
    events: [...savedState],
    editId: null,
    editEvent: null,
}

export const eventSlice = createSlice( {
    name: "calendarEvents",
    initialState,
    reducers: {
        addEvent: (state, action) => {
            const eventIndex = state.events.findIndex(event => event.id === action.payload.id);
            if (eventIndex !== -1) {
                state.events[eventIndex] = action.payload;
            } else {
                state.events.push(action.payload);
            }
            localStorage.setItem("fancyCalendar", JSON.stringify(state.events))
            state.editId = null
        },
        removeEvent: (state,action) => {
            state.events = state.events.filter(event => event.id !== action.payload)
            localStorage.setItem("fancyCalendar", JSON.stringify(state.events))
        },
        setEditId: (state, action) => {
            state.editId = action.payload
        },
        setEditEvent: (state, action) => {
            state.editEvent = action.payload
        }
    }
})

export const {addEvent, removeEvent, setEditId, setEditEvent} = eventSlice.actions;
export default eventSlice.reducer;
