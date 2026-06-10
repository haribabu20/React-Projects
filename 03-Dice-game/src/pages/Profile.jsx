import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import api  from '../config/api';
import UseAuth from '../hooks/UseAuth';

const Profile = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {setToken} = UseAuth()
  
  const fetchProfile = async () => {
    try{
      const response = await api.get('/api/auth/profile');
      setUser(response.data);
    }catch(error){
      console.log(error.response?.data?.message || error.message);
    } finally{
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  }

  const handleBackToGame = () => {
    navigate('/game')
  }

  // calling the function when page loads
  useEffect(()=>{
    fetchProfile();
  },[])

  // having to place this from main return
  if(loading){
    return <p>Loading..</p>
  }

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
