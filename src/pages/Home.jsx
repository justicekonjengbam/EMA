import React from 'react'
import SoundLink from '../components/SoundLink'
import { news } from '../data/news'
import '../styles/pages.css'

function Home() {
  const latestNews = news.slice(0, 3)

  return (
    <div className="page home-page">
      <section className="hero">
        <img src="/lablogo.png" alt="EMA Lab Logo" className="hero-logo" />
        <h1 className="hero-title">Emerging Multimedia and AI Lab</h1>
        <p className="hero-subtitle">Pioneering the Future of Technology</p>
        <p className="hero-tagline">
          Advancing Natural Language Processing, Generative AI, and Extended Reality. 
          We are a team of researchers, students, and innovators pushing the boundaries 
          of language technology and immersive computing at IIT Dharwad.
        </p>
      </section>

      <section className="quick-links">
        <h2>Explore Our Work</h2>
        <div className="links-grid">
          <SoundLink to="/projects" className="link-card">
            <h3>Research Projects</h3>
            <p>Machine translation, sentiment analysis, and AI applications</p>
          </SoundLink>
          <SoundLink to="/members" className="link-card">
            <h3>Our Team</h3>
            <p>Meet our talented PhD scholars and researchers</p>
          </SoundLink>
          <SoundLink to="/tasks" className="link-card">
            <h3>Get Involved</h3>
            <p>Join us and contribute to cutting-edge NLP research</p>
          </SoundLink>
        </div>
      </section>

      <section className="latest-updates">
        <h2>Latest Updates</h2>
        <div className="updates-list">
          {latestNews.map(item => (
            <div key={item.id} className="update-item">
              <span className="update-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.content.substring(0, 150)}...</p>
            </div>
          ))}
        </div>
        <SoundLink to="/news" className="view-all-link">
          View All News →
        </SoundLink>
      </section>
    </div>
  )
}

export default Home
