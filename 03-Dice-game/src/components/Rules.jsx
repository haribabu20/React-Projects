import React from 'react'

const Rules = ({onClose}) => {
  return (
    <aside className='rules-container'>
      <button onClick={onClose}>
        ❌
      </button>
      <h3>How to play dice game</h3>
      <div className='rules'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>

    </aside>
  )
}

export default Rules
