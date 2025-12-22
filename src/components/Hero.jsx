import React from 'react'
import coderImage from '../Coder.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar-container">
          <div className="avatar-glow"></div>
          <div className="avatar-wrapper">
            <div className="avatar-placeholder">
              <img src={coderImage} alt="Ibrahim Memon" className="avatar-image" />
            </div>
          </div>
        </div>
        
        <div className="hero-text-container">
          <div className="speech-bubble">
            <span className="speech-text">
              Hello! I Am <span className="highlight-name">Noor nabulsi</span>
            </span>
          </div>
          
          <div className="tagline">
            <div className="tagline-line">A Designer who</div>
            <div className="tagline-line">Judges a book</div>
            <div className="tagline-line">
              by its <span className="highlight-cover">cover</span>...
            </div>
          </div>
          
          <div className="tagline-subtext">
            Because if the cover does not impress you what else can?
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

