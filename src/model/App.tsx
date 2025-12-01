import { useState } from "react";
import "../assets/App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["TypeScript", "Socket.io", "PostgreSQL"],
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization",
      technologies: ["React", "Chart.js", "API Integration"],
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "HTML/CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
  ];

  const bio = {
    intro:
      "Soy un Ingeniero de Software Back y Full-Stack con más de 12 años de experiencia desarrollando soluciones tecnológicas innovadoras. Actualmente me desempeño en Banco de Chile, donde aplico mis conocimientos para crear sistemas robustos y escalables.",
    expertise:
      "Mi experiencia abarca el desarrollo de aplicaciones web completas, desde el frontend hasta el backend, con un fuerte enfoque en la calidad del código y las mejores prácticas de desarrollo.",
    technologies:
      "Trabajo con tecnologías modernas como React, Node.js, Python y bases de datos SQL/NoSQL. Además, me encuentro en constante aprendizaje, actualmente enfocado en tecnologías Cloud.",
    approach:
      "Me apasiona resolver problemas complejos a través del código y crear experiencias de usuario excepcionales. Creo firmemente en el desarrollo de software limpio, mantenible y bien documentado.",
    location: "🌎 Santiago, Chile",
  };

  const contactInfo = {
    email: "drojaslopez.ing@gmail.com",
    linkedin: "https://www.linkedin.com/in/drojaslopez",
    github: "https://github.com/drojaslopez",
  };
  

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-brand">
          <img src={"/src/assets/drlsinfondo.png"} alt="Portafolio" className="logo" />
        </div>

        <div className="nav-links">
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setActiveSection("home")}
          >
            Inicio
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setActiveSection("about")}
          >
            Sobre Mí
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setActiveSection("projects")}
          >
            Proyectos
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => setActiveSection("skills")}
          >
            Habilidades
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setActiveSection("contact")}
          >
            Contacto
          </a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi everyone, I'm Daniel</h1>
          <p className="hero-subtitle">
            Software Engineer | Full-Stack | Cloud Engineer (In progress)
          </p>
          <p className="hero-description">
            {/*  Creo soluciones web innovadoras y escalables con las últimas
            tecnologías. Apasionado por el código limpio y las experiencias de
            usuario excepcionales. */}
            I'm from Santiago - Chile, I started in software development in
            2015, with a few projects for markets, clinics and agricultural
            companies. Now I am working in Banco de Chile
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Mi GitHub</button>
            <button className="secondary-btn">Contactar</button>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{bio.intro}</p>
            <p>{bio.expertise}</p>
            <p>{bio.technologies}</p>
            <p>{bio.approach}</p>
            <p className="location">{bio.location}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contacto</h2>
        <div className="contact-content">
          <p>¿Interesado en trabajar juntos? ¡Me encantaría saber de ti!</p>
          <div className="contact-info">
            {/* 
            <p>Email: drojaslopez.ing@gmail.com</p>
            <p>LinkedIn: /in/danielrojas</p>
            <p>GitHub: /danielrojas</p> */}
            <div className="contact-info">
              <p>Email: {contactInfo.email}</p>
              <p>
                LinkedIn:{" "}
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver perfil
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver perfil
                </a>
              </p>
            </div>
          </div>
          <button className="primary-btn">Enviar Mensaje</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Daniel Rojas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
