import React, {useState} from 'react'
import Header from '../components/Header'
import DiceBox from '../components/DiceBox'
import Rules from '../components/Rules'
import { useNavigate } from 'react-router-dom'

const Game = () => {

  const [dicecube, setDicecube] = useState(1);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const handleDiceCube = () => {
    if(selected===null){
      alert("Please Click the number first !!");
      return;
    };

    //score calculation
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDicecube(randomNumber);
    if(selected===randomNumber){
      setScore(prev => prev + randomNumber)
    }else{
      setScore(prev => prev - randomNumber)
    };

    // result text
    setResult(selected===randomNumber)

    // resetting selected value !
    setSelected(null);
  }

  const handleBackToMenu = () => {
    navigate('/')
  }

  return (
    <div className='game-container'>
      <Header selected={selected} setSelected={setSelected} score={score} setScore={setScore} handleBackToMenu={handleBackToMenu} result={result}/>
      <DiceBox dicecube={dicecube} setDicecube={setDicecube} selected={selected} setSelected={setSelected} setScore={setScore} handleDiceCube={handleDiceCube}/>
    </div>
  )
}

export default Game



/*

  setResult(selected===randomNumber) : 


    This can also be written as,
    
    if(selected===randomNumber){
      setResult(true);
    }else{
      setResult(false)
    }
  

    

 */