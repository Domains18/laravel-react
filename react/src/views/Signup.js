import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <h1 className='title'>Create your free account</h1>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Confirm Password' />
          <button className='btn btn-block'>Signup</button>
          <p className="message">
            Already Registered? <Link to="/login">Login to your account</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
