import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'  // <-- Must include this
import './styles/animations.css' // If you have animations
import './index.css' // If exists

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)