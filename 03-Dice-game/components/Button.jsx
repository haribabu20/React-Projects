import React from 'react'

const Button = ({text, outline, onClick}) => {
  return (
    <div>
      <button style={{
        background: outline ? 'black' : 'white',
        color: outline ? 'white' : 'black',
      }}
      onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
