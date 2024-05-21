import Axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogout() {
    const navigate = useNavigate()

    useEffect(() => {
        Axios.get('http://localhost:8080/api/logout')
            .then((response) => {
                console.log(response);
                localStorage.clear()
                navigate('/login')
            }).catch((err) => {
                console.log(err);
            })
    })
    return (
        <div>UserLogout</div>
    )
}

export default UserLogout