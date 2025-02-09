import React from 'react'
import {NavLink} from 'react-router'


export const Navbar = () => {
  return (
    <header className="border-b border-gray-800">
        <div className="max-w-8xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            <NavLink to="/home">ResearchAI</NavLink>
        </h1>
        <div className="space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors cursor-pointer"><NavLink to="/login">Login</NavLink></button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white rounded-lg transition-all cursor-pointer"><NavLink to="/register">Sign Up</NavLink></button>
        </div>
        </div>
    </header>
  )
}
