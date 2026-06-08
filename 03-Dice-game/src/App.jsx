import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Game from './pages/Game'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import '../src/App.css'
import ProtectedRoute from './components/ProtectedRoute'

function App(){
  return( 
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>

        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        }></Route>

        <Route path='/game' element={
          <ProtectedRoute>
            <Game/>
          </ProtectedRoute>
        }></Route>

      </Routes>    
    </>

  )
}

export default App