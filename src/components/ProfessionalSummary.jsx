import React, { useState, useEffect } from 'react'
import './ProfessionalSummary.css'

function ProfessionalSummary() {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "I'm a Software Engineer."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="professional-summary">
      <div className="summary-content">
        <h1 className="summary-heading">
          {displayedText}
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
        </h1>
        
        
        
        <p className="about-text">
        A self-taught UI/UX designer and mobile app developer using Flutter, I design purposeful and enjoyable digital products that balance user needs and business objectives.
        </p>
      </div>
    </section>
  )
}

export default ProfessionalSummary

