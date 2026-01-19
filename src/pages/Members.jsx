import React, { useState } from 'react'
import SoundLink from '../components/SoundLink'
import { members } from '../data/members'
import '../styles/pages.css'

function Members() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="page members-page">
      <h1>Our Team</h1>
      <p className="page-intro">
        Meet the talented researchers, students, and collaborators who make EMA Lab a hub of innovation.
      </p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, role, or skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="members-grid">
        {filteredMembers.map(member => (
          <SoundLink key={member.id} to={`/members/${member.id}`} className="member-card">
            <img src={member.avatar} alt={member.name} className="member-avatar" />
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <div className="member-skills">
              {member.skills.slice(0, 3).map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </SoundLink>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <p className="no-results">No members found matching your search.</p>
      )}
    </div>
  )
}

export default Members
