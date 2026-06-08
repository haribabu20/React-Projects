import React from 'react'
import Score from './Score'
import Number from './Number'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import {useNavigate} from 'react-router-dom'

const Header = ({selected, setSelected, score, setScore, handleBackToMenu, result}) => {
  const navigate = useNavigate();
  return (
    <header className='header-container'>
      <section className='score-card'>
        <Score score={score} setScore={setScore} />
      </section>
      <section className='number-card'>
        <Number selected={selected} setSelected={setSelected} result={result}/>
      </section>
      <section>
        <ThemeToggle/>
      </section>
      <section>
        <Button text='Profile' onClick={()=>navigate('/profile')}/>
      </section>
      <section>
        <Button text='Logout' onClick={handleBackToMenu} outline/>
      </section>
      
    </header>
  )
}

export default Header


/*
handleBackToMenu : 
  For this above method, make sure to give as handleBackToMenu() and not as handleBackToMenu.

*/
