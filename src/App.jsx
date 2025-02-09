import './App.css'
import { Navbar } from './Components/Navbar'
import { Main } from './Components/Main'
import { Routes, Route } from "react-router";
import Login from './Components/Login';
import Register from './Components/Register'
import Footer from './Components/Footer';

function App() {

  return (


    <div className="relative h-full w-full bg-slate-950">
        <Navbar />
        <Login/>
        {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Main />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main> */}
        <Footer/>
    </div>
      
  )
}

export default App
