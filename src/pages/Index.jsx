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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
  function scrollToContact() {
    document.getElementById("contactdetails").scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <div>



{/* Navbar */}
<Navbar
  id="navbar"
  expand="lg"
  fixed="top"
  style={{
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    padding: "12px 0",
    zIndex: "1000"
  }}
>
  <Container>
    <Navbar.Brand
      href="#profile"
      className="d-flex align-items-center"
    >
      <img
        src={import.meta.env.BASE_URL + "/images/myphoto.jpg"}
        alt="Profile"
        className="rounded-circle"
        style={{
          width: "45px",
          height: "45px",
          objectFit: "cover",
          border: "2px solid #3b82f6"
        }}
      />

      <span
        className="ms-3"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "700",
          letterSpacing: "2px",
          color: "#1f2937",
          fontSize: "1rem"
        }}
      >
        SUHAIB AKTHER S
      </span>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className="nav-item-custom">
          HOME
        </Nav.Link>

        <Nav.Link href="#aboutme" className="nav-item-custom">
          ABOUT ME
        </Nav.Link>

        <Nav.Link href="#mytimeline" className="nav-item-custom">
          MY TIMELINE
        </Nav.Link>

        <Nav.Link href="#project-section" className="nav-item-custom">
          PROJECTS
        </Nav.Link>

        <Nav.Link href="#contactdetails" className="nav-item-custom">
          CONTACT
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    {/* into  */}
    <section id="home" className="home-section">
      <div className="container">
        <div className="row">
          <h3 className="text-center text-light heading hero-title">
  <span className="wave-hand">👋</span>
 <span className="name-gradient">
  SUHAIB AKTHER S
</span>
</h3>
          <h6 className="text-center text-light subheading">
            I’m a Python-Django full-stack developer and UiPath RPA developer, building web applications and automation solutions with clean and efficient code.
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

      <div className="bubble-container">
  {[...Array(580)].map((_, i) => (
    <span
      key={i}
      className="bubble"
      style={{
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDuration: `${Math.random() * 4 + 4}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ))}
</div>
    </section>


{/* aboutme */}
<section id="aboutme" className="aboutme-section">

  <div className="container mt-5">

    <div className="about-modern-card">

      <div className="about-profile-badge mb-4">
        👨‍💻 About Me
      </div>

      <h3 className="about-role">
        Python-Django Full Stack Developer & UiPath RPA Developer
      </h3>

      <p className="about-description">
        Passionate about building modern web applications and intelligent
        automation solutions. I specialize in Python, Django, React,
        REST APIs, MySQL, and UiPath, creating scalable digital products
        and workflow automations that solve real-world problems.
      </p>

      <div className="tech-stack">

        <span>🐍 Python</span>
        <span>🎯 Django</span>
        <span>⚛️ React</span>
        <span>💻 JavaScript</span>
        <span>🌐 HTML</span>
        <span>🎨 CSS</span>
        <span>🗄️ MySQL</span>
        <span>🔗 REST API</span>
        <span>⚙️ UiPath</span>
        <span>🤖 RPA</span>
        <span>📦 Git</span>
        <span>🚀 GitHub</span>

      </div>

      <a href="#contactdetails">
        <button className="contact-modern-btn mt-4">
          📩 Let's Connect
        </button>
      </a>

    </div>

  </div>

</section>


    {/* timeline */}
<section
  id='mytimeline'
  style={{
    backgroundColor: "#9db2bf",
    overflowX: "hidden"
  }}
  className='p-4'
>
  <div>
    <h1 className="timeline-title">
  My Journey
</h1>

<p className="timeline-subtitle">
  From Computer Science graduate to Full-Stack Developer and UiPath RPA Developer.
</p>

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
          🎓 Graduated – B.E Computer Science & Engineering
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
          💻 Started Python Full-Stack Internship
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
          🏆 Successfully Completed Internship
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
          🤖 Joined as UiPath RPA Developer
        </h3>
        <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}>
          Intellijohn Labs
        </p>
      </VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="2025-12-05"
  iconStyle={{ background: "#2a3335", color: "#fff" }}
  contentStyle={{ color: "#2a3335" }}
>
  <h3
    className="vertical-timeline-element-title"
    style={{
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "0.1em"
    }}
  >
    📌 Completed Tenure as UiPath RPA Developer
  </h3>
  <p
    style={{
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "0.1em"
    }}
  >
    Intellijohn Labs
  </p>
</VerticalTimelineElement>

    </VerticalTimeline>
  </div>
</section>


    {/* project */}




    <section id="project-section" style={{ backgroundColor: "#dde6ed" }} className="p-1">
  <div className="project-wrapper">
    <h1 className="project-title">
   Featured Projects
</h1>

<p className="project-subtitle">
  A collection of web applications, automation solutions, and personal projects showcasing my skills in Python, Django, React, and UiPath.
</p>

    {/* Project 1: Pix & Words */}
<div className="project-item">
  <div className="video-display video-box">

    <div className="video-header">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <video className="project-video" controls autoPlay loop muted>
      <source
        src={import.meta.env.BASE_URL + "/video/Pix & Words.mp4"}
        type="video/mp4"
      />
    </video>

  </div>

  <div className="project-desc">
    <h1>📸 Pix & Words</h1>

    <p>
      Pix & Words is a social media platform where users can share images,
      videos, and text posts. It features likes, comments, real-time updates,
      and customizable profiles for a personalized and engaging experience.
    </p>

    <a
      href="https://github.com/akther69/pix-words.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn-github">
        View on GitHub
      </button>
    </a>
  </div>
</div>

    {/* Project 2: Venus Fancy */}
    {/* Project 2: Venus Fancy */}
<div className="project-item">
  <div className="video-display video-box">

    <div className="video-header">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <video className="project-video" controls autoPlay loop muted>
      <source
        src={import.meta.env.BASE_URL + "/video/VenusFancy.mp4"}
        type="video/mp4"
      />
    </video>

  </div>

  <div className="project-desc">
    <h1>🛍️ Venus Fancy</h1>

    <p>
      Venus Fancy is a modern e-commerce platform for purchasing fashion
      accessories such as necklaces, bangles, earrings, rings, and more.
      Built using Django, Tailwind CSS, and DevUI, it delivers a seamless
      shopping experience with secure authentication, cart management,
      order processing, and responsive design.
    </p>

    <a
      href="https://github.com/akther69/venus-fancy.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn-github">
        View on GitHub
      </button>
    </a>
  </div>
</div>

    {/* Project 3: To-Do Web Application */}
    {/* Project 3: To-Do Web Application */}
<div className="project-item">
  <div className="video-display video-box">

    <div className="video-header">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <video className="project-video" controls autoPlay loop muted>
      <source
        src={import.meta.env.BASE_URL + "/video/To_do.mp4"}
        type="video/mp4"
      />
    </video>

  </div>

  <div className="project-desc">
    <h1>✅ To-Do Web Application</h1>

    <p>
      A productivity-focused task management application that allows users
      to create, update, organize, and delete tasks efficiently. Developed
      using Django, HTML, CSS, and SQLite, the application includes user
      authentication and provides a simple and intuitive interface for
      managing daily activities.
    </p>

    <a
      href="https://github.com/akther69/todo.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn-github">
        View on GitHub
      </button>
    </a>
  </div>
</div>


    {/* Project 4: Expense Manager */}
    {/* Project 4: Expense Manager */}
<div className="project-item">
  <div className="video-display video-box">

    <div className="video-header">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <video className="project-video" controls autoPlay loop muted>
      <source
        src={import.meta.env.BASE_URL + "/video/Expense Manager.mp4"}
        type="video/mp4"
      />
    </video>

  </div>

  <div className="project-desc">
    <h1>💰 Expense Manager</h1>

    <p>
      Expense Manager is a personal finance tracking application designed
      to monitor monthly spending through interactive charts and reports.
      Built with Django and Django REST Framework, it includes category-wise
      expense analysis, payment method tracking, API integration, and email
      or SMS notifications for enhanced financial management.
    </p>

    <a
      href="https://github.com/akther69/expense-manager.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn-github">
        View on GitHub
      </button>
    </a>
  </div>
</div>

    {/* Project 5: Netflix Clone */}
    {/* Project 5: Netflix Clone */}
<div className="project-item">
  <div className="video-display video-box">

    <div className="video-header">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <video className="project-video" controls autoPlay loop muted>
      <source
        src={import.meta.env.BASE_URL + "/video/Netflix Clone.mp4"}
        type="video/mp4"
      />
    </video>

  </div>

  <div className="project-desc">
    <h1>🎬 Netflix Clone (Front-End)</h1>

    <p>
      A visually appealing front-end Netflix clone created to replicate the
      user experience of a modern streaming platform. Developed using HTML,
      CSS, and JavaScript, it features responsive layouts, movie showcase
      sections, interactive UI elements, and a sleek design inspired by
      the original Netflix interface.
    </p>

    <a
      href="https://github.com/akther69/netflix.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn-github">
        View on GitHub
      </button>
    </a>
  </div>
</div>

   <section className="resume-section">
  <div className="text-center">

    <h2 className="resume-title">
      🚀 Thanks for Scrolling!
    </h2>

    <p className="resume-subtitle">
      Interested in my work? Download my resume and let's build something amazing together.
    </p>

    <a
      href={`${import.meta.env.BASE_URL}pdf/Suhaib_Akther_S_Resume.pdf`}
      download="Suhaib_Akther_S_Resume.pdf"
    >
      <button className="resume-download-btn">
        📄 Download Resume
      </button>
    </a>

  </div>
</section>

  </div>
</section>




{/* Contact Section */}
<section id="contactdetails" className="contact-section">
  <div className="container">

    <div className="text-center">

      <h1 className="contact-title">
        📬 Let's Connect
      </h1>

      <p className="contact-subtitle">
        Open to Full-Stack Development, UiPath RPA opportunities,
        collaborations, and exciting projects.
      </p>

      <div className="contact-icons">

        <a
          href="https://www.linkedin.com/in/suhaib-akther-s-baa753233"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-card"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/akther69"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-card"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:ssuhaibakther12@gmail.com"
          className="contact-icon-card"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </a>

        <a
          href="tel:+917598488180"
          className="contact-icon-card"
        >
          <FontAwesomeIcon icon={faPhone} />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/917598488180"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-card"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>WhatsApp</span>
        </a>

      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Index