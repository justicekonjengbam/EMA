import React from 'react'
import '../styles/pages.css'

function Videos() {
  const videos = [
    {
      id: 1,
      title: 'Introduction to EMA Lab',
      description: 'A comprehensive overview of our research facility and team.',
      filename: 'intro.mp4',
      duration: '5:32',
      date: '2026-01-10'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop - Part 1',
      description: 'Dr. Chen explains quantum computing fundamentals.',
      filename: 'quantum-workshop-1.mp4',
      duration: '45:20',
      date: '2025-12-15'
    },
    {
      id: 3,
      title: 'Autonomous Robot Demo',
      description: 'Live demonstration of our autonomous navigation system.',
      filename: 'robot-demo.mp4',
      duration: '12:45',
      date: '2025-11-28'
    },
    {
      id: 4,
      title: 'Lab Tour 2025',
      description: 'Virtual tour of our newly expanded facilities.',
      filename: 'lab-tour.mp4',
      duration: '8:15',
      date: '2025-11-10'
    },
    {
      id: 5,
      title: 'AI and Ethics Panel Discussion',
      description: 'Panel discussion on ethical implications of AI research.',
      filename: 'ethics-panel.mp4',
      duration: '62:30',
      date: '2025-10-22'
    }
  ]

  return (
    <div className="page videos-page">
      <h1>Videos</h1>
      <p className="page-intro">
        Watch presentations, tutorials, lab tours, and event recordings from EMA Lab.
      </p>

      <div className="videos-list">
        {videos.map(video => (
          <div key={video.id} className="video-item">
            <div className="video-thumbnail">
              <video controls className="video-player">
                <source src={`/videos/${video.filename}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <div className="video-meta">
                <span className="video-duration">⏱️ {video.duration}</span>
                <span className="video-date">📅 {video.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos
