import React from 'react'
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap";
import { faArrowUp,faArrowDown } from "@fortawesome/free-solid-svg-icons"; 




function Index() {
  function scrollToTop() {
    document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
  }
  function scrollToContact() {
    document.getElementById("contactdetails").scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <div>

      {/* navbar */}

      <Navbar id='navbar'  bg="light" data-bs-theme="light">
        <Container>
          <Nav>
          <Nav.Link href="#profile">
            {/* to set profile photo on navbar */}

            <img src="./public/images/myphoto.jpeg (1).jpg" alt="Profile" className="rounded-circle" style={{ width: "40px", height: "40px", objectFit: "cover" }}/>
            <label className='mx-3' style={{fontFamily: "'Poppins', sans-serif",fontWeight: "bold"}}>SUHAIB AKTHER S</label>
          </Nav.Link>
        </Nav>
          <Nav className="">
            {/* setting nav bar title */}

          <Nav.Link href="#home" className='me-5 mx-2 text-dark' style={{fontFamily: "'Poppins', sans-serif",fontWeight: "bold"}}>HOME</Nav.Link>
            <Nav.Link href="#aboutme" className='me-5 mx-2 text-dark' style={{fontFamily: "'Poppins', sans-serif",fontWeight: "bold"}}>ABOUT ME</Nav.Link>
            <Nav.Link href="#mytimeline" className='me-5 mx-2 text-dark' style={{fontFamily: "'Poppins', sans-serif",fontWeight: "bold"}}>MY TIME LINE</Nav.Link>
            <Nav.Link href="#projects" className='me-5 mx-2 text-dark' style={{fontFamily: "'Poppins', sans-serif",fontWeight: "bold"}}>PROJECTS</Nav.Link>
            <Nav.Link href="#contactdetails" className='me-5 mx-2 text-dark' style={{fontFamily: "'Poppins', sans-serif",fontWeight: "bold"}}>CONTACT DETAILS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    {/* into  */}
    <section id='home' style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#27374d"}}>
        <div className="container">
            <div className="row">
                <h3 className='text-center text-light' style={{ letterSpacing: "0.1em", lineHeight: "5rem",fontSize: "4.5rem",fontWeight: "bold"}}>👋,I'm SUHAIB AKTHER S</h3>
                <h6 className="text-center mt-5 text-light mb-3" style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>I’m a Python-Django full-stack developer, building web apps with clean and efficient code.</h6>
                
                {/* creating linkedin icon */}
                <div className='text-center mt-3'>
                <a href="https://www.linkedin.com/in/suhaib-akther-s-baa753233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTmeq42WTQ%2BnuY7ythGSuA%3D%3D" target="_blank" rel="noopener noreferrer"><button className='btn btn-light rounded me-2'><FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-2 text-dark hover:text-blue-800" />LinkedIn</button>
                </a>
                
                {/* creating github icon */}
                <a href="https://github.com/akther69" target="_blank" rel="noopener noreferrer"><button className='btn btn-light me-2'><FontAwesomeIcon icon={faGithub} size="1x" className="mx-2 text-dark hover:text-gray-700" />GitHub</button></a>

                {/* creating mail icon */}
                <a href="mailto:ssuhaibakther12@gmail.com" target="_blank" rel="noopener noreferrer"><button className='btn btn-light'><FontAwesomeIcon icon={faEnvelope} size="1x" className="mx-2 text-dark hover:text-red-800" />Mail</button></a>
                </div>
            </div>

            {/* two button to direct up and down */}
            <button onClick={scrollToTop} className="btn btn-dark up-button"><FontAwesomeIcon icon={faArrowUp} /></button>
            <button onClick={scrollToContact} className="btn btn-dark down-button"><FontAwesomeIcon icon={faArrowDown} /></button>
        </div>
    </section>


    {/* aboutme */}
    <section id='aboutme' style={{ height: "100vh",backgroundColor:"#526d82"}}>
      <div className="container">
        <div className="row">
          <h1 className='text-center mt-5 text-light' style={{ letterSpacing: "0.1em", lineHeight: "4rem",fontSize: "4.5rem",fontWeight: "bold"}}>About Me</h1>
          <h5 className='text-center text-light mt-4 mb-3' style={{fontFamily: "'Poppins', sans-serif"}}>Discover more about who I am, what I do, and the programming and technological skills I bring to the table.</h5>
        </div>
        <div className="container p-5">
          <div className="row">
          <div className="col-6">
            <h1 className='text-light' style={{fontFamily: "'Poppins', sans-serif"}}><b>Know more about me</b></h1>

            {/* my details */}
            <p className='text-light ' style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em",lineHeight:"2"}}>I'm a Python-Django Full Stack Developer from Nilgiris, Tamil Nadu, with a BE in Computer Science. I specialize in building dynamic web applications, focusing on scalable back-end systems with Django and responsive front-end interfaces. My experience includes working on various projects that have strengthened my problem-solving skills. Currently, I work as an RPA Developer at IntelliJohn Labs in Kochi, leveraging UiPath to automate workflows and optimize processes. Passionate about continuous learning, I thrive on tackling challenging projects that drive growth and create meaningful impact.</p>
               <div>
                <a href="#contactdetails"><button className='btn btn-light'>Contact</button></a>
                
               </div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <h2 className='text-light' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}><b>Skills</b></h2>

            {/* my skills */}
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Python</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Django</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Html</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Django rest FrameWork</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>CSS</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>MySql</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Bootstrap</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>React</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>JavaScript</button>
            <button className='btn btn-light me-2 my-2 p-3 px-3' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>UiPath</button>


          </div>
          </div>
        </div>
      </div>
    </section>


    {/* timeline */}
    <section id='mytimeline' style={{ height: "150vh", backgroundColor: "#9db2bf"}} className='p-4'>
    <div>
      <h1 className='text-center p-4' style={{color: "#2a3335", letterSpacing: "0.1em", lineHeight: "4rem",fontSize: "4.5rem",fontWeight: "bold"}}>My Time Line</h1>

      {/* created time line using react time line  */}
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
    <section id='projects' style={{ backgroundColor: "#dde6ed"}}>
      <div className="container">
        <div className="row">
          <h1 className='text-center my-5' style={{ letterSpacing: "0.1em", lineHeight: "4rem",fontSize: "4.5rem",fontWeight: "bold"}}>Projects</h1>
          <div className="col-6">
            {/* the lapto image is set on index.css and the video size control are set in the same file */}
          <div id="videocontainer">
          <video controls height="500px" width="300px" autoPlay loop muted>
              <source src="./public/video/Pix & Words.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoPlay loop muted>
              <source src="./public/video/VenusFancy.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoPlay loop muted>
              <source src="./public/video/To_do.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoPlay loop muted>
              <source src="./public/video/Expense Manager.mp4" type="video/mp4" />
          </video>
          </div>

          <div id="videocontainer">
          <video controls height="600px" width="300px" autoPlay loop muted>
              <source src="./public/video/Netflix Clone.mp4" type="video/mp4" />
          </video>
          </div>

          </div>
          <div className="col-6">
            <div   style={{ marginTop: '60px' ,fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>

              {/* this coloumn explain the project and there will be a button to accesss github */}
              <h1>Pix & Words</h1>
              <p>Pix & Words is a social media platform where users can share images, videos, and text posts. It features likes, comments, real-time updates, and customizable profiles for a personalized and engaging experience.</p>
              <a href="https://github.com/akther69/pix-words.git" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-danger'>View on GitHub</button>
              </a>

            </div >
            <div   style={{ marginTop: '190px',fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}><h1>Venus Fancy</h1>
            <p>The web application is an e-commerce platform for purchasing accessories like necklaces, bangles, and rings. Built with Django, Tailwind CSS, and DevUI, it offers a smooth, user-friendly shopping experience with essential e-commerce features.</p>
            <a href="https://github.com/akther69/venus-fancy.git" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-danger'>View on GitHub</button>
              </a>            </div>
            <div   style={{ marginTop: '200px',fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>
              <h1>To-Do Web Application</h1>
              <p>A task management app with login functionality, enabling users to create, update, and delete tasks. Developed using Django, HTML, CSS, and SQLite for efficient task tracking.</p>
              <a href="https://github.com/akther69/todo.git" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-danger'>View on GitHub</button>
              </a>
             
            </div>
            <div   style={{ marginTop: '200px',fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>
              <h1>Expense Manager</h1>
              <p>An expense tracking app that visualizes monthly spending with graphs by category and payment method. It includes a REST API and email/SMS notifications to help users stay on top of their finances.</p>
              <a href="https://github.com/akther69/expense-manager.git" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-danger'>View on GitHub</button>
              </a>            </div>
            <div   style={{ marginTop: '200px',fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>
              <h1>Netflix Clone (Front-End)</h1>
              <p>A front-end Netflix clone built to showcase streaming UI, featuring an attractive layout with browsing and preview options. Designed to replicate the user experience of a streaming platform.</p>
              <a href="https://github.com/akther69/netflix.git" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-danger'>View on GitHub</button>
              </a>            </div>
          </div>
        </div>
      </div>

      {/* resume download */}
    <section>
      <div className='text-center'>
      <h3 className='text-center p-3' style={{fontFamily: "'Poppins', sans-serif"}}>Thanks for scrolling !  🙏✨</h3>
      <a href="./public/pdf/suhaib_akther_s_resume.pdf"><button className='btn btn-outline-primary mb-5' style={{fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em"}}>Download Resume</button>
      </a>
      </div>
    </section>
    </section>


    {/* contact info */}
    <section id='contactdetails'>
      <div className="container my-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 text-center">
            <h1 className='text-center my-3' style={{ letterSpacing: "0.1em", lineHeight: "2rem",fontSize: "2.5rem",fontWeight: "bold"}}>Contact Details</h1>

            {/* linkedin icon */}
          <div className="flex space-x-4 mt-5">
      <a href="https://www.linkedin.com/in/suhaib-akther-s-baa753233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTmeq42WTQ%2BnuY7ythGSuA%3D%3D" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2 text-primary hover:text-blue-800" />
      </a>

      {/* github icon */}
      <a href="https://github.com/akther69" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2 text-dark hover:text-gray-700" />
      </a>

      {/* mail icon */}
      <a href="mailto:ssuhaibakther12@gmail.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faEnvelope} size="2x" className="mx-2 text-secondary hover:text-red-800" />
      </a>

      {/* phone icon */}
      <a href="tel:+917598488180">
        <FontAwesomeIcon icon={faPhone} size="2x" className="mx-2 text-primary hover:text-green-800" />
      </a>

      {/* whatsapp icon */}
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