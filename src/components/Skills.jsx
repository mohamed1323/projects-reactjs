import post1 from '../img/post1.png'
import post2 from '../img/post2.png'
import post3 from '../img/post3.png'

function Skills() {
  return (
    <section className="Skills" id="Skills">
      <h1 className="headings">Skills</h1>
      <main>
        <article>
          <figure>
            <img src={post1} alt="mernstack.png" width={300} />
          </figure>
          <div>
            <h2>mernstack developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo accusantium laboriosam a.</p>
            <button className="cta-outline black">Read More</button>
          </div>
        </article>
        <article>
          <figure>
            <img src={post2} alt="post2.png" width={300} />
          </figure>
          <div>
            <h2>Ai choaching</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo accusantium laboriosam a.</p>
            <button className="cta-outline black">Read More</button>
          </div>
        </article>
        <article>
          <figure>
            <img src={post3} alt="post3.png" width={300} />
          </figure>
          <div>
            <h2>Java spring</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo accusantium laboriosam a.</p>
            <button className="cta-outline black">Read More</button>
          </div>
        </article>
      </main>
    </section>
  )
}

export default Skills