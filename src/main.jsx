
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './context/Context.jsx'
import { BrowserRouter} from 'react-router-dom'
import AContext from './context/AContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<AContext>
  <Context>
 
    <App />
  
  </Context>
  </AContext>
  </BrowserRouter>,
)
