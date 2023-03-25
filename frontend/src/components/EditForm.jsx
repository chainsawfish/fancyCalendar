import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addEvent} from "../store/reducers/eventSlice.js";
const EditForm = ({currentDay}) => {
    const events = useSelector((state) => state.calendarEvents.events)
    const dispatch = useDispatch()
    const [event, setEvent] = useState({
        id:  events.length ? events.length+1 : 1 ,
        eventName: '',
        eventType: '',
        date: currentDay.toLocaleDateString(),
        destination: '',
        eventTime: '',
        errorMessage: ''
    });

    useEffect(() => {
        setEvent(() => ({ ...event, date: currentDay.toLocaleDateString() }));

    }, [currentDay]);

    const handleInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setEvent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveClick = (e) => {
        e.preventDefault()
        dispatch(addEvent(event))
        setEvent({
            id: events.length+1,
            eventName: '',
            eventType: '',
            date: currentDay.toLocaleDateString(),
            destination: '',
            eventTime: '',
            errorMessage: ''
        });

    };

    const handleCancelClick = (e) => {
        e.preventDefault()
        setEvent({
            id: events.length+1,
            eventName: '',
            eventType: '',
            date: currentDay.toLocaleDateString(),
            destination: '',
            eventTime: '',
            errorMessage: ''
        });
    };

    return (
        <form className="flex flex-col justify-center items-center p-8 rounded-xl mt-4 gap-2 border-2">
            <div>
                <input className='input input-bordered w-full max-w-xs'
                       placeholder="Название события"
                       type="text"
                       id="event-name"
                       name="eventName"
                       value={event.eventName}
                       onChange={handleInputChange}
                />
            </div>
            <div>
                <select className='select w-full max-w-xs' id="event-type" name="eventType" value={event.eventType} onChange={handleInputChange}>
                    <option value="">Тип события</option>
                    <option value="Holiday">Праздничные дни</option>
                    <option value="Event">Мероприятия</option>
                    <option value="Other">Пометки / Другое</option>
                </select>
            </div>
            <div>
                <input className='input input-bordered w-full max-w-xs'
                    type="text"
                    placeholder="Место проведения"
                    id="destination"
                    name="destination"
                    value={event.destination}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input className='input input-bordered w-full max-w-xs'
                    type="text"
                    placeholder="Время"
                    id="event-time"
                    name="eventTime"
                    value={event.eventTime}
                    onChange={handleInputChange}
                />
            </div>
            {event.errorMessage && <div className="text-red-600 text-sm">{event.errorMessage}</div>}
            <div className='flex gap-4 m-auto'>
                <button className="btn btn-success " onClick={handleSaveClick}>Сохранить</button>
                <button className="btn btn-error" onClick={handleCancelClick}>Отмена</button>
            </div>
        </form>
    );
};

export default EditForm;
