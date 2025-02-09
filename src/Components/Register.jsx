import React, { useState } from 'react';

const Register = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    full_name: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Registration failed');
      }

      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <div className="min-h-80 flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-6 bg-gray-800/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Create Account
        </h2>
        
        {error && (
          <span className='text-red-600'>{error}</span>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-lg 
                       text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-lg 
                       text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-lg 
                       text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-lg 
                       text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-violet-500 
                     hover:from-blue-600 hover:to-violet-600 text-white rounded-lg 
                     transition-all flex items-center justify-center"
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              'Create Account'
            )}
          </button>

          <div className="text-center mt-4">
            <button 
              type="button"
              onClick={() => window.location.href = '/login'}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Already have an account? Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;