import React, { useState } from 'react'
import SoundLink from '../components/SoundLink'
import { projects } from '../data/projects'
import { members } from '../data/members'
import '../styles/pages.css'

function Projects() {
  const [selectedTag, setSelectedTag] = useState('All')

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedTag))

  const getMemberNames = (memberIds) => {
    return memberIds.map(id => {
      const member = members.find(m => m.id === id)
      return member ? member.name : 'Unknown'
    }).join(', ')
  }

  return (
    <div className="page projects-page">
      <h1>Research Projects</h1>
      <p className="page-intro">
        Explore our ongoing and completed research projects spanning natural language processing, AI, extended reality, and more.
      </p>

      <div className="filter-bar">
        <label>Filter by tag:</label>
        <div className="tag-filters">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <SoundLink 
            key={project.id} 
            to={`/projects/${project.id}`} 
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-footer">
              <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
              <p className="project-members">Team: {getMemberNames(project.members)}</p>
            </div>
            {project.demo && (
              <span className="demo-badge">🎮 Interactive Demo</span>
            )}
          </SoundLink>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="no-results">No projects found with the selected tag.</p>
      )}
    </div>
  )
}

export default Projects
