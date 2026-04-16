import React from 'react'
import '../src/App.css'
import Score from './Score'
import Number from './Number'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='score-card'>
        <Score/>
      </div>
      <div className='number-card'>
        <Number/>
      </div>
    </div>
  )
}

export default Header
