import React from 'react'

const Button = ({text, outline, onClick}) => {
  return (
    
      <button style={{
        background: outline ? 'black' : 'white',
        color: outline ? 'white' : 'black',
      }}
      onClick={onClick}
      >
        {text}
      </button>
    
  )
}

export default Button
