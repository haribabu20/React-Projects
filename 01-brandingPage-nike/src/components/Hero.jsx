
import '../App.css'

const Hero = () => {
  return(
    <main className='hero-main'>
      <div className='hero-left'>
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className='hero-left-button'>
          <button>Shop Now</button>
          <button className='secondary-btn'>Category</button>
        </div>

        <div className='shopping'>
          <p>Also Available On</p>
          <div className='brand-logo'>
            <img src="/public/images/flipkart.png"></img>
            <img src='/public/images/amazon.png'></img>
          </div>
        </div>
      </div>

      <div className='hero-right'>
        <img src='/public/images/shoe_image.png'></img>
      </div>
    </main>
  )
}

export default Hero