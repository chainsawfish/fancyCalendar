import React, {useEffect} from 'react';
import Event from "./Event.jsx";
import {useSelector} from "react-redux";

const EventsList = ({currentDay}) => {

    const events = useSelector(state => state.calendarEvents.events)
    useEffect(() => {
        console.log(events)
    },[events])
    return (
        <div>
            <h1 className="text-center text-3xl">List of events on: {currentDay?.getDate()}</h1>
            {events.filter(eventObj => eventObj.date === currentDay.toLocaleDateString())
                .map((eventObj, index) => {
                    return (
                        <Event key={index} today={eventObj}/>
                    )
                })}
        </div>
    );
};

export default EventsList;