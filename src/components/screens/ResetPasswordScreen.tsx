import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Brain, Lock, Eye, EyeOff, CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';

export default function ResetPasswordScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const otp = location.state?.otp || '';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const passwordRequirements = [
    { met: password.length >= 8, text: 'At least 8 characters' },
    { met: /[A-Z]/.test(password), text: 'One uppercase letter' },
    { met: /[0-9]/.test(password), text: 'One number' },
    { met: password === confirmPassword && password.length > 0, text: 'Passwords match' },
  ];

  const allRequirementsMet = passwordRequirements.every(req => req.met);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allRequirementsMet) {
      setError('Please ensure all password requirements are met.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/reset-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, otp, new_password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.error || data.message || 'Failed to reset password. Please try again.');
      }
    } catch (err) {
      console.error('Reset password error:', err);
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

      {/* Right Panel - Reset Password Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative overflow-y-auto">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 md:top-8 md:left-8 p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all shadow-sm border border-gray-100 group"
          aria-label="Go back"
          disabled={loading}
        >
          <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
        </button>

        <div className="max-w-md w-full mx-auto my-8">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 pt-6 md:pt-0">Reset Password</h1>
            <p className="text-gray-500">Create a new secure password</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">New Password</label>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Confirm Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 my-8">
              <p className="text-sm font-bold text-blue-900 mb-4">Password Requirements:</p>
              <div className="space-y-2.5">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle
                      className={`w-5 h-5 ${req.met ? 'text-green-500' : 'text-gray-300'}`}
                      strokeWidth={2.5}
                    />
                    <span className={`text-sm font-medium ${req.met ? 'text-green-700' : 'text-gray-500'}`}>
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!allRequirementsMet || loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl active:scale-98 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
