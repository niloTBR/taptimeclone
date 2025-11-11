import { useState, useEffect } from 'react'
import HomePage from './HomePage'
import Header from './components/layout/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  )
}

export default App