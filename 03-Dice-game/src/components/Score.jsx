import React from 'react'
import {useState} from 'react'

const Score = ({score, setScore}) => {

  return (
    <div className='score-container'>
      <h1>{score}</h1>
      <h2>Total Score</h2>
    </div>
  )
}

export default Score
