import React from 'react'
import '../src/App.css'
import Score from './Score'
import Number from './Number'
import Button from './Button'

const Header = ({selected, setSelected, score, setScore, handleBackToMenu, result}) => {
  return (
    <header className='header-container'>
      <section className='score-card'>
        <Score score={score} setScore={setScore} />
      </section>
      <section className='number-card'>
        <Number selected={selected} setSelected={setSelected} result={result}/>
      </section>
      <section className='loginBack-button'>
        <Button text='Back to Login' onClick={handleBackToMenu} outline/>
      </section>
      
    </header>
  )
}

export default Header


/*
handleBackToMenu : 
  For this above method, make sure to give as handleBackToMenu() and not as handleBackToMenu.

*/
