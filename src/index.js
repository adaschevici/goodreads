import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import configureStore from './store'

import './index.css'
import App from './components/app'

ReactDOM.render(
  <Routes store={configureStore()}>
    <App />
  </Routes>,
  document.getElementById('root')
)
