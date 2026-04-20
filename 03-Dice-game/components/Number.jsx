const Number = ({ selected, setSelected, result }) => {
  return (
    <div className='number-container'>

      <div className='button-container'>
        {[1,2,3,4,5,6].map((num) => (
          <button
            key={num}
            onClick={() => setSelected(num)}
            className={`number-btn ${selected === num ? "active" : ""}`}
          >
            {num}
          </button>
        ))}
      </div>

      <h4 className={`result-text 
        ${result === null ? "info" : result ? "success" : "error"}`}
      >
        {result === null ? 'Start Game' : (result ? 'Won' : 'Lost')}
      </h4>

    </div>
  )
}

export default Number;