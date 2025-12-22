import React from 'react'
import Hero from './components/Hero'
import ProfessionalSummary from './components/ProfessionalSummary'
import WorkExperience from './components/WorkExperience'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <ProfessionalSummary />
      <WorkExperience />
    </div>
  )
}

export default App

