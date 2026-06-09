import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import api  from '../config/api';

const Profile = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try{
      const token = localStorage.getItem('token');

      /*
      const response = await axios.get(
        `${API_URL}/api/auth/profile`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      */

      // above way of getting response is simplied using interceptors.
      const response = await api.get('/api/auth/profile');

      setUser(response.data);

      
    }catch(error){
      console.log(error.response?.data?.message || error.message);
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
