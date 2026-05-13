import Button from '../components/Button';
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const handleLoginButton = () => {
      navigate('/game')
  }

  return(
    <>
      <main className='login-page'>
        <section className='container'>
          <div className='left'>
            <img src='../public/dice.png'/>
          </div>
          <div className='right'>
              <h1>DICE GAME</h1>
              <Button text='Play Now' onClick={handleLoginButton} outline/>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login