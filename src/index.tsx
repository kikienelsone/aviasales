import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'

import App from './components/App'
import rootReducer from './reducers/rootReducer'
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
