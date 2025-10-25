import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['TypeScript', 'Socket.io', 'PostgreSQL']
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      technologies: ['React', 'Chart.js', 'API Integration']
    }
  ]

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
    'HTML/CSS', 'MongoDB', 'PostgreSQL', 'Git', 'Docker'
  ]

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-brand">Portafolio</div>
        <div className="nav-links">
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => setActiveSection('home')}
          >
            Inicio
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setActiveSection('about')}
          >
            Sobre Mí
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => setActiveSection('projects')}
          >
            Proyectos
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => setActiveSection('skills')}
          >
            Habilidades
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setActiveSection('contact')}
          >
            Contacto
          </a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hola, Soy Daniel Rojas</h1>
          <p className="hero-subtitle">Desarrollador Full Stack</p>
          <p className="hero-description">
            Creo soluciones web innovadoras y escalables con las últimas tecnologías.
            Apasionado por el código limpio y las experiencias de usuario excepcionales.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Ver Proyectos</button>
            <button className="secondary-btn">Contactar</button>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador full stack con experiencia en la creación de aplicaciones web modernas
              y responsivas. Mi enfoque se centra en escribir código limpio, mantenible y eficiente,
              mientras me mantengo actualizado con las últimas tendencias tecnológicas.
            </p>
            <p>
              Disfruto trabajando en equipo y resolviendo problemas complejos. Mi objetivo es crear
              productos que no solo funcionen bien, sino que también proporcionen una excelente
              experiencia de usuario.
            </p>
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
                  <span key={techIndex} className="tech-tag">{tech}</span>
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
            <div key={index} className="skill-item">{skill}</div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contacto</h2>
        <div className="contact-content">
          <p>
            ¿Interesado en trabajar juntos? ¡Me encantaría saber de ti!
          </p>
          <div className="contact-info">
            <p>Email: drojaslopez.ing@gmail.com</p>
            <p>LinkedIn: /in/danielrojas</p>
            <p>GitHub: /danielrojas</p>
          </div>
          <button className="primary-btn">Enviar Mensaje</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Daniel Rojas. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
