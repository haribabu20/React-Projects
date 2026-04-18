import React,{useState} from 'react'
import '../src/App.css'
import Button from './Button'
import Rules from './Rules'

const DiceBox = ({dicecube, setDicecube, selected, setSelected, setScore}) => {

  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(prev => !prev)
    setTimeout(()=>{
      document.getElementById('rules').scrollIntoView({behaviour:'smooth'})
    },100)
  }

  const handleReset = () => {
    setScore(0);
  }

  const handleCloseButton = () => {
    setToggle(prev => !prev)
  }

  const handleDiceCube = () => {
    if(selected===null){
      alert("Please Click the number first !!")
    };

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDicecube(randomNumber);

    if(selected===dicecube){
      setScore(prev => prev + dicecube)
    }else{
      setScore(prev => prev - dicecube)
    }

    setSelected(null);
  }

  return (
    <>
      <div className='dicebox-container'>

        <div className='dicebox-image' onClick={handleDiceCube}>
          <img src={`./public/dice_${dicecube}.png`} />
          <p>Click on Dice to roll</p>
        </div>

        <div className='dicebox-buttons'>
          <Button text='Reset Score' outline onClick={handleReset}/>
          <Button text='Show Rules' outline={false} onClick={handleToggle}/>
        </div>
      </div>    
      {toggle && (
          <div id='rules'>
            <Rules onClose={handleCloseButton}/>
          </div>
        )
      }
    </>

  )
}

export default DiceBox


    /* 

    1. choosing random value :

      random() gives value btw 0 to 1.
      mult with 6 gives value between 0 to 6
      floor() removes decimal value
      without +1 at last, we will get like 0 to 5.
      Since we need from 1 to 6, we add plus 1


    2. scroll to bottom : 





    */ 