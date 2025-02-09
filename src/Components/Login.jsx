import React, { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);
      
      const response = await fetch('http://localhost:8000/api/auth/token', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to login');
      }
      
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-90 flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        
        {error && (
          <span className='text-red-600'>{error}</span>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-lg 
                       text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
              placeholder="Enter your password"
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
              'Sign In'
            )}
          </button>

          <div className="text-center mt-4">
            <button 
              type="button"
              onClick={() => window.location.href = '/register'}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;