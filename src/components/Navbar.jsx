import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SoundLink from './SoundLink'
import SoundButton from './SoundButton'
import HamburgerMenu from './HamburgerMenu'
import '../styles/Navbar.css'

function Navbar() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/members', label: 'Members' },
    { path: '/projects', label: 'Projects' },
    { path: '/news', label: 'News' },
    { path: '/tasks', label: 'Tasks' },
    { path: '/professor', label: 'Professor' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/videos', label: 'Videos' }
  ]

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <SoundLink to="/" className="navbar-logo">
            EMA Lab
          </SoundLink>
          
          <div className="desktop-nav">
            {menuItems.map((item) => (
              <SoundLink 
                key={item.path} 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </SoundLink>
            ))}
            
            <SoundButton className="theme-toggle-desktop" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </SoundButton>
          </div>

          <SoundButton className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
          </SoundButton>
        </div>
      </nav>
      <HamburgerMenu 
        isOpen={menuOpen} 
        closeMenu={closeMenu}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  )
}

export default Navbar
