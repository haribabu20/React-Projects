import Button from '../components/Button';
import '../styles/loginPage.css'
import { useNavigate } from 'react-router-dom'
import '../App.css'

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