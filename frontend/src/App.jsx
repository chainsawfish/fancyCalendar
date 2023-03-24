import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function App() {
    const [value, onChange] = useState(new Date())
    const [currentDay, setCurrentDay] = useState()


    return (
        <>
            <Calendar onChange={onChange} value={value} />
        </>
    )
}

export default App
