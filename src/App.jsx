import Navbar from './components/Navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './views/Home';
import ContactUs from './views/ContactUs';
function App() {


  return (
    <>

      <Router>
        <nav>
        <Navbar />
        </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacto" element={<ContactUs />} />
      </Routes>
      </Router>
    
    </>
  )
}

export default App
