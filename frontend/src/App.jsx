import {useState} from "react";
import {useSelector} from "react-redux";
import Calendar from "react-calendar";
import EventsList from "./components/EventsList.jsx";
import EditForm from "./components/EditForm.jsx";
import Logo from "./components/Logo.jsx";

function App() {
    const [date, setDate] = useState(new Date())
    const [currentDay, setCurrentDay] = useState(new Date())
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
                return 1
            }

        })
        return validArray.length ? <p className="text-xl text-green-600 relative top-[-10px]">*</p> : null
    }

    return (
        <>
            <Logo/>
            <div className="flex flex-col justify-center items-center gap-8 mt-6 mh-2 md:flex-row md:items-start">
                <div>
                    <Calendar className='shadow-md' onChange={setDate} value={date} onClickDay={handleDayClick}
                              tileContent={hasEvents}/>
                    <div className="flex flex-col justify-center">
                        <div onClick={handleEdit}
                             className='btn max-w-[350px] mt-2 text-md'>
                            Добавить событие
                        </div>
                        {showEdit && currentDay &&
                            <EditForm currentDay={currentDay}/>
                        }
                    </div>
                </div>
                <div>{currentDay && <EventsList currentDay={date}/>}</div>
            </div>

        </>
    )
}

export default App
