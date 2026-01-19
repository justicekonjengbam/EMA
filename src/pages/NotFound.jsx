import React from 'react'
import SoundLink from '../components/SoundLink'
import '../styles/pages.css'

function NotFound() {
  return (
    <div className="page not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <SoundLink to="/" className="home-link">
          ← Return to Home
        </SoundLink>
      </div>
    </div>
  )
}

export default NotFound
