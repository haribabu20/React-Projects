import React from 'react'
import Header from '../components/Header'
import DiceBox from '../components/DiceBox'
import Rules from '../components/Rules'

const Game = () => {
  return (
    <div className='game-container'>
      <Header/>
      <DiceBox/>
    </div>
  )
}

export default Game
