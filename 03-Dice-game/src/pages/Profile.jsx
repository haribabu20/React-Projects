import React from 'react'
import {useState, useEffect} from 'react'
import { API_URL } from '../config/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try{
      const token = localStorage.getItem('token');

      const response = await axios.get(
        `${API_URL}/api/auth/profile`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )

      setUser(response.data);

      
    }catch(error){
      console.log(error.message);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const handleBackToGame = () => {
    navigate('/game')
  }

  // calling the function when page loads
  useEffect(()=>{
    fetchProfile()
  },[])

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleBackToGame}>Back to Game</button>
    </div>
  )
}

export default Profile
