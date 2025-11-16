import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Home from './pages/Home.jsx'
import store from './redux/store.js'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </StrictMode>,
)

