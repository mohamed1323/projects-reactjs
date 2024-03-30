import me from '../img/me.png'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="brief">
        <div>
          <h1><span
            className='im'
          >I'm</span></h1>
          <h1>MohamedAmiin</h1>
          <p>A senior programer aiming    developing websites/mobileapps  </p>
        </div>
        <button className="cta">See My Projects</button>
      </div>
      <figure>
        <img src={me} alt="MohamedAmiin" />
      </figure>
    </section>
  )
}

export default Hero