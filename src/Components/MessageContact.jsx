import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCheckDouble, } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'


function MessageContact() {


    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8080/api/getdata')
            .then((response) => {
                setData(response.data.data)
                // console.log(response.data.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <div className="w-96 rounded-2xl bg-white m-1 border-3 border-gray-600">
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
                    {
                        data.map((curr, i) => {
                            return (
                                <div key={i} className="singleUser flex border-2 my-3 bg-gray-200 p-2 rounded-lg">
                                    <div className="userimg w-16 ">
                                        <img src="../../img/formal pic.jpg" alt="userimg" className='rounded-full' />
                                    </div>
                                    <div className="usename m-2 w-full">
                                        <h3 className='mb-1 text-black'>{curr.name}</h3>
                                        <p className='text-gray-600'>Hello Kuldeep <FontAwesomeIcon icon={faCheckDouble} className='text-gray-500 float-right' /></p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className="singleUser flex border-2 my-3 bg-gray-200 p-2 rounded-lg">
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default MessageContact