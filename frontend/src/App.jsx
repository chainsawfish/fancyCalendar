import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import EventsList from "./components/EventsList.jsx";

function App() {
    const [date, setDate] = useState(new Date())
    const [currentDay, setCurrentDay] = useState(null)
    const handleDayClick = (value) => {
        setCurrentDay(value)
    }

    return (
        <div className="flex flex-row justify-center gap-8 mt-10">
            <Calendar onChange={setDate} value={date} onClickDay={handleDayClick}/>
            <EventsList currentDay={currentDay}/>
        </div>
    )
}

export default App
