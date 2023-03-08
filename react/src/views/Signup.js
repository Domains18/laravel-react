import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios';
import { useStateContext } from "../context/contextProvider";



const Signup = () => {
  const nameRef = React.useRef()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const confirmPasswordRef = React.useRef()
  const { setCurrentUser, setToken } = useStateContext();
  const handleSubmit = (e) => {
    e.preventDefault()
    const payLoad = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value
    }
    // console.log(payLoad)
    axiosClient.post('/signup', payLoad)
      .then(({ data }) => {
        setCurrentUser(data.user);
        setToken(data.token);

      })
      .ctach(err => {
        const response = err.response;
        if (response && response.status === 422) {
          response.data.errors.forEach(error => {
            console.log(error);
          }
          )
        }
      })
  }
  return (
    <>
      <div className='login-signup-form animated fadeInDown'>
        <div className="form">
          <h1 className="title">
            Signup
          </h1>
          <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder='Name' />
            <input ref={emailRef} type="text" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <input ref={confirmPasswordRef} type="password" placeholder='Confirm Password' />
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
