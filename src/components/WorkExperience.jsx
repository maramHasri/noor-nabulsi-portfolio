import React from 'react'
import './WorkExperience.css'

const projects = [
  {
    id: 1,
    icon: 'star',
    title: 'Mobile development',
    description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    color: 'purple',
    link: 'https://github.com/noorAlnablsi'
  },
  {
    id: 2,
    icon: 'lightbulb',
    title: 'CIB on the Mobile',
    description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    color: 'yellow',
    link: 'https://www.figma.com/design/eoZvbpcqZogoxLV0Rs8gJS/Portfolio-template---Edit-this-portfolio-and-export-it-as-HTML---Get-your-portfolio-live-in-no-time--Community-?t=zJc3EF2DyxUqVuqJ-0'
  },
  
]

const IconComponent = ({ icon, color }) => {
  const iconStyles = {
    star: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 5L36.18 22.5L54.27 22.5L39.54 33.75L45.72 51.25L30 40L14.28 51.25L20.46 33.75L5.73 22.5L23.82 22.5L30 5Z" 
              fill={color === 'yellow' ? '#fbbf24' : '#a855f7'} 
              filter="drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))"/>
        <path d="M30 15L33.5 26L45 26L36 32L39.5 43L30 37L20.5 43L24 32L15 26L26.5 26L30 15Z" 
              fill={color === 'yellow' ? '#fcd34d' : '#c084fc'} 
              opacity="0.8"/>
      </svg>
    ),
    lightbulb: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 5C20.06 5 12 13.06 12 23C12 28.5 14.5 33.2 18.5 36.5V45C18.5 47.49 20.51 49.5 23 49.5H37C39.49 49.5 41.5 47.49 41.5 45V36.5C45.5 33.2 48 28.5 48 23C48 13.06 39.94 5 30 5Z" 
              fill="#fbbf24" 
              filter="drop-shadow(0 0 10px rgba(251, 191, 36, 0.6))"/>
        <path d="M30 10C22.83 10 17 15.83 17 23C17 27.5 19 31.5 22.5 34V42C22.5 43.38 23.62 44.5 25 44.5H35C36.38 44.5 37.5 43.38 37.5 42V34C41 31.5 43 27.5 43 23C43 15.83 37.17 10 30 10Z" 
              fill="#fcd34d" 
              opacity="0.9"/>
        <rect x="28" y="50" width="4" height="5" fill="#fbbf24"/>
      </svg>
    ),
    teacup: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 20H45C47.76 20 50 22.24 50 25V35C50 37.76 47.76 40 45 40H15C12.24 40 10 37.76 10 35V25C10 22.24 12.24 20 15 20Z" 
              fill="#a855f7" 
              filter="drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))"/>
        <path d="M15 25H45V35H15V25Z" fill="#c084fc" opacity="0.7"/>
        <path d="M50 30H55C56.1 30 57 30.9 57 32V33C57 34.1 56.1 35 55 35H50V30Z" fill="#a855f7"/>
        <ellipse cx="30" cy="20" rx="8" ry="3" fill="#7c3aed" opacity="0.5"/>
      </svg>
    ),
    flask: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 5H35V15H40C42.76 15 45 17.24 45 20V45C45 47.76 42.76 50 40 50H20C17.24 50 15 47.76 15 45V20C15 17.24 17.24 15 20 15H25V5Z" 
              fill="#a855f7" 
              filter="drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))"/>
        <path d="M20 20H40V45H20V20Z" fill="#c084fc" opacity="0.6"/>
        <ellipse cx="30" cy="32" rx="8" ry="10" fill="#7c3aed" opacity="0.4"/>
        <rect x="28" y="5" width="4" height="10" fill="#7c3aed"/>
      </svg>
    )
  }

  return iconStyles[icon] || null
}

function WorkExperience() {
  return (
    <section className="work-experience">
      <h2 className="section-heading">Work Experience</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">
              <IconComponent icon={project.icon} color={project.color} />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="learn-more-btn"
              >
                LEARN MORE
              </a>
            ) : (
              <button className="learn-more-btn">LEARN MORE</button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience

