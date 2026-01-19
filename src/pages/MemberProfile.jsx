import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SoundButton from '../components/SoundButton'
import SoundLink from '../components/SoundLink'
import { members } from '../data/members'
import { projects } from '../data/projects'
import '../styles/pages.css'

function MemberProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const member = members.find(m => m.id === id)

  if (!member) {
    return (
      <div className="page">
        <h1>Member Not Found</h1>
        <SoundButton onClick={() => navigate('/members')}>
          Back to Members
        </SoundButton>
      </div>
    )
  }

  const memberProjects = projects.filter(p => p.members.includes(member.id))

  return (
    <div className="page member-profile-page">
      <SoundButton onClick={() => navigate('/members')} className="back-button">
        ← Back to Members
      </SoundButton>

      <div className="profile-header">
        <img src={member.avatar} alt={member.name} className="profile-avatar" />
        <div className="profile-info">
          <h1>{member.name}</h1>
          <p className="profile-role">{member.role}</p>
        </div>
      </div>

      <section className="profile-section">
        <h2>Biography</h2>
        <p>{member.bio}</p>
      </section>

      <section className="profile-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {member.skills.map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href={`mailto:${member.links.email}`} className="contact-link">📧 Email</a>
          <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            💻 GitHub
          </a>
          <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            💼 LinkedIn
          </a>
        </div>
      </section>

      <section className="profile-section">
        <h2>Projects</h2>
        {memberProjects.length > 0 ? (
          <div className="projects-list">
            {memberProjects.map(project => (
              <div key={project.id} className="project-item">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p>No projects assigned yet.</p>
        )}
      </section>
    </div>
  )
}

export default MemberProfile
