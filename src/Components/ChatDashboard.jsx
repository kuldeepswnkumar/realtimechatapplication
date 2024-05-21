import React, { useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faCommentDots, faRobot, faSearch, faCheckDouble, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

function ChatDashboard() {



    return (
        <div className='flex w-[100wh] h-[100vh]'>



            {/* <div className="w-1/6 rounded-2xl bg-[rgb(1,22,61)] border-3 border-black m-2">
                <div className="logo w-16 m-auto mt-3">
                    <img src="../../img/chat_logo-f.png" alt="img" />
                </div>
                <hr className='text-white m-3' />
                <div className="fav-icon my-3 w-16 mx-auto">
                    <Link to='/chatdashboard'>
                        <FontAwesomeIcon icon={faCommentDots} className='text-white text-6xl my-1' />
                        <p className='text-white m-auto mb-3'>Message</p>
                    </Link>
                    <Link to='/chatDashboard/profile'>
                        <FontAwesomeIcon icon={faUser} className='text-white text-6xl my-1' />
                        <p className='text-white mx-1 mb-3'>Profile </p>
                    </Link>
                    <Link to='/chatDashboard/bot'>
                        <FontAwesomeIcon icon={faRobot} className='text-white text-5xl my-1' />
                        <p className='text-white mx-3'>Bot</p>
                    </Link>

                </div>
            </div> */}
            {/* <div className="w-2/6 rounded-2xl bg-white m-1 border-3 border-gray-600">
                <div className="heading-text m-4 text-4xl text-blue-500 font-bold">
                    <h1>Message</h1>
                </div>
                <div className="w-full">
                    <div className="input-group">
                        <div className="form-outline flex m-auto">
                            <label className="form-label text-lg text-blue-500 font-semibold">Search</label>
                            <input type="search" id="form1" className="form-control mx-2 text-lg" />
                            <button type="button" className="btn btn-primary" data-mdb-ripple-init>
                                <FontAwesomeIcon icon={faSearch} className='text-white' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="user-contact p-3">
                    <div className="singleUser flex border-2 my-3 bg-gray-200 p-2 rounded-lg">
                        <div className="userimg w-16 ">
                            <img src="../../img/formal pic.jpg" alt="userimg" className='rounded-full' />
                        </div>
                        <div className="usename m-2 w-full">
                            <h3 className='mb-1'>Kuldee Kumar Gupta</h3>
                            <p className='text-gray-600'>Hello Kuldeep <FontAwesomeIcon icon={faCheckDouble} className='text-gray-500 float-right' /></p>
                        </div>
                    </div>
                    <div className="singleUser flex border-2 my-3 bg-gray-200 p-2 rounded-lg">
                        <div className="userimg w-16 ">
                            <img src="../../img/formal pic.jpg" alt="userimg" className='rounded-full' />
                        </div>
                        <div className="usename m-2 w-full">
                            <h3 className='mb-1'>Kuldee Kumar Gupta</h3>
                            <p className='text-gray-600'>Hello Kuldeep <FontAwesomeIcon icon={faCheckDouble} className='text-gray-500 float-right' /></p>
                        </div>
                    </div>
                    <div className="singleUser flex border-2 my-3 bg-gray-200 p-2 rounded-lg">
                        <div className="userimg w-16 ">
                            <img src="../../img/formal pic.jpg" alt="userimg" className='rounded-full' />
                        </div>
                        <div className="usename m-2 w-full">
                            <h3 className='mb-1'>Kuldee Kumar Gupta</h3>
                            <p className='text-gray-600'>My Message <FontAwesomeIcon icon={faCheckDouble} className='text-gray-500 float-right' /></p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="w-2/6 rounded-2xl bg-gray-800 m-1 relative w-full"> */}
            {/* <div className="para absolute top-[80%] ml-3">
                    <p className='text-white border-2 p-2 w-44 rounded-lg'>Hi!</p>
                </div> */}
            {/* <div className="sub-msg absolute top-[90%] ml-3 w-full">
                    <div className="message ">
                        <input type="text" className='w-[92%] h-[6vh] rounded-full p-3' placeholder='Message here...' />
                        <button className='btn btn-success m-2 w-11 h-11 rounded-full'>
                            <FontAwesomeIcon icon={faPaperPlane} className='' />
                        </button>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default ChatDashboard