import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { AuthProvider } from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <AuthProvider >
        <HashRouter>
          <App />
        </HashRouter>
      </AuthProvider >
    </Provider>
  </React.StrictMode>,
)
