import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import EventsList from "./components/EventsList.jsx";
import EditForm from "./components/EditForm.jsx";

function App() {
    const [date, setDate] = useState(new Date())
    const [currentDay, setCurrentDay] = useState(null)
    const [showEdit, setShowEdit] = useState(false)

    const handleDayClick = (value) => {
        setCurrentDay(value)
    }

    const handleEdit = () => {
        setShowEdit(true)
    }

    return (
        <>
            <div className="flex flex-row justify-center gap-8 mt-10">
                <Calendar onChange={setDate} value={date} onClickDay={handleDayClick}/>
                {currentDay && <EventsList currentDay={date}/>}
            </div>
            <div className="flex flex-col items-center">
                <div onClick={handleEdit}
                     className='w-[300px] border-2 cursor-pointer mt-12 p-2 rounded-3xl text-center text-xl'>
                    Добавить событие
                </div>
                {showEdit && currentDay && <div className="w-[300px] border-2  mt-12 p-2  text-center">
                    <EditForm currentDay={currentDay}/>
                </div>}
            </div>
        </>
    )
}

export default App
