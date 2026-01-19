import React from 'react'
import { Link } from 'react-router-dom'
import { useClickSound } from '../utils/useClickSound'

function SoundLink({ to, children, className, onClick }) {
  const playClick = useClickSound()

  const handleClick = (e) => {
    playClick()
    if (onClick) onClick(e)
  }

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default SoundLink
