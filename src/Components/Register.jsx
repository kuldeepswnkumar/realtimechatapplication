import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate()
    const [errForm, setErrForm] = useState([])
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        name: '',
        number: '',
        password: '',
        cfmpassword: '',
        dob: '',
        gender: '',
    })

    const validateInput = () => {
        let err = {}
        if (formData.username === '') {
            err.username = 'Username is required!'
        }
        if (formData.email === '') {
            err.email = 'Email is required!'
        }
        if (formData.name === '') {
            err.name = 'Name is required!'
        }
        if (formData.number === '') {
            err.number = 'Number is required!'
        }
        if (formData.password === '') {
            err.password = 'Password is required!'
        }
        if (formData.cfmpassword === '') {
            err.cfmpassword = 'Confirm Password is required!'
        }
        if (formData.dob === '') {
            err.dob = 'DOB is required!'
        }
        if (formData.gender === '') {
            err.gender = 'Gerder is required!'
        }

        setErrForm({ ...err })
        return false
    }


    const handleOnChage = (event) => {
        console.log('event', event);
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    console.log(formData);
    const sendFormData = () => {
        Axios.post('http://localhost:8080/api/register', formData)
            .then((response) => {
                console.log(response.data.data);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            }).catch((err) => {
                console.log(err);
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        validateInput()
        sendFormData()
    }


    return (
        <div className='w-screen h-[100vh] bg-[rgb(1,22,61)] relative'>
            <form className='w-[40%]  border-3 p-4 absolute top-[6%] left-[30%]' onSubmit={handleSubmit} encType="multipart/form-data">
                <h1 className='text-3xl text-white text-center font-Poetsen my-2'>Register</h1>
                <div className="row">
                    <div className="form-group mb-3 col">
                        <label htmlFor="username" className='text-lg text-white text-center font-Josefin '>Username</label>
                        <input type="text" name='username' onChange={handleOnChage} className="form-control" placeholder="Enter username" />
                        <div className='text-yellow-400 text-lg'>{errForm.username}</div>
                    </div>
                    <div className="form-group mb-3 col">
                        <label htmlFor="username" className='text-lg text-white text-center font-Josefin '>Name</label>
                        <input type="text" name='name' onChange={handleOnChage} className="form-control" placeholder="Enter Name" />
                        <div className='text-yellow-400 text-lg'>{errForm.name}</div>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className='text-lg text-white text-center font-Josefin '>Email Id</label>
                    <input type="email" name='email' onChange={handleOnChage} className="form-control" placeholder="Enter Email Id" />
                    <div className='text-yellow-400 text-lg'>{errForm.email}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="mobile" className='text-lg text-white text-center font-Josefin '>Mobile Number</label>
                    <input type="text" name='number' onChange={handleOnChage} className="form-control" placeholder="Enter mobile no" />
                    <div className='text-yellow-400 text-lg'>{errForm.number}</div>
                </div>
                <div className="form-group row">
                    <div className="form-group mb-3 col">
                        <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Password</label>
                        <input type="password" name='password' onChange={handleOnChage} className="form-control" placeholder="Enter Password" />
                        <div className='text-yellow-400 text-lg'>{errForm.password}</div>
                    </div>
                    <div className="form-group mb-3 col">
                        <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Comfirm Password</label>
                        <input type="password" name='cfmpassword' onChange={handleOnChage} className="form-control" placeholder="Enter Confirm Password" />
                        <div className='text-yellow-400 text-lg'>{errForm.cfmpassword}</div>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Date of Birth</label>
                    <input type="date" name='dob' onChange={handleOnChage} className="form-control" placeholder="Enter Date of Birth" />
                    <div className='text-yellow-400 text-lg'>{errForm.dob}</div>
                </div>

                <div className="form-group mb-3 col">
                    <label htmlFor="inputState" className='text-lg text-white text-center font-Josefin '>Gender</label>
                    <select id="inputState" onChange={handleOnChage} className="form-control" name='gender'>
                        <option selected>Choose...</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>
                    <div className='text-yellow-400 text-lg'>{errForm.gender}</div>
                </div>

                <button type="submit" className="btn btn-primary w-full">Register</button>
            </form>
        </div>
    )
}

export default Register