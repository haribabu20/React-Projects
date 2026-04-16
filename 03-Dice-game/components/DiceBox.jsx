import React,{useState} from 'react'
import '../src/App.css'
import Button from './Button'
import Rules from './Rules'

const DiceBox = () => {

  const [toggle, setToggle] = useState(false);
  const [score, setScore] = useState(null)

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  const handleReset = () => {
    setScore(0);
  }

  return (
    <>
      <div className='dicebox-container'>

        <div className='dicebox-image'>
          <img src='./public/cubes.png'/>
          <p>Click on Dice to roll</p>
        </div>

        <div className='dicebox-buttons'>
          <Button text='Reset Score' outline onClick={handleReset}/>
          <Button text='Show Rules' outline={false} onClick={handleToggle}/>
        </div>
      </div>    
      {toggle && <Rules/>}
    </>

  )
}

export default DiceBox
