import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function MessageDisplay() {

    const [data, setData] = useState([])

    useEffect(() => {

    })

    return (
        <div className='w-[68%] h-[680px] rounded-lg bg-[rgb(34,55,94)] m-2 text-white p-3 relative'>
            <div className="absolute top-[88%]">
                <input type="text" name="msg" className='p-3 rounded-full w-[650px] text-black' placeholder='Write here.....' />
                <button className='btn btn-danger m-2 p-3 rounded-full'> <FontAwesomeIcon icon={faPaperPlane} className='text-white p-1 text-lg' /></button>
            </div>
            <div className='absolute top-[80%] p-1 w-30 bg-gray-500 rounded-lg'>Hi <span className='text-xs ml-1'>09:00 pm</span></div>

        </div>
    )
}

export default MessageDisplay