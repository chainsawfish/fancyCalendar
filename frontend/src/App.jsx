import {useState} from "react";
import Calendar from "react-calendar";
import EventsList from "./components/EventsList.jsx";
import EditForm from "./components/EditForm.jsx";
import {useSelector} from "react-redux";

function App() {
    const [date, setDate] = useState(new Date())
    const [currentDay, setCurrentDay] = useState(null)
    const [showEdit, setShowEdit] = useState(false)
    const events = useSelector(state => state.calendarEvents.events)
    const handleDayClick = (value) => {
        setCurrentDay(value)
    }

    const handleEdit = () => {
        setShowEdit(true)
    }

    const hasEvents = ({date}) => {
        const validArray = events.filter(obj => {
            if (obj.date === date.toLocaleDateString()) {
                console.log(obj.date, '===', date.toLocaleDateString())
                return 1
            }

        })
        console.log(validArray)
        return validArray.length ? <p className="text-3xl text-green-600 relative top-[-10px]">*</p> : null
    }

    return (
        <>
            <div className="flex flex-row justify-center gap-8 mt-10">
                <Calendar onChange={setDate} value={date} onClickDay={handleDayClick} tileContent={hasEvents}/>
                {currentDay && <EventsList currentDay={date}/>}
            </div>
            <div className="flex flex-col items-center">
                <div onClick={handleEdit}
                     className='btn w-[300px] border-2 cursor-pointer mt-12 p-2 rounded-3xl text-center text-xl'>
                    Добавить событие
                </div>
                {showEdit && currentDay &&
                    <EditForm currentDay={currentDay}/>
                }
            </div>
        </>
    )
}

export default App
