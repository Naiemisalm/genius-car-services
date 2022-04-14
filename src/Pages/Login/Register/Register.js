import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.int'
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)

        if(user){
            navigate('/home')
        }

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Register</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Enter Your Name</Form.Label>
                    <Form.Control  type="text" name="name" id="" placeholder="Enter your name"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" id=""  placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name="password" id="" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Alredy have  an account? <span style={{cursor:'pointer'}} className='text-danger' onClick={navigateLogin}>Please Login</span></p>
                <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;