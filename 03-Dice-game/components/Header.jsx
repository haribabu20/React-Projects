import React from 'react'
import '../src/App.css'
import Score from './Score'
import Number from './Number'

const Header = ({selected, setSelected, score, setScore}) => {
  return (
    <div className='header-container'>
      <div className='score-card'>
        <Score score={score} setScore={setScore} />
      </div>
      <div className='number-card'>
        <Number selected={selected} setSelected={setSelected}/>
      </div>
    </div>
  )
}

export default Header
