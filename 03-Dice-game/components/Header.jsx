import React from 'react'
import '../src/App.css'
import Score from './Score'
import Number from './Number'
import Button from './Button'

const Header = ({selected, setSelected, score, setScore, handleBackToMenu, result}) => {
  return (
    <div className='header-container'>
      <div className='score-card'>
        <Score score={score} setScore={setScore} />
      </div>
      <div className='number-card'>
        <Number selected={selected} setSelected={setSelected} result={result}/>
      </div>
      <div className='loginBack-button'>
        <Button text='Back to Login' onClick={handleBackToMenu} outline/>
      </div>
      
    </div>
  )
}

export default Header


/*
handleBackToMenu : 
  For this above method, make sure to give as handleBackToMenu() and not as handleBackToMenu.

*/
