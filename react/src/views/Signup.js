import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <>
    <div className='login-signup-form animated fadeInDown'>
    <div className="form">
      <h1 className="title">
        Signup 
      </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Confirm Password' />
        <button className='btn btn-block'>Login</button>
      </form>
      <p className="message">
      Have an Account? <Link to="/login">Login</Link>
    </p>
      </div>
    </div>
    </>
  )
}

export default Signup
