import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from '../redux/store.js'

import { Provider } from 'react-redux'
//provider is from redux- toolkit
// import * as serviceWorker from './serviceWorker';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <App />
   
    
  </StrictMode>,
)
// serviceWorker.register();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls