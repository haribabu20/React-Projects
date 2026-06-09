import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/api';
import {useNavigate} from 'react-router-dom'
import api from '../config/api';
import { login } from '../services/AuthService';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    try{
      //api handling
      const response = await login({
        email,
        password
      });
      
      localStorage.setItem('token',response.data.token); // store token in localstorage
      navigate('/game')// and move to profile tab

    }catch(error){
      setError(error.response.data.message)
    }
  }
  
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <br />
          <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button type='submit'>Login</button>
        <button onClick={()=>navigate('/register')}>Register</button>

      </form>

      {error && <p>{error}</p>}
    </div>
  )
}

export default Login
