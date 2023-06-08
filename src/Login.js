import { useState } from "react";

import { Link } from "react-router-dom";

const Login = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    
  });

  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = async(event) => {
    event.preventDefault();
    setForm({
        email:'',
        password:''
    })
    const{
        email, password}=form;
        if(email.length===0){
            alert('please enter email');
            return
        }
        if(password.length===0){
            alert('please enter password');
            return
        }
    }
    
  

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
    <form  onSubmit={onSubmitForm} className="needs-validation">
      <div className='mb-3 was-validated'>
        <label htmlFor="email">Email</label>
        <input required
          className='form-control rounded-0'
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
        <div className="invalid-feedback">
            Please enter your email
        </div>
      </div>
      <div className='mb-3 mt-3 was-validated'>
        <label htmlFor="password">Password</label>
        <input required
          className='form-control rounded-0'
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
        <div className="invalid-feedback">
            Please enter your password
        </div>
      </div>
      
      <div >
        
        <Link to='/addtodo' type='submit' className='btn btn-success w-100 m-1'>Log in </Link>
        
      </div>
      
    </form>
    </div>
    </div>
  );
};
export default Login;