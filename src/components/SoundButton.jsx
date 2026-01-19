import React from 'react'
import { useClickSound } from '../utils/useClickSound'

function SoundButton({ children, onClick, className, type = 'button' }) {
  const playClick = useClickSound()

  const handleClick = (e) => {
    playClick()
    if (onClick) onClick(e)
  }

  return (
    <button type={type} className={className} onClick={handleClick}>
      {children}
    </button>
  )
}

export default SoundButton
