import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addEvent, setEditEvent} from "../store/slices/eventSlice.js";

const EditForm = ({currentDay}) => {
    // TODO: error handling for fields
    //const [error, setIsError] = useState(null)
    const dispatch = useDispatch()
    const editEvent = useSelector((state) => state.calendarEvents.editEvent)
    const uniqueId = Date.now().toString(36);

    const [event, setEvent] = useState({
        id: editEvent?.id || uniqueId,
        eventName: editEvent?.eventName || '',
        eventType: editEvent?.eventType || '',
        date: editEvent?.date || currentDay.toLocaleDateString(),
        destination: editEvent?.destination || '',
        eventTime: editEvent?.eventTime || '',
        amountMoney: editEvent?.amountMoney || '',
        text: editEvent?.text || '',
    });

    useEffect(() => {
        setEvent({
            id: editEvent?.id || uniqueId,
            eventName: editEvent?.eventName || '',
            eventType: editEvent?.eventType || '',
            date: editEvent?.date || currentDay.toLocaleDateString(),
            destination: editEvent?.destination || '',
            eventTime: editEvent?.eventTime || '',
            amountMoney: editEvent?.amountMoney || '',
            text: editEvent?.text || '',
        });
    }, [currentDay, editEvent]);

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
            id: uniqueId,
            eventName: '',
            eventType: '',
            date: currentDay.toLocaleDateString(),
            destination: '',
            eventTime: '',
            amountMoney: '',
            text: '',
        });
        dispatch(setEditEvent(null))
    };

    const handleCancelClick = (e) => {
        e.preventDefault()
        setEvent({
            id: uniqueId,
            eventName: '',
            eventType: '',
            date: currentDay?.toLocaleDateString(),
            destination: '',
            eventTime: '',
            amountMoney: '',
            text: '',
        });
        dispatch(setEditEvent(null))
    };

    return (
        <form
            className="flex flex-col justify-center items-center p-2 rounded-xl mt-2 gap-2 border-2 border-dashed shadow-md border-gray-500 w-[350px] h-[320px]">
            <select className='select w-full max-w-xs' name="eventType" value={event?.eventType}
                    onChange={handleInputChange}>
                <option value="">Выберите тип события:</option>
                <option value="Holiday">Праздничные дни</option>
                <option value="Event">Мероприятия</option>
                <option value="Note">Пометки / Другое</option>
            </select>
            <input className='input input-bordered w-full max-w-xs'
                   placeholder="Название события"
                   type="text"
                   name="eventName"
                   value={event?.eventName}
                   onChange={handleInputChange}
            />
            {event?.eventType === 'Event' && <input className='input input-bordered w-full max-w-xs'
                                                      type="text"
                                                      placeholder="Адрес"
                                                      name="destination"
                                                      value={event?.destination}
                                                      onChange={handleInputChange}
            />}
            {event?.eventType === 'Event' && <input className='input input-bordered w-full max-w-xs'
                   type="text"
                   placeholder="Время:"
                   name="eventTime"
                   value={event?.eventTime}
                   onChange={handleInputChange}
            />}
            {event?.eventType === 'Holiday' && <input className='input input-bordered w-full max-w-xs'
                   type="number"
                   placeholder="Лимит денег"
                   name="amountMoney"
                   value={event?.amountMoney}
                   onChange={handleInputChange}
            />}
            {event?.eventType === 'Note' && <input className='input input-bordered w-full max-w-xs'
                                                      type="text"
                                                      placeholder="Текст заметки"
                                                      name="text"
                                                      value={event?.text}
                                                      onChange={handleInputChange}
            />}
            {error && <div className="text-red-600 text-sm">Ошибка ввода</div>}
            <div className='flex gap-4 m-auto'>
                <button className="btn btn-success" onClick={handleSaveClick}>Сохранить</button>
                <button className="btn btn-error" onClick={handleCancelClick}>Отмена</button>
            </div>
        </form>
    );
};

export default EditForm;
