import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { color } from 'framer-motion';





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
    </Nav>


    {/* into  */}
    <section style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#27374d"}}>
        <div className="container">
            <div className="row">
                <h3 className='text-center text-light' style={{ letterSpacing: "0.1em", lineHeight: "4rem",fontSize: "4.5rem",fontWeight: "bold"}}>👋,I'm SUHAIB AKTHER S</h3>
                <h3 className="text-center mt-5 text-light">PYTHON FULL STACK DEVELOPER</h3>
            </div>
        </div>
    </section>


    {/* aboutme */}
    <section style={{ height: "100vh",backgroundColor:"#526d82"}}>
      <div className="container">
        <div className="row">
          <h1 className='text-center mt-5 text-light' style={{ letterSpacing: "0.1em", lineHeight: "4rem",fontSize: "4.5rem",fontWeight: "bold"}}>About Me</h1>
          <h5 className='text-center text-light my-5' style={{fontFamily: "'Poppins', sans-serif"}}>Discover more about who I am, what I do, and the programming and technological skills I bring to the table.</h5>
        </div>
        <div className="container p-5">
          <div className="row">
          <div className="col-6">
            <h1 className='text-light' style={{fontFamily: "'Poppins', sans-serif"}}>Know more about me</h1>
            <p className='text-light ' style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>I'm a Python-Django full-stack developer from Nilgiris, Tamil Nadu, with a BE in Computer Science. I love building dynamic web applications, focusing on scalable back-end systems with Django and responsive front-end interfaces using Tailwind CSS. I've worked on e-commerce platforms and task management tools, which have sharpened my problem-solving skills.Right now, I'm an RPA Developer at IntelliJohn Labs in Kochi, using UiPath to automate workflows and make processes more efficient. I'm always eager to learn new things and take on projects that push me to grow and make a real impact.</p>
               <div>
                <button className='btn btn-light'>Contact</button>
               </div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <h2 className='text-light' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Skills</h2>
            <button className='btn btn-light me-2 my-2'>Python</button>
            <button className='btn btn-light me-2 my-2'>Django</button>
            <button className='btn btn-light me-2 my-2'>Django rest FrameWork</button>
            <button className='btn btn-light me-2 my-2'>Html</button>
            <button className='btn btn-light me-2 my-2'>CSS</button>
            <button className='btn btn-light me-2 my-2'>MySql</button>
            <button className='btn btn-light me-2 my-2'>Bootstrap</button>
            <button className='btn btn-light me-2 my-2'>React</button>
            <button className='btn btn-light me-2 my-2'>JavaScript</button>
            <button className="btn btn-light me-2 my-2" style={{ transition: "transform 0.3s ease-in-out" }}onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}>Python</button>

          </div>
          </div>
        </div>
      </div>
    </section>

    {/* timeline */}

    <section style={{ height: "150vh", backgroundColor: "#9db2bf"}} className='p-4'>
    <div>
      <h1 className='text-center p-4' style={{color: "#2a3335", letterSpacing: "0.1em", lineHeight: "4rem",fontSize: "4.5rem",fontWeight: "bold"}}>Time Line</h1>
      <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2024-05-22"
              iconStyle={{ background: "#2a3335", color: "#2a3335" }}
              contentStyle={{ color: "#2a3335"}}
            >
              <h3 className="vertical-timeline-element-title" style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Graduated; B.E in Computer Science And Engineering</h3>
              <p style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Hindusthan College of Engineering And Technology Coimbatore</p>
            </VerticalTimelineElement>
      
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2024-03-21"
              iconStyle={{ background: "#2a3335", color: "#fff" }}
              contentStyle={{ color: "#2a3335"}}

            >
              <h3 className="vertical-timeline-element-title" style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Started Internship as Python-web Development Expert</h3>
              <p style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Joined Luminar Technolab</p>
            </VerticalTimelineElement>
      
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date ="2024-11-18"
              iconStyle={{ background: "#2a3335", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title" style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Completed Internship</h3>
              <p style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Luminar Technolab</p>
            </VerticalTimelineElement>

            
      
      
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2024-11-21"
              iconStyle={{ background: "#2a3335",  }}
              contentStyle={{ color: "#2a3335"}}

            >
              <h3 className="vertical-timeline-element-title" style={{color:"#2a3335",fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Joined as RPA Developer</h3>
              <p style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Intellijohn Labs</p>
            </VerticalTimelineElement>

            
      
          </VerticalTimeline>
    </div>
    </section>


    {/* project */}
    <section style={{ backgroundColor: "#dde6ed"}}>
      <div className="container">
        <div className="row">
          <h1 className='text-center my-5' style={{ letterSpacing: "0.1em", lineHeight: "4rem",fontSize: "4.5rem",fontWeight: "bold"}}>Projects</h1>
          <div className="col-6">
          <div id="videocontainer">
          <video controls height="500px" width="300px" autoPlay loop muted>
              <source src="./src/video\Pix & Words.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoPlay loop muted>
              <source src="./src/video/VenusFancy.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoPlay loop muted>
              <source src="./src/video/To_do.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoPlay loop muted>
              <source src="./src/video/Expense Manager.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoPlay loop muted>
              <source src="./src/video\Netflix Clone.mp4" type="video/mp4" />
          </video>
          </div>

          </div>
          <div className="col-6">
            <div   style={{ marginTop: '60px' ,fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>
              <h1>Pix & Words</h1>
              <p>Pix & Words is a social media platform where users can share images, videos, and text posts. It features likes, comments, real-time updates, and customizable profiles for a personalized and engaging experience.</p>
              <button className='btn btn-danger'>View on GitHub</button>

            </div >
            <div   style={{ marginTop: '190px',fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}><h1>Venus Fancy</h1>
            <p>The web application is an e-commerce platform for purchasing accessories like necklaces, bangles, and rings. Built with Django, Tailwind CSS, and DevUI, it offers a smooth, user-friendly shopping experience with essential e-commerce features.</p>
            <button className='btn btn-danger'>View on GitHub</button>
            </div>
            <div   style={{ marginTop: '200px',fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>
              <h1>To-Do Web Application</h1>
              <p>A task management app with login functionality, enabling users to create, update, and delete tasks. Developed using Django, HTML, CSS, and SQLite for efficient task tracking.</p>
              <button className='btn btn-danger'>View on GitHub</button>
            </div>
            <div   style={{ marginTop: '200px',fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>
              <h1>Expense Manager</h1>
              <p>An expense tracking app that visualizes monthly spending with graphs by category and payment method. It includes a REST API and email/SMS notifications to help users stay on top of their finances.</p>
              <button className='btn btn-danger'>View on GitHub</button>
            </div>
            <div   style={{ marginTop: '200px',fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>
              <h1>Netflix Clone (Front-End)</h1>
              <p>A front-end Netflix clone built to showcase streaming UI, featuring an attractive layout with browsing and preview options. Designed to replicate the user experience of a streaming platform.</p>
              <button className='btn btn-danger'>View on GitHub</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>

    {/* contact info */}


    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 text-center">
            <h1 className='text-center my-3' style={{ letterSpacing: "0.1em", lineHeight: "2rem",fontSize: "2.5rem",fontWeight: "bold"}}>Contact Details</h1>
          <div className="flex space-x-4 mt-5">
      <a href="https://www.linkedin.com/in/suhaib-akther-s-baa753233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTmeq42WTQ%2BnuY7ythGSuA%3D%3D" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2 text-primary hover:text-blue-800" />
      </a>

      <a href="https://github.com/akther69" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2 text-dark hover:text-gray-700" />
      </a>

      <a href="mailto:ssuhaibakther12@gmail.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faEnvelope} size="2x" className="mx-2 text-secondary hover:text-red-800" />
</a>



      <a href="tel:+917598488180">
        <FontAwesomeIcon icon={faPhone} size="2x" className="mx-2 text-primary hover:text-green-800" />
      </a>

      <a href="https://wa.me/qr/XMZHBPXILTBTF1" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" className="mx-2 text-success hover:text-green-700" />
      </a>
    </div>
              </div>
          <div className="col-4"></div>
        </div>
      </div>

    </section>


    </div>
  )
}

export default Index