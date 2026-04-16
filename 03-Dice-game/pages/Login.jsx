import '../src/App.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  return(
    <>
      <div className='login-page'>
        <div className='container'>
          <div className='left'>
            <img src='../public/dice.png'/>
          </div>
          <div className='right'>
              <h1>DICE GAME</h1>
              <button onClick={()=>navigate('/game')}>Play Now</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Login