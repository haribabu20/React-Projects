import React,{useState} from 'react'
import '../App.css'
import Button from './Button'
import Rules from './Rules'

const DiceBox = ({dicecube, setDicecube, selected, setSelected, setScore, handleDiceCube}) => {

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


  return (
    <>
      <section className='dicebox-container'>
        <div className='dicebox-image' onClick={handleDiceCube}>
          <img src={`./public/dice_${dicecube}.png`} />
          <p>Click on Dice to roll</p>
        </div>
        <div className='dicebox-buttons'>
          <Button text='Reset Score' outline onClick={handleReset}/>
          <Button text='Show Rules' outline={false} onClick={handleToggle}/>
        </div>
      </section>  

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
