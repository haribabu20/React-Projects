import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/AuthService';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resMessage, setResMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setResMessage('');

    try {
      const response = await register({
        name,
        email,
        password,
      });

      setResMessage(response.data.message);

      setName('');
      setEmail('');
      setPassword('');

      setTimeout(() => {
        navigate('/login');
      }, 1000);

    } catch (error) {
      setResMessage(
        error.response?.data?.message ||
        'Something went wrong, please try later'
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>

      <button
        type="button"
        onClick={() => navigate('/login')}
      >
        Already have an account? Login
      </button>

      {resMessage && <p>{resMessage}</p>}
    </div>
  );
};

export default Register;