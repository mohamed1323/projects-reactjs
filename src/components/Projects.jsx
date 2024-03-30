import myprojectapp from'../img/myprojectapp.png'
import secondproject from'../img/secondproject.png'


function Projects() {
  return (
    <section className="projects" id="projects">
      
      
      <h1 className="headings">Projects</h1>
      <article>
        <figure>
          <img src={secondproject} alt="secondproject.png" width={350} />
          <h2> MernStack  Travel Agency Website</h2>
        </figure>
        <div>
         
          
         
          <article>
          <figure>
            <img src={myprojectapp} alt="myprojectapp.png" width={300} />
            <h2>Reactjs+vite/module</h2>
          </figure>
          <div>
          </div>
        </article>  

          
              
         
        </div>
     
        <div>
          
        
        </div>
        
      </article>
      <div className='btn-center'><button className="cta-outline black">See More Work</button></div>
    </section>
  )
}

export default Projects