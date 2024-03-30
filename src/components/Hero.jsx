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
          <p>waxa an ahay xirfadle kufiican  programer and i love it to do that and i'm aiming    developing websites/mobileapps  </p>
          <p>and i hope inan noqdo xirfadle an faca dalkiisa iyo dadkiisa waxa ad ujeclahay inan cilmi baaris kasuubiyo technologyda iyo qeybaheda kala duwan .</p>
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
