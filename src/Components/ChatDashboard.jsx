// import React, { useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faCommentDots, faRobot, faSearch, faCheckDouble, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// import { Link, useNavigate } from 'react-router-dom'
import MessageContact from "./MessageContact"
import MessageDisplay from "./MessageDisplay"

function ChatDashboard() {



    return (
        <div className="">
            <div className='1/2 flex'>
                <MessageContact />
                <MessageDisplay />
            </div>
        </div>
    )
}

export default ChatDashboard