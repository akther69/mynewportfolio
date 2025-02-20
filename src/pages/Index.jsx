import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Index() {
  return (
    <div>

      {/* navbar */}
        <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>


    {/* into  */}
    <section style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className="container">
            <div className="row">
                <h3 className='text-center' style={{ letterSpacing: "0.1em", lineHeight: "4rem",fontSize: "4.5rem",fontWeight: "bold"}}>👋,I'm SUHAIB AKTHER S</h3>
                <h3 className="text-center mt-5">PYTHON FULL STACK DEVELOPER</h3>
            </div>
        </div>
    </section>

    {/* aboutme */}
    <section>
      <div className="container">
        <div className="row">
          <h1 className='text-center mt-5'>About Me</h1>
          <h5 className='text-center'>Discover more about who I am, what I do, and the programming and technological skills I bring to the table.</h5>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-6">
            <h1>Know more about me</h1>
            <p>I’m a <b>Python-Django full-stack developer from Nilgiris, Tamil Nadu</b>, with a BE in Computer Science and experience building dynamic, user-friendly web applications. I focus on creating scalable back-end systems using Django and Django REST Framework and designing responsive front-end interfaces with HTML, CSS, and Tailwind CSS. I’ve worked on projects like e-commerce platforms and task management tools, which have helped me strengthen my problem-solving skills and learn about building real-world applications.
               Right now, I’m working as an RPA Developer at IntelliJohn Labs in Kochi. I use UiPath to automate repetitive processes, making workflows faster and more efficient. This role has been exciting because I get to combine my love for technology with practical automation solutions.
               I’m always looking to learn new things and take on projects that challenge me to grow while making an impact.</p>
               <div>
                <button className='btn btn-warning'>Contact</button>
               </div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <h2>Skills</h2>
            <button className='btn btn-warning me-2 my-2'>Python</button>
            <button className='btn btn-warning me-2 my-2'>Django</button>
            <button className='btn btn-warning me-2 my-2'>Django rest FrameWork</button>
            <button className='btn btn-warning me-2 my-2'>Html</button>
            <button className='btn btn-warning me-2 my-2'>Css</button>
            <button className='btn btn-warning me-2 my-2'>MySql</button>
            <button className='btn btn-warning me-2 my-2'>Bootstrap</button>
            <button className='btn btn-warning me-2 my-2'>React</button>
            <button className='btn btn-warning me-2 my-2'>JavaScript</button>
          </div>
          </div>
        </div>
      </div>
    </section>


    {/* project */}
    <section>
      <div className="container">
        <div className="row">
          <h1 className='text-center'>Projects</h1>
          <div className="col-6">
          <div id="videocontainer">
          <video controls height="600px" width="300px" autoplay loop muted>
              <source src="./src/video\Pix & Words.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoplay loop muted>
              <source src="./assets/videos/netflix_video.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoplay loop muted>
              <source src="./assets/videos/netflix_video.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoplay loop muted>
              <source src="./assets/videos/netflix_video.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoplay loop muted>
              <source src="./assets/videos/netflix_video.mp4" type="video/mp4" />
          </video>
          </div>

          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Index