import { faCommentDots, faRobot, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='w-1/6 rounded-2xl bg-[rgb(1,22,61)] m-2'>
            <div className="side-bar text-center">
                <div className="rounded-2xl bg-[rgb(1,22,61)] m-2">
                    <div className="logo w-16 m-auto mt-3">
                        <img src="../../img/chat_logo-f.png" alt="img" />
                    </div>
                </div>
                <hr className='text-white m-3' />
                <ul>
                    <li className='my-6 font-Poppins hover:underline text-white'> <NavLink
                        to="/chatDashboard/profile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <FontAwesomeIcon icon={faUser} className='text-white text-6xl my-1' />
                    </NavLink></li>

                    <li className='my-6 font-Poppins hover:underline text-white'> <NavLink
                        to="/chatdashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <FontAwesomeIcon icon={faCommentDots} className='text-white text-6xl my-1' />
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline text-white'> <NavLink
                        to="/chatDashboard/bot"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <FontAwesomeIcon icon={faRobot} className='text-white text-6xl my-1' />
                    </NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar