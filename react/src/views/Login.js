import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <>
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <h1 className="title">
          Login to your account
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button className='btn btn-block'>Login</button>
        </form>
        <p className="message">
        Not registered? <Link to="/signup">Create an account</Link>
      </p>
      </div>
      </div>
    </>
  ) 
}

export default Login
