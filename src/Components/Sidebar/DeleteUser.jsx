import Axios from 'axios'
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function DeleteUser() {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        Axios.delete(`http://localhost:8080/api/deletedata/${id}`)
            .then((response) => {
                console.log(response);
                toast.success(response.data.message)
                setTimeout(() => {
                    navigate('/chatDashboard/profile')
                }, 1000)
            }).catch((err) => {
                console.log(err);
            })
    }, [id])

    return (
        <div>

        </div>
    )
}

export default DeleteUser