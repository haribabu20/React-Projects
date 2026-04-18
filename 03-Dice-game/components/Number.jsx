import React from 'react'
import {useState} from 'react'

const Number = ({selected, setSelected}) => {

  return (
    <div className='number-container'>

      <div className='button-container'>
        {
          [1,2,3,4,5,6].map((num)=>(
            <button
              key ={num}
              onClick={()=>setSelected(num)}
              style = {{
                width: '72px',
                height: '72px',
                cursor: 'pointer',
                background: selected === num ? 'black' : 'white',
                color: selected === num ? 'white' : 'black',
                border: '1px solid black'
              }}

            >
              {num}
            </button>
          ))
        }
      </div>

      <h4 style={{
        display: 'flex',
        'align-self': 'flex-end',
        'font-size': '24px',
      }}>
        Selected Number {selected}
      </h4>

    </div>
  )
}

export default Number
