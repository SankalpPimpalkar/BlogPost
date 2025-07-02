import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/index.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Provider>
)
