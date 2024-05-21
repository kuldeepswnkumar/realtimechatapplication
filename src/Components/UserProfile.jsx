import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UserProfile() {

    const navigate = useNavigate()



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
            <table className="table  table-striped">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curr, i) => {
                            return (
                                <tr key={i}>
                                    <td>{curr.username}</td>
                                    <td>{curr.email}</td>
                                    <td>{curr.name}</td>
                                    <td>{curr.number}</td>
                                    <td>{curr.dob}</td>
                                    <td>{curr.gender}</td>
                                    <td>
                                        <Link to={`/deleteuser/` + curr._id}>
                                            <button className='btn btn-danger'>Delete</button>
                                        </Link>
                                        <Link to={`/updateuser/` + curr._id}>
                                            <button className='btn btn-danger'>Delete</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default UserProfile