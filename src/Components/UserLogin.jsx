import Axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function UserLogin() {

    const navigate = useNavigate()
    const [errForm, setErrForm] = useState([])
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })

    const validateForm = () => {
        const err = {}
        if (formLogin.email === '') {
            err.email = 'Email is required!'
        }
        if (formLogin.password === '') {
            err.password = 'Password is required!'
        }

        setErrForm({ ...err })
        return false
    }

    const handleChange = (e) => {
        setFormLogin(() => ({
            ...formLogin,
            [e.target.name]: e.target.value
        }))
    }

    const loginForm = () => {
        Axios.post('http://localhost:8080/api/login', formLogin)
            .then((response) => {
                console.log(response.data);
                console.log(response.data.data.AccessToken);
                setInterval(() => {
                    navigate('/chatDashboard/profile')
                }, 1000)
                localStorage.setItem('AccessToken', response.data.data.AccessToken)
            }).catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        loginForm()
    }
    // console.log(formLogin);


    return (
        <div className='w-screen h-[100vh] login relative'>
            <form className='w-[30%]  border-3 p-4 absolute top-[20%] left-[35%]' onSubmit={handleSubmit}>
                <h1 className='text-3xl text-white text-center font-Poetsen my-2'>Login</h1>
                <div className="form-group mb-3">
                    <label htmlFor="email" className='text-lg text-white text-center font-Josefin '>Email Id</label>
                    <input type="email" name='email' onChange={handleChange} className="form-control" placeholder="Enter Email Id" />
                    <div className='text-yellow-400 text-lg'>{errForm.email}</div>
                </div>
                <div className="form-group ">
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Password</label>
                        <input type="password" name='password' onChange={handleChange} className="form-control" placeholder="Enter Password" />
                        <div className='text-yellow-400 text-lg'>{errForm.password}</div>
                    </div>
                </div>
                <div className="forgetPass text-white mb-3 float-right">
                    <Link to='/forgetPass'>Forget Password</Link>
                </div>
                <button type="submit" className="btn btn-primary w-full">Login</button>

                <div className='text-white m-3 text-center'>
                    <p>If you don't have account <Link to='/register' className='text-blue-500 underline'>Sign Up</Link> here</p>
                </div>
            </form>
        </div>
    )
}

export default UserLogin