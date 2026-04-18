import React, {useState} from 'react'
import Header from '../components/Header'
import DiceBox from '../components/DiceBox'
import Rules from '../components/Rules'

const Game = () => {

  const [dicecube, setDicecube] = useState(1);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <div className='game-container'>
      <Header selected={selected} setSelected={setSelected} score={score} setScore={setScore}/>
      <DiceBox dicecube={dicecube} setDicecube={setDicecube} selected={selected} setSelected={setSelected} setScore={setScore}/>
    </div>
  )
}

export default Game
