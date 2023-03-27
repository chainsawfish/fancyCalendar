import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Event from "./Event.jsx";

const EventsList = ({currentDay}) => {

    const events = useSelector(state => state.calendarEvents.events)
    useEffect(() => {
        console.log(events)
    }, [events])
    return (
        <div className='min-w-[200px] break-words border-2 p-2 border-dashed rounded-xl border-gray-400'>
            <h1 className="text-xl">Список дел на {currentDay.toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })}</h1>
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
