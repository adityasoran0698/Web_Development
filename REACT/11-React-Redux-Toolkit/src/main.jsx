import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      {/* Wrapping the App component with the Provider component because as we Pass Store in Provider component so that store can access all the components in the entire application (App.jsx) */}
    <App />
    </Provider>
  </StrictMode>,
)
