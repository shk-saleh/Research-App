import React from 'react';
import { useNavigate } from 'react-router';

const AuthPopUp = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800/90 border border-gray-700 rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Sorry! You have to register first
        </h3>
        <p className="text-gray-300 text-center mb-6">
          Please create an account to analyze research papers
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/register')}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-violet-500 
                     hover:from-blue-600 hover:to-violet-600 text-white rounded-lg 
                     transition-all"
          >
            Sign Up
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 px-4 border border-gray-600 text-gray-300 
                     hover:bg-gray-700 rounded-lg transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPopUp;