import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {removeEvent, setEditEvent, setEditId} from "../store/slices/eventSlice.js";

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

    const handleEditEvent = () => {
        dispatch(setEditId(today?.id))
        dispatch(setEditEvent(today))
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}
             className="border-2 rounded-md shadow-md border-gray-400 p-2 mt-2 max-w-[350px] ">
            <div className="flex flex-row justify-between items-baseline">
                <div
                    className="text-xl text-sky-600 underline w-[300px] pl-4 text-center uppercase">{today?.eventName}</div>
                {
                    isHidden &&
                    <div className="flex flex-row items-end gap-2 ">
                        <AiFillDelete onClick={handleDeleteEvent} className='w-6 h-6 cursor-pointer'/>
                        <AiFillEdit onClick={handleEditEvent} className='w-6 h-6 cursor-pointer'/>
                    </div>
                }
            </div>
            {today?.destination && <div className="pl-4">Место: {today?.destination}</div>}
            {today?.eventTime && <div className="pl-4">Время: {today?.eventTime}</div>}
            {today?.amountMoney && <div className="pl-4">Лимит денег: {today?.amountMoney}$</div>}
            {today?.text && <div className="pl-4">{today?.text}</div>}
        </div>
    );
};

export default Event;
