import React from 'react'


const Button = ({text, outline, onClick}) => {


  return (
    
      <button onClick={onClick}>
        {text}
      </button>
    
  )
}

export default Button
