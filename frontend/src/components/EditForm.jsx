import React, {useState} from 'react';

const EditForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [destination, setDestination] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEventNameChange = (event) => {
        setEventName(event.target.value);
    };

    const handleEventTypeChange = (event) => {
        setEventType(event.target.value);
    };

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleEventTimeChange = (event) => {
        setEventTime(event.target.value);
    };

    const handleSaveClick = (event) => {
        event.preventDefault();
        if (eventName.length < 4) {
            setErrorMessage('Значение должно быть более 4 строк');
        } else {
            // Save event data here
            setErrorMessage('');
            setEventName('');
            setEventType('');
            setDestination('');
            setEventTime('');
        }
    };

    const handleCancelClick = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setEventName('');
        setEventType('');
        setDestination('');
        setEventTime('');
    };

    return (
        <form className="flex flex-col justify-start items-start p-2">
            <div>
                <label htmlFor="event-name">Название события:</label>
                <input className="border-2"
                       type="text"
                       id="event-name"
                       value={eventName}
                       onChange={handleEventNameChange}
                />
            </div>
            <div>
                <select id="event-type" value={eventType} onChange={handleEventTypeChange}>
                    <option value="">Тип события</option>
                    <option value="Fun">Отдых</option>
                    <option value="Work">Работа</option>
                    <option value="Sport">Спорт</option>
                </select>
            </div>
            <div>
                <label htmlFor="destination">Место:</label>
                <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={handleDestinationChange}
                />
            </div>
            <div>
                <label htmlFor="event-time">Время:</label>
                <input
                    type="text"
                    id="event-time"
                    value={eventTime}
                    onChange={handleEventTimeChange}
                />
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <div>
                <button onClick={handleSaveClick}>Сохранить</button>
                <button onClick={handleCancelClick}>Отмена</button>
            </div>
        </form>
    );
};

export default EditForm;
