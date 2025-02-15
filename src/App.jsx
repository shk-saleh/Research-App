import './App.css'
import { Navbar } from './Components/Navbar'
import { Routes, Route } from "react-router";
import Login from './Components/Login';
import Register from './Components/Register'
import Footer from './Components/Footer';
import { Home } from './Components/Home';

function App() {

  return (


      <div className='bg-slate-950 sm:overflow-hidden'> 
        {/* <div class="size-140 absolute -top-50 -left-50 z-[0] rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-gray-900 to-90% blur-3xl opacity-40"></div> */}
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
