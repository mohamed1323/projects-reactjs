import me from '../img/About-me-img.png'

function About() {
  return (
    <section className="aboutMe" id="about">
      <main>
        <figure>
          <img src={me} alt="MohamedAmiin" width={350} />
        </figure>
        <div>
          <h2>ABOUT ME</h2>
          <h1 id="who-am-i">hi  I'm </h1>
          <h2>MohamedAmiin</h2>
          <p>A senior programer aiming    developing websites/mobileapps  </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia temporibus itaque ut pariatur architecto quo at nobis quia illum inventore placeat cum harum, distinctio odio fugit unde praesentium repellendus dolor laudantium voluptate. Architecto a nesciunt fuga laboriosam provident, recusandae ut quae, earum, vero assumenda aut nihil ex fugiat vel.</p>
          <div>
          
          </div>
        </div>

      </main>
    </section>
  )
}

export default About