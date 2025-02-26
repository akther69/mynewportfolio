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

       {/* Navbar */}
      <Navbar id='navbar' bg="light" data-bs-theme="light" expand="lg">
        <Container>
          <Navbar.Brand href="#profile">
            <img
              src={import.meta.env.BASE_URL + "/images/myphoto.jpg"}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <label className='mx-3' style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>SUHAIB AKTHER S</label>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='me-5 mx-2 text-dark' style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>HOME</Nav.Link>
              <Nav.Link href="#aboutme" className='me-5 mx-2 text-dark' style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>ABOUT ME</Nav.Link>
              <Nav.Link href="#mytimeline" className='me-5 mx-2 text-dark' style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>MY TIME LINE</Nav.Link>
              <Nav.Link href="#projects" className='me-5 mx-2 text-dark' style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>PROJECTS</Nav.Link>
              <Nav.Link href="#contactdetails" className='me-5 mx-2 text-dark' style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>CONTACT DETAILS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    {/* into  */}
    <section id="home" className="home-section">
      <div className="container">
        <div className="row">
          <h3 className="text-center text-light heading">
            👋, I'm SUHAIB AKTHER S
          </h3>
          <h6 className="text-center text-light subheading">
            I’m a Python-Django full-stack developer, building web apps with clean and efficient code.
          </h6>

          {/* Social Media Buttons */}
          <div className="text-center social-buttons">
            <a
              href="https://www.linkedin.com/in/suhaib-akther-s-baa753233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTmeq42WTQ%2BnuY7ythGSuA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-light rounded social-btn">
                <FontAwesomeIcon icon={faLinkedin} size="1x" className="mx-2 text-dark hover:text-blue-800" />
                LinkedIn
              </button>
            </a>
            <a href="https://github.com/akther69" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-light social-btn">
                <FontAwesomeIcon icon={faGithub} size="1x" className="mx-2 text-dark hover:text-gray-700" />
                GitHub
              </button>
            </a>
            <a href="mailto:ssuhaibakther12@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-light social-btn">
                <FontAwesomeIcon icon={faEnvelope} size="1x" className="mx-2 text-dark hover:text-red-800" />
                Mail
              </button>
            </a>
          </div>
        </div>

        {/* Up and Down Buttons */}
        <div className="navigation-buttons">
          <button onClick={scrollToTop} className="btn btn-dark up-button">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button onClick={scrollToContact} className="btn btn-dark down-button">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </div>
    </section>


    {/* aboutme */}
    <section id="aboutme" className="aboutme-section">
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-5 text-light aboutme-title">
            About Me
          </h1>
          <h5 className="text-center text-light mt-4 mb-3 aboutme-subtitle">
            Discover more about who I am, what I do, and the programming and technological skills I bring to the table.
          </h5>
        </div>
        <div className="container aboutme-content">
          <div className="row">
            <div className="col-lg-6 aboutme-details">
              <h1 className="text-light aboutme-heading">
                <b>Know more about me</b>
              </h1>
              <p className="text-light aboutme-text">
                I'm a Python-Django Full Stack Developer from Nilgiris, Tamil Nadu, with a BE in Computer Science. I specialize in building dynamic web applications, focusing on scalable back-end systems with Django and responsive front-end interfaces. My experience includes working on various projects that have strengthened my problem-solving skills. Currently, I work as an RPA Developer at IntelliJohn Labs in Kochi, leveraging UiPath to automate workflows and optimize processes. Passionate about continuous learning, I thrive on tackling challenging projects that drive growth and create meaningful impact.
              </p>
              <div>
                <a href="#contactdetails">
                  <button className="btn btn-light contact-btn">Contact</button>
                </a>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 skills-section">
              <h2 className="text-light skills-title">
                <b>Skills</b>
              </h2>
              <div className="skills-list">
                <button className="btn btn-light skill-btn">Python</button>
                <button className="btn btn-light skill-btn">Django</button>
                <button className="btn btn-light skill-btn">Html</button>
                <button className="btn btn-light skill-btn">Django rest FrameWork</button>
                <button className="btn btn-light skill-btn">CSS</button>
                <button className="btn btn-light skill-btn">MySql</button>
                <button className="btn btn-light skill-btn">Bootstrap</button>
                <button className="btn btn-light skill-btn">React</button>
                <button className="btn btn-light skill-btn">JavaScript</button>
                <button className="btn btn-light skill-btn">UiPath</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* timeline */}
<section 
  id='mytimeline' 
  style={{ 
    height: "150vh", 
    backgroundColor: "#9db2bf",
    overflowX: "hidden"
  }} 
  className='p-4'
>
  <div>
    <h1 
      className='text-center p-4' 
      style={{ 
        color: "#2a3335", 
        letterSpacing: "0.1em", 
        lineHeight: "4rem", 
        fontSize: "4.5rem", 
        fontWeight: "bold"
      }}
    >
      My Time Line
    </h1>

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024-05-22"
        iconStyle={{ background: "#2a3335", color: "#2a3335" }}
        contentStyle={{ color: "#2a3335" }}
      >
        <h3 
          className="vertical-timeline-element-title" 
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}
        >
          Graduated; B.E in Computer Science And Engineering
        </h3>
        <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}>
          Hindusthan College of Engineering And Technology Coimbatore
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024-03-21"
        iconStyle={{ background: "#2a3335", color: "#fff" }}
        contentStyle={{ color: "#2a3335" }}
      >
        <h3 
          className="vertical-timeline-element-title" 
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}
        >
          Started Internship as Python-web Development Expert
        </h3>
        <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}>
          Joined Luminar Technolab
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024-11-18"
        iconStyle={{ background: "#2a3335", color: "#fff" }}
      >
        <h3 
          className="vertical-timeline-element-title" 
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}
        >
          Completed Internship
        </h3>
        <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}>
          Luminar Technolab
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024-11-21"
        iconStyle={{ background: "#2a3335" }}
        contentStyle={{ color: "#2a3335" }}
      >
        <h3 
          className="vertical-timeline-element-title" 
          style={{ color: "#2a3335", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}
        >
          Joined as RPA Developer
        </h3>
        <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}>
          Intellijohn Labs
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
</section>


    {/* project */}




    <section id="project-section" style={{ backgroundColor: "#dde6ed" }} className="p-3">
  <div className="project-wrapper">
    <h1 className="text-middle my-5" style={{ letterSpacing: "0.1em", lineHeight: "4rem", fontSize: "4.5rem", fontWeight: "bold" }}>
      Projects
    </h1>

    {/* Project 1: Pix & Words */}
    <div className="project-item flex mb-5">
      <div className="video-display video-box" style={{ flex: "0 0 50%", paddingRight: "20px" }}>
        <video className="project-video" controls autoPlay loop muted>
          <source src={import.meta.env.BASE_URL + "/video/Pix & Words.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="project-desc" style={{ flex: "0 0 50%", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em", marginTop: "60px" }}>
        <h1>Pix & Words</h1>
        <p>
          Pix & Words is a social media platform where users can share images, videos, and text posts. It features likes, comments, real-time updates, and customizable profiles for a personalized and engaging experience.
        </p>
        <a href="https://github.com/akther69/pix-words.git" target="_blank" rel="noopener noreferrer">
          <button className="btn-github">View on GitHub</button>
        </a>
      </div>
    </div>

    {/* Project 2: Venus Fancy */}
    <div className="project-item flex mb-5">
      <div className="video-display video-box" style={{ flex: "0 0 50%", paddingRight: "20px" }}>
        <video className="project-video" controls autoPlay loop muted>
          <source src={import.meta.env.BASE_URL + "/video/VenusFancy.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="project-desc" style={{ flex: "0 0 50%", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em", marginTop: "60px" }}>
        <h1>Venus Fancy</h1>
        <p>
          The web application is an e-commerce platform for purchasing accessories like necklaces, bangles, and rings. Built with Django, Tailwind CSS, and DevUI, it offers a smooth, user-friendly shopping experience with essential e-commerce features.
        </p>
        <a href="https://github.com/akther69/venus-fancy.git" target="_blank" rel="noopener noreferrer">
          <button className="btn-github">View on GitHub</button>
        </a>
      </div>
    </div>

    {/* Project 3: To-Do Web Application */}
    <div className="project-item flex mb-5">
      <div className="video-display video-box" style={{ flex: "0 0 50%", paddingRight: "20px" }}>
        <video className="project-video" controls autoPlay loop muted>
          <source src={import.meta.env.BASE_URL + "/video/To_do.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="project-desc" style={{ flex: "0 0 50%", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em", marginTop: "60px" }}>
        <h1>To-Do Web Application</h1>
        <p>
          A task management app with login functionality, enabling users to create, update, and delete tasks. Developed using Django, HTML, CSS, and SQLite for efficient task tracking.
        </p>
        <a href="https://github.com/akther69/todo.git" target="_blank" rel="noopener noreferrer">
          <button className="btn-github">View on GitHub</button>
        </a>
      </div>
    </div>

    {/* Project 4: Expense Manager */}
    <div className="project-item flex mb-5">
      <div className="video-display video-box" style={{ flex: "0 0 50%", paddingRight: "20px" }}>
        <video className="project-video" controls autoPlay loop muted>
          <source src={import.meta.env.BASE_URL + "/video/Expense Manager.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="project-desc" style={{ flex: "0 0 50%", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em", marginTop: "60px" }}>
        <h1>Expense Manager</h1>
        <p>
          An expense tracking app that visualizes monthly spending with graphs by category and payment method. It includes a REST API and email/SMS notifications to help users stay on top of their finances.
        </p>
        <a href="https://github.com/akther69/expense-manager.git" target="_blank" rel="noopener noreferrer">
          <button className="btn-github">View on GitHub</button>
        </a>
      </div>
    </div>

    {/* Project 5: Netflix Clone */}
    <div className="project-item flex mb-5">
      <div className="video-display video-box" style={{ flex: "0 0 50%", paddingRight: "20px" }}>
        <video className="project-video" controls autoPlay loop muted>
          <source src={import.meta.env.BASE_URL + "/video/Netflix Clone.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="project-desc" style={{ flex: "0 0 50%", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em", marginTop: "60px" }}>
        <h1>Netflix Clone (Front-End)</h1>
        <p>
          A front-end Netflix clone built to showcase streaming UI, featuring an attractive layout with browsing and preview options. Designed to replicate the user experience of a streaming platform.
        </p>
        <a href="https://github.com/akther69/netflix.git" target="_blank" rel="noopener noreferrer">
          <button className="btn-github">View on GitHub</button>
        </a>
      </div>
    </div>

    <section>
      <div className="text-middle">
        <h3 className="text-middle p-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Thanks for scrolling!</h3>
        <a href={import.meta.env.BASE_URL + "/pdf/suhaib_akther_s_resume.pdf"} download>
          <button className="btn-resume mb-5" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}>
            Download Resume
          </button>
        </a>
      </div>
    </section>
  </div>
</section>




    {/* contact info */}
    <section id='contactdetails'>
            <div className="container my-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 text-center">
                        <h1 
                            className='text-center my-3' 
                            style={{ 
                                letterSpacing: "0.1em", 
                                lineHeight: "2rem",
                                fontSize: "2.5rem",
                                fontWeight: "bold"
                            }}
                        >
                            Contact Details
                        </h1>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-5 justify-center">
                            {/* LinkedIn icon */}
                            <a href="https://www.linkedin.com/in/suhaib-akther-s-baa753233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTmeq42WTQ%2BnuY7ythGSuA%3D%3D" 
                               target="_blank" 
                               rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon 
                                    icon={faLinkedin} 
                                    size="2x" 
                                    className="mx-2 text-primary hover:text-blue-800" 
                                />
                            </a>

                            {/* GitHub icon */}
                            <a href="https://github.com/akther69" 
                               target="_blank" 
                               rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon 
                                    icon={faGithub} 
                                    size="2x" 
                                    className="mx-2 text-dark hover:text-gray-700" 
                                />
                            </a>

                            {/* Mail icon */}
                            <a href="mailto:ssuhaibakther12@gmail.com" 
                               target="_blank" 
                               rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    size="2x" 
                                    className="mx-2 text-secondary hover:text-red-800" 
                                />
                            </a>

                            {/* Phone icon */}
                            <a href="tel:+917598488180">
                                <FontAwesomeIcon 
                                    icon={faPhone} 
                                    size="2x" 
                                    className="mx-2 text-primary hover:text-green-800" 
                                />
                            </a>

                            {/* WhatsApp icon */}
                            <a href="https://wa.me/qr/XMZHBPXILTBTF1" 
                               target="_blank" 
                               rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon 
                                    icon={faWhatsapp} 
                                    size="2x" 
                                    className="mx-2 text-success hover:text-green-700" 
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Index