import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Brain, Mail, Lock, User, Building2, Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '../../config';

export default function SignUpScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospitalId: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      // Map frontend fields (like hospitalId) to the exact names Django expects (hospital_id)
      const payload = {
        name: formData.name,
        email: formData.email,
        hospital_id: formData.hospitalId,
        password: formData.password,
        confirm_password: formData.confirmPassword // <-- Django requires this field explicitly
      };

      // Assuming localhost Django server based on previous messages
      // Update the URL below if your API URL is different (e.g., /api/register/)
      const response = await fetch(`${API_BASE_URL}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      let data;
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Non-JSON response from server:", text);
        throw new Error(
          `Server returned an HTML error instead of JSON (Status ${response.status}). ` +
          `Please check that the backend is running and '/register/' is the correct endpoint in urls.py.`
        );
      }

      if (response.ok && data.status === 'success') {
        navigate('/login');
      } else {
        // Backend returns {"status": "error", "message": serializer.errors} when validation fails
        if (typeof data.message === 'object') {
          // Extract the first error message from the dictionary sent by the Django serializer
          const firstKey = Object.keys(data.message)[0];
          const errorMessage = Array.isArray(data.message[firstKey])
            ? data.message[firstKey][0]
            : data.message[firstKey];

          setError(
            firstKey !== "non_field_errors"
              ? `${firstKey}: ${errorMessage}`
              : errorMessage || 'Registration failed.'
          );
        } else {
          setError(data.message || 'Registration failed. Please try again.');
        }
      }
    } catch (err: any) {
      console.error('Sign up error:', err);
      setError(err.message || 'Cannot connect to the server. Please check your internet connection.');
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

      {/* Right Panel - Sign Up Form */}
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
            <h1 className="text-3xl font-bold text-gray-900 mb-3 pt-6 md:pt-0">Create Account</h1>
            <p className="text-gray-500">Join Smart PACS AI platform</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. John Doe"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="doctor@hospital.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Hospital ID</label>
              <div className="relative group">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  value={formData.hospitalId}
                  onChange={(e) => setFormData({ ...formData, hospitalId: e.target.value })}
                  placeholder="H12345"
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
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl active:scale-98 transition-all mt-6 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="text-center pt-8">
              <span className="text-gray-500 text-sm">Already have an account? </span>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}