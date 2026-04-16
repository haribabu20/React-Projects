import React from 'react'
import {useState} from 'react'

const Score = () => {

  const [score, setScore] = useState(0)

  return (
    <div className='score-container'>
      <h1>{score}</h1>
      <h3>Total Score</h3>
    </div>
  )
}

export default Score
