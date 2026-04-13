
import '../App.css'

const Button = ({text, icon, outline}) => {
  return(
    <>
      <button className={outline ? 'contact-us-btn' : 'contact-us-btn-light'}>
        {icon}
        {text}
      </button>
    </>
  )
}

export default Button