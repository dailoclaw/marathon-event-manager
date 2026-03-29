import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'

// Import CoreUI styles
import '@coreui/coreui/dist/css/coreui.min.css'
// Import custom SASS styles
import './scss/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
