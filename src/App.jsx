import React, { useCallback, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Members from './pages/Members'
import MemberProfile from './pages/MemberProfile'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import News from './pages/News'
import Tasks from './pages/Tasks'
import Professor from './pages/Professor'
import Gallery from './pages/Gallery'
import Videos from './pages/Videos'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#00d9ff'
      },
      links: {
        color: '#00d9ff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.3
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  }

  return (
    <div className="app-container">
      <ScrollToTop />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="particles-background"
      />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:id" element={<MemberProfile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
