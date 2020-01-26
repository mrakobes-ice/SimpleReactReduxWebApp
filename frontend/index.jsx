import './main.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App.jsx'

import { Provider } from "react-redux"
import { store } from './store/store.js'

const mount = document.querySelectorAll('#mountPoint')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mount[0]
)