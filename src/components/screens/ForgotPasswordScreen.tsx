import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Brain, ArrowLeft, Mail, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '../../config';

export default function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/send-otp/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/otp-verification', { state: { email } });
      } else {
        setError(data.error || data.message || 'Failed to send OTP. Please try again.');
      }
    } catch (err) {
      console.error('Send OTP error:', err);
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

      {/* Right Panel - Forgot Password Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 md:top-8 md:left-8 p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all shadow-sm border border-gray-100 group"
          aria-label="Go back"
          disabled={loading}
        >
          <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
        </button>

        <div className="max-w-md w-full mx-auto">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 pt-6 md:pt-0">Forgot Password?</h1>
            <p className="text-gray-500">
              Enter your email address and we'll send you a code to reset your password
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl active:scale-98 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? 'Sending...' : 'Send Verification Code'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}