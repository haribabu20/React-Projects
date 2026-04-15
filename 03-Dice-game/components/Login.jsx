
import '../src/App.css'

const Login = () => {
  return(
    <>
      <div className='login-page'>
        <div className='container'>
          <div className='left'>
            <img src='../public/dice.png'/>
          </div>
          <div className='right'>
              <h1>DICE GAME</h1>
              <button>Play Now</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Login