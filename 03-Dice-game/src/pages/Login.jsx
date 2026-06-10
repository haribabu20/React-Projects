import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { login } from '../services/AuthService';
import UseAuth from '../hooks/UseAuth';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const {setToken} = UseAuth();

  const handleLogin = async(e) => {
    e.preventDefault();
    setError('');
    try{
      const response = await login({
        email,
        password
      });
      
      localStorage.setItem('token',response.data.token);
      setToken(response.data.token);
      navigate('/game')// and move to profile tab

    }catch(error){
      setError(error.response?.data?.message || error.message)
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
    
      </form>

      <button 
        type='button'
        onClick={()=>navigate('/register')}
      >
        Register
      </button>

      {error && <p>{error}</p>}
    </div>
  )
}

export default Login
