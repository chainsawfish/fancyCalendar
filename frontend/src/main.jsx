import React from 'react'
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client'
import eventStore from "./store/eventStore.js";

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={eventStore}>
    <App />
      </Provider>
  </React.StrictMode>,
)
