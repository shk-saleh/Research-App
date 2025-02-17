import {React, useState, useEffect} from 'react'
import {NavLink} from 'react-router'
import { motion } from "motion/react"
import { User} from 'lucide-react';



export const Navbar = () => {


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUserName('User'); 
    }
  }, []);

  const handleLogout = () => {

    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  
  };


  return (
    
    <motion.header 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity:1 }} 
      transition={{duration: 0.5, delay: 0.3}} 
      className="top-6 fixed left-0 right-0 lg:mx-34 mx-4 z-50 bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-xl"
    >
      <div className="max-w-8xl mx-auto px-2 py-2 sm:px-6 lg:px-2 flex justify-between items-center">
        <h1 className="lg:text-2xl text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          <NavLink to="/">ResearchAI</NavLink>
        </h1>
        
        <div className="space-x-4">
          {!isAuthenticated ? (
            <>
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <NavLink to="/login">Login</NavLink>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white rounded-lg transition-all cursor-pointer">
                <NavLink to="/register">Sign Up</NavLink>
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  )
}
