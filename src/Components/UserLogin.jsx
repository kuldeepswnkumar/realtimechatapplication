import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function UserLogin() {
    return (
        <div className='w-screen h-[100vh] login relative'>
            <Form className='w-[20%] flex align-baseline'>
                <div className='border-3 sm:w-[30%] sm:p-5 p-4 rounded-lg absolute top-[25%] left-[35%] sm-left-[35%]'>
                    <h1 className='text-3xl text-white text-center font-Poetsen mb-2'>Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-white font-Josefin text-lg'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white font-Josefin text-lg'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className='my-3 text-right'>
                        <Link to='/forgetpass' className=' font-Josefin text-lg text-blue-500 underline'>Forget Passward</Link>
                    </Form.Group>
                    <Button variant="primary" type="Login">
                        Submit
                    </Button>
                    <Form.Group className='my-2 text-center'>
                        <p className='text-white font-Josefin text-lg'>Don't have account <Link to='/register' className='text-blue-500 underline'>Sign Up</Link></p>
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default UserLogin