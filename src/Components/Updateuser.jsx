import React, { useState } from 'react'

function Updateuser() {

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

    const handleOnChage = (event) => {
        console.log('event', event);
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <div className='w-screen h-[100vh] bg-[rgb(1,22,61)] relative'>
                <form className='w-[40%]  border-3 p-4 absolute top-[6%] left-[30%]' onSubmit={handleSubmit} encType="multipart/form-data">
                    <h1 className='text-3xl text-white text-center font-Poetsen my-2'>Register</h1>
                    <div className="row">
                        <div className="form-group mb-3 col">
                            <label htmlFor="username" className='text-lg text-white text-center font-Josefin '>Username</label>
                            <input type="text" name='username' onChange={handleOnChage} className="form-control" placeholder="Enter username" />

                        </div>
                        <div className="form-group mb-3 col">
                            <label htmlFor="username" className='text-lg text-white text-center font-Josefin '>Name</label>
                            <input type="text" name='name' onChange={handleOnChage} className="form-control" placeholder="Enter Name" />

                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className='text-lg text-white text-center font-Josefin '>Email Id</label>
                        <input type="email" name='email' onChange={handleOnChage} className="form-control" placeholder="Enter Email Id" />

                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="mobile" className='text-lg text-white text-center font-Josefin '>Mobile Number</label>
                        <input type="text" name='number' onChange={handleOnChage} className="form-control" placeholder="Enter mobile no" />

                    </div>
                    <div className="form-group row">
                        <div className="form-group mb-3 col">
                            <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Password</label>
                            <input type="password" name='password' onChange={handleOnChage} className="form-control" placeholder="Enter Password" />

                        </div>
                        <div className="form-group mb-3 col">
                            <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Comfirm Password</label>
                            <input type="password" name='cfmpassword' onChange={handleOnChage} className="form-control" placeholder="Enter Confirm Password" />

                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Date of Birth</label>
                        <input type="date" name='dob' onChange={handleOnChage} className="form-control" placeholder="Enter Date of Birth" />

                    </div>

                    <div className="form-group mb-3 col">
                        <label htmlFor="inputState" className='text-lg text-white text-center font-Josefin '>Gender</label>
                        <select id="inputState" onChange={handleOnChage} className="form-control" name='gender'>
                            <option selected>Choose...</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </select>

                    </div>

                    <button type="submit" className="btn btn-primary w-full">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Updateuser