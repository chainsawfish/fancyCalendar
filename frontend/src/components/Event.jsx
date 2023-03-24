import React, {useState} from 'react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'

const Event = ({today}) => {
    const [isHidden, setIsHidden] = useState(false)

    const handleMouseOver = () => {
        setIsHidden(true)
    }

    const handleMouseLeave = () => {
        setIsHidden(false)
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="border-2 pt-2 mt-2 w-[340px] ">
            <div className="flex flex-row justify-center items-center">
                <div className="text-xl text-sky-600 underline">{today?.title}</div>
                <div className="w-[50px] ">
                    {isHidden &&
                        <div className="flex flex-row items-end pl-16 gap-2">
                            <div><AiFillDelete/></div>
                            <div><AiFillEdit/></div>
                        </div>}
                </div>
            </div>
            <div className="p-4">{today?.text}</div>
        </div>
    );
};

export default Event;