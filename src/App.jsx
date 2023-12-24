import './App.css'
import Navbar from "./components/Navbar.jsx";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Libary from "./pages/Libary.jsx";

function App() {
    return (
      <main className='bg-slate-300/20'>
          <Router>

              {/* Laad navbar component */}
              <Navbar />

              {/* Laad alle routes */}
              <Routes>
                  {/* De standaard route */}
                  <Route path='/' element={<Home />} />
                  {/* Route naar about */}
                  <Route path='/about' element={<About />} />
                  {/* Route naar libary */}
                  <Route path='/libary' element={<Libary />} />
              </Routes>

          </Router>
      </main>
  )
}

export default App
