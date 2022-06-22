import React from 'react'
import { Counter } from './components/counter/Counter'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>
          SWOO is a company from Oldenburg and helps people and companies to
          bring their own apps to the market.
        </h3>
        <Counter />
      </header>
    </div>
  )
}

export default App
