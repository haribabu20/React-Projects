import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Game from './pages/Game'
import '../src/App.css'

function App(){
  return(
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/game' element={<Game/>} />
      </Routes>
  )
}

export default App