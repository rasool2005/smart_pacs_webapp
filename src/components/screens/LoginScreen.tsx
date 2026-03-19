import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Brain, Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react';

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Using generic localhost Django URL. 
      // You should change this to match your actual API base URL.
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });

      let data;
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Non-JSON response from server:", text);
        throw new Error(
          `Server returned an HTML error instead of JSON (Status ${response.status}). ` +
          `Please check that the backend is running and '/api/login/' is the correct endpoint in urls.py.`
        );
      }

      if (response.ok && data.status === 'success') {
        // Clear all previous data to ensure a fresh start for the new doctor
        localStorage.clear();
        // Saving the returned user to localStorage so it can be used across the app
        localStorage.setItem('user', JSON.stringify(data.user));

        onLogin();
        // Force a full page reload to clear any in-memory state and give a "fresh page" everywhere
        window.location.href = '/#/home';
      } else {
        // Backend returns {"status": "error", "message": serializer.errors} when validation fails
        if (typeof data.message === 'object') {
          // Extract the first error message from the dictionary
          const firstKey = Object.keys(data.message)[0];
          const errorMessage = Array.isArray(data.message[firstKey])
            ? data.message[firstKey][0]
            : data.message[firstKey];
          setError(errorMessage || 'Login failed. Please check your credentials.');
        } else {
          setError(data.message || 'Login failed. Please try again.');
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Cannot connect to the server. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Left Panel - Information (Hidden on mobile, shown on md+) */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 p-12 flex-col items-center justify-center text-center text-white">
        <div className="mb-10 bg-white/20 p-8 rounded-[2rem] backdrop-blur-sm shadow-2xl">
          <Brain className="w-24 h-24 text-white" strokeWidth={1.5} />
        </div>
        <h2 className="text-4xl font-bold mb-6 leading-tight max-w-md">
          Smart PACS Viewer wIth AI Annotations
        </h2>
        <p className="text-blue-100 text-lg max-w-sm leading-relaxed">
          The next generation of medical imaging powered by artificial intelligence.
        </p>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 md:top-8 md:left-8 p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all shadow-sm border border-gray-100 group"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
        </button>

        <div className="max-w-md w-full mx-auto">
          <div className="flex items-center justify-center mb-8 md:hidden">
            <div className="bg-blue-600 rounded-2xl p-4 shadow-lg">
              <Brain className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <div className="text-center md:text-left mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 pt-6 md:pt-0">Welcome Back, Doctor</h1>
            <p className="text-gray-500">Sign in to manage your patients and cases</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="doctor@hospital.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl active:scale-98 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-gray-400">OR</span>
              </div>
            </div>

            <div className="text-center">
              <span className="text-gray-500 text-sm">Don't have a doctor account? </span>
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}