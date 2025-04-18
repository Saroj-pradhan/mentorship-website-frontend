import { Fragment} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css'
import Routing from './utils/Routing'
import Nav from './components/Nav'

function App() {
  return (  
    
      
      <Fragment>
        <Nav></Nav>
        {/* <Test></Test> */}
        <Routing/>
        <ToastContainer />
      </Fragment>
  )
}
///////component


export default App
