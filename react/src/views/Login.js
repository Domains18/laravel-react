import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button className='btn btn-block'>Submit</button>
        </form>
      </div>
      <p className="message">
        Not registered? <Link to="/login">Create an account</Link>
      </p>
    </div>
  )
}

export default Login
