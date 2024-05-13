import React from 'react'

function Register() {
    return (
        <div className='w-screen h-[100vh] bg-[rgb(1,22,61)] relative'>
            <form className='w-[40%] border-3 p-4 absolute top-[8%] left-[30%]'>
                <h1 className='text-3xl text-white text-center font-Poetsen my-2'>Register</h1>
                <div className="form-group mb-3">
                    <label htmlFor="username" className='text-lg text-white text-center font-Josefin '>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className='text-lg text-white text-center font-Josefin '>Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="mobile" className='text-lg text-white text-center font-Josefin '>Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Enter mobile no" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1" className='text-lg text-white text-center font-Josefin '>Date of Birth</label>
                    <input type="date" className="form-control" placeholder="Enter Date of Birth" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputState" className='text-lg text-white text-center font-Josefin '>Gender</label>
                    <select id="inputState" className="form-control ">
                        <option selected>Choose...</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Register