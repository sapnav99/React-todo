import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export default function Signup() {
    const [signupDetails, setSignupDetails] = useState({
        name: '',
        email: '',
        password: '',
    });
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSignupDetails({ ...signupDetails, [name]: value });
        
    };

    //connecting firebase
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setSignupDetails({
            name: '',
        email: '',
        password: '',
        cpassword:''
        })
        const {
            name,
            email,
            password,
            cpassword
        } = signupDetails;
        
        if(name && email && password){
        //localStorage.setItem('signupDetails', JSON.stringify(signupDetails));
        const res= fetch('https://mytodolist-dd897-default-rtdb.firebaseio.com/signupDetailsRecords.json',

            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    cpassword
                })
            }
        );
            if(res){
                alert("data stored");
            }else{
                alert('please fill the data');
            }
        }else{
            alert('please fill the data');
        }
    };
    return (
        <div className='container-fluid'>
        <div >
            <h3 className='heading'>Signup</h3>
            <form method='POST'>
                <label>Full name:
                    <input type='text'
                        name='name'
                        placeholder='Please enter your full name'
                        value={signupDetails.name}
                        onChange={handleInputChange} />
                </label>
                <label>Email:
                    <input type='email'
                        name='email'
                        placeholder='Please enter your email'
                        value={signupDetails.email}
                        onChange={handleInputChange} />
                </label>
                <label>Password:
                    <input type='password'
                        name='password'
                        placeholder='Please enter your password'
                        value={signupDetails.password}
                        onChange={handleInputChange} />
                </label>
                <label>Confirm Password:
                    <input type='password'
                        name='cpassword'
                        placeholder='Please confirm your password'
                        value={signupDetails.cpassword}
                        onChange={handleInputChange} /></label>
                <button className='btn btn-success w-50 mr-10' type='submit' onClick={handleFormSubmit}>SIGN UP</button>
                
            </form>
        </div>
        <div>
            <Link to="/">Already have an account? Log in here</Link>
        </div>
        </div>


    )
}
