import React from 'react'
import '../styles/pages.css'

function Gallery() {
  const images = [
    { id: 1, src: '/images/placeholder-gallery.jpg', caption: 'Quantum Computing Lab' },
    { id: 2, src: '/images/placeholder-gallery.jpg', caption: 'Team Meeting 2025' },
    { id: 3, src: '/images/placeholder-gallery.jpg', caption: 'Robotics Workshop' },
    { id: 4, src: '/images/placeholder-gallery.jpg', caption: 'Conference Presentation' },
    { id: 5, src: '/images/placeholder-gallery.jpg', caption: 'Lab Equipment' },
    { id: 6, src: '/images/placeholder-gallery.jpg', caption: 'Student Collaboration' },
    { id: 7, src: '/images/placeholder-gallery.jpg', caption: 'Research Poster Session' },
    { id: 8, src: '/images/placeholder-gallery.jpg', caption: 'Lab Inauguration' },
    { id: 9, src: '/images/placeholder-gallery.jpg', caption: 'Guest Lecture' }
  ]

  return (
    <div className="page gallery-page">
      <h1>Gallery</h1>
      <p className="page-intro">
        Visual highlights from our lab activities, events, research facilities, and team moments.
      </p>

      <div className="gallery-grid">
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.caption} />
            <p className="gallery-caption">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
