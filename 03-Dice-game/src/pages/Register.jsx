import axios from 'axios';
import {useState} from 'react'
import { API_URL } from '../config/api';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/AuthService';

const Register = () => {

  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resMessage, setResMessage] = useState('');

  const navigate = useNavigate();
  

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser();
  }

  const registerUser = async () => {
    try {
      const response = await register({
        name,
        email,
        password
      })
      setResMessage(response.data.message);

      setName('');
      setEmail('');
      setPassword('');

      navigate('/login');
      
    }catch(error){
      console.log(error)
      setResMessage(
        error.response?.data?.message || 'Something Went Wrong, please try later'
      );
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister}>

        <div>
          <label>Name</label>
          <br />
          <input
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <br/>
          <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <br/>
          <input
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button type='submit'>Register</button>

      </form>

      {resMessage && <p>{resMessage}</p>}
    </div>
  )
}

export default Register
