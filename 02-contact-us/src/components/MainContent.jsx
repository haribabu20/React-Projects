
import Button from './Button'
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";




const MainContent = () => {
  return(
    <main>

      <h1>CONTACT US</h1>

      <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>

      <div className="main-panel">
        <div className="left-panel">
          <div className="left-panel-button">
            <div className='left-panel-outline-btn'>
              <Button text='VIA SUPPORT CHAT' icon={<MdOutlineMessage/>} outline={true}/>
              <Button text='VIA Call' icon={<IoIosCall/>} outline/>
            </div>
            <Button text='VIA Email Form' icon={<IoMdMail/>} outline={false}/>
          </div>
          
          <form>
            <div className='form-container'>
              <div className='input-container'>
                <label htmlFor='name'>Name</label>
                <input name='name' type='text'/>
              </div>
              <div className='input-container'>
                <label htmlFor='email'>E-mail</label>
                <input name='email' type='email'/>                  
              </div>
              <div className='input-container'>
                <label htmlFor='text'>Text</label>
                <textarea name='text'/>                
              </div>
            </div>
            <div className='form-submit'>
              <Button text='Submit' outline/>    
            </div>            
          </form>
        </div>

        <div className="right-panel">
          <img src='./public/images/servicelogo.svg'></img>
        </div>

      </div>


    </main>
  )
}

export default MainContent