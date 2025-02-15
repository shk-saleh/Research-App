import './App.css'
import { Navbar } from './Components/Navbar'
import { Routes, Route } from "react-router";
import Login from './Components/Login';
import Register from './Components/Register'
import Footer from './Components/Footer';
import { Home } from './Components/Home';

function App() {

  return (

      <div className='bg-slate-950 overflow-hidden'> 
        <Navbar/>
          <main className="max-w-7xl mx-auto sm:px-0 lg:px-8 pt-60 lg:pt-68 z-10">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        <Footer/>    
      </div>
      
  )
}

export default App
