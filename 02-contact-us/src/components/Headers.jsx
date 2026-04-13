

const Headers = () => {
  return (
    <nav>

      <div className="headers-logo">
        <img src='/public/images/logo.png'></img>
      </div>

      <div className="headers-menu">
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </div>

      <div className="headers-action">
        <button>Login</button>
      </div>
      
    </nav>
  )
}

export default Headers