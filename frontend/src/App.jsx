import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
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
            <Logo />
            <div className="flex flex-row justify-center gap-8 mt-10 ml-10 ">
                <div>
                <Calendar className='shadow-md' onChange={setDate} value={date} onClickDay={handleDayClick} tileContent={hasEvents}/>
                    <div className="flex flex-col items-center justify-center">
                        <div onClick={handleEdit}
                             className='btn w-[350px] mt-2 text-md'>
                            Добавить событие
                        </div>
                        {showEdit && currentDay &&
                            <EditForm currentDay={currentDay} />
                        }
                    </div>
                </div>
                {currentDay && <EventsList currentDay={date} />}
            </div>

        </>
    )
}

export default App
