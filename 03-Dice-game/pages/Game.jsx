import React, {useState} from 'react'
import Header from '../components/Header'
import DiceBox from '../components/DiceBox'
import Rules from '../components/Rules'
import { useNavigate } from 'react-router-dom'

const Game = () => {

  const [dicecube, setDicecube] = useState(1);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  // if(!selected) navigate('/')

  const handleDiceCube = () => {
    if(selected===null){
      alert("Please Click the number first !!");
      return;
    };

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDicecube(randomNumber);

    if(selected===randomNumber){
      setScore(prev => prev + randomNumber)
    }else{
      setScore(prev => prev - randomNumber)
    }

    setSelected(null);
  }

  return (
    <div className='game-container'>
      <Header selected={selected} setSelected={setSelected} score={score} setScore={setScore}/>
      <DiceBox dicecube={dicecube} setDicecube={setDicecube} selected={selected} setSelected={setSelected} setScore={setScore} handleDiceCube={handleDiceCube}/>
    </div>
  )
}

export default Game
