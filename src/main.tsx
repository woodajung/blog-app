import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from 'App'

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>

)
