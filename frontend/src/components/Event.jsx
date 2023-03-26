import React, {useState} from 'react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {useDispatch} from "react-redux";
import {removeEvent} from "../store/reducers/eventSlice.js";

const Event = ({today}) => {
    const [isHidden, setIsHidden] = useState(false)
    const dispatch = useDispatch()
    const handleMouseOver = () => {
        setIsHidden(true)
    }

    const handleMouseLeave = () => {
        setIsHidden(false)
    }

    const handleDeleteEvent = () => {
        dispatch(removeEvent(today?.id))
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="border-2 pt-2 mt-2 w-[380px] ">
            <div className="flex flex-row justify-between items-baseline">
                <div className="text-xl text-sky-600 underline w-[300px] pl-4 text-center">{today?.eventName}</div>
                <div className="">
                    {isHidden &&
                        <div className="flex flex-row items-end gap-2 ">
                            <AiFillDelete onClick={handleDeleteEvent} className='w-6 h-6'/>
                            <AiFillEdit className='w-6 h-6'/>
                        </div>}
                </div>
            </div>
            <div className="pl-4">Address: {today?.destination}</div>
            <div className="pl-4">Time: {today?.time}</div>
            {today?.money && <div className="pl-4">Amount of money: {today?.money}$</div>}
        </div>
    );
};

export default Event;
