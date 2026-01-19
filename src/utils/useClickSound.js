import { useRef, useEffect } from 'react'

export const useClickSound = () => {
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio('/audio/ButtonAudio.mp3')
    audioRef.current.volume = 0.5
  }, [])

  const playClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(err => {
        console.log('Audio play failed:', err)
      })
    }
  }

  return playClick
}
