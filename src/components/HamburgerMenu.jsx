import React from 'react'
import SoundLink from './SoundLink'
import SoundButton from './SoundButton'
import '../styles/HamburgerMenu.css'

function HamburgerMenu({ isOpen, closeMenu, theme, toggleTheme }) {
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

  const handleThemeToggle = () => {
    toggleTheme()
    closeMenu()
  }

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-content">
        {menuItems.map((item) => (
          <SoundLink 
            key={item.path} 
            to={item.path} 
            className="menu-item"
            onClick={closeMenu}
          >
            {item.label}
          </SoundLink>
        ))}
        
        <div className="menu-divider"></div>
        
        <SoundButton className="theme-toggle-menu" onClick={handleThemeToggle}>
          {theme === 'dark' ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
        </SoundButton>
      </div>
    </div>
  )
}

export default HamburgerMenu
