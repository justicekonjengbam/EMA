import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SoundButton from '../components/SoundButton'
import SoundLink from '../components/SoundLink'
import { projects } from '../data/projects'
import { members } from '../data/members'
import '../styles/pages.css'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="page">
        <h1>Project Not Found</h1>
        <SoundButton onClick={() => navigate('/projects')}>
          Back to Projects
        </SoundButton>
      </div>
    )
  }

  const projectMembers = members.filter(m => project.members.includes(m.id))

  return (
    <div className="page project-detail-page">
      <SoundButton onClick={() => navigate('/projects')} className="back-button">
        ← Back to Projects
      </SoundButton>

      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
          {project.status}
        </span>
      </div>

      <section className="project-detail-section">
        <h2>Overview</h2>
        <p>{project.summary}</p>
        <p>{project.description}</p>
      </section>

      <section className="project-detail-section">
        <h2>Research Areas</h2>
        <div className="project-tags-detail">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag-detail">{tag}</span>
          ))}
        </div>
      </section>

      <section className="project-detail-section">
        <h2>Team Members</h2>
        <div className="team-members-grid">
          {projectMembers.map(member => (
            <SoundLink key={member.id} to={`/members/${member.id}`} className="team-member-card">
              <img src={member.avatar} alt={member.name} className="team-member-avatar" />
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </SoundLink>
          ))}
        </div>
      </section>

      {project.demo && (
        <section className="project-detail-section">
          <h2>Interactive Demo</h2>
          <div className="demo-container">
            {project.demo.type === 'translation' && <TranslationDemo />}
            {project.demo.type === 'sentiment' && <SentimentDemo />}
            {project.demo.type === 'chatbot' && <ChatbotDemo />}
          </div>
        </section>
      )}

      <section className="project-detail-section">
        <h2>Publications & Resources</h2>
        <ul className="resources-list">
          {project.publications && project.publications.map((pub, idx) => (
            <li key={idx}>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
              <span className="publication-venue">{pub.venue}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

// Translation Demo Component
function TranslationDemo() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('hi')

  const handleTranslate = () => {
    // Simulated translation
    setOutputText(`[Translated to ${targetLang}]: ${inputText}`)
  }

  return (
    <div className="demo-box">
      <div className="demo-controls">
        <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)} className="demo-select">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mni">Manipuri</option>
        </select>
        <span>→</span>
        <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)} className="demo-select">
          <option value="hi">Hindi</option>
          <option value="en">English</option>
          <option value="mni">Manipuri</option>
        </select>
      </div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate..."
        className="demo-textarea"
        rows="4"
      />
      <SoundButton onClick={handleTranslate} className="demo-button">
        Translate
      </SoundButton>
      {outputText && (
        <div className="demo-output">
          <h4>Translation:</h4>
          <p>{outputText}</p>
        </div>
      )}
    </div>
  )
}

// Sentiment Analysis Demo
function SentimentDemo() {
  const [inputText, setInputText] = useState('')
  const [sentiment, setSentiment] = useState(null)

  const analyzeSentiment = () => {
    // Simulated sentiment analysis
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'love']
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'poor', 'worst']
    
    const text = inputText.toLowerCase()
    const hasPositive = positiveWords.some(word => text.includes(word))
    const hasNegative = negativeWords.some(word => text.includes(word))
    
    if (hasPositive && !hasNegative) {
      setSentiment({ label: 'Positive', score: 0.85, color: '#00ff88' })
    } else if (hasNegative && !hasPositive) {
      setSentiment({ label: 'Negative', score: 0.78, color: '#ff5050' })
    } else {
      setSentiment({ label: 'Neutral', score: 0.60, color: '#ffbb00' })
    }
  }

  return (
    <div className="demo-box">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to analyze sentiment..."
        className="demo-textarea"
        rows="4"
      />
      <SoundButton onClick={analyzeSentiment} className="demo-button">
        Analyze Sentiment
      </SoundButton>
      {sentiment && (
        <div className="demo-output">
          <h4>Sentiment Analysis:</h4>
          <div className="sentiment-result" style={{ borderColor: sentiment.color }}>
            <span className="sentiment-label" style={{ color: sentiment.color }}>
              {sentiment.label}
            </span>
            <div className="sentiment-bar">
              <div 
                className="sentiment-fill" 
                style={{ width: `${sentiment.score * 100}%`, backgroundColor: sentiment.color }}
              />
            </div>
            <span className="sentiment-score">Confidence: {(sentiment.score * 100).toFixed(1)}%</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Chatbot Demo
function ChatbotDemo() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I\'m an AI assistant. How can I help you today?' }
  ])
  const [inputText, setInputText] = useState('')

  const sendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = { role: 'user', text: inputText }
    setMessages(prev => [...prev, userMessage])

    // Simulated bot response
    setTimeout(() => {
      const responses = [
        'That\'s an interesting question! Our research focuses on NLP and AI.',
        'I understand. Let me help you with that information.',
        'Great question! This is related to our work on conversational AI.',
        'Thank you for asking. Our team is actively researching this area.'
      ]
      const botMessage = { 
        role: 'bot', 
        text: responses[Math.floor(Math.random() * responses.length)] 
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)

    setInputText('')
  }

  return (
    <div className="demo-box chatbot-demo">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="chat-input"
        />
        <SoundButton onClick={sendMessage} className="chat-send-button">
          Send
        </SoundButton>
      </div>
    </div>
  )
}

export default ProjectDetail
