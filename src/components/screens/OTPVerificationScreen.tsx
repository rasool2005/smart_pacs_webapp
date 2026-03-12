import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Brain, ArrowLeft, Loader2 } from 'lucide-react';

export default function OTPVerificationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join('');
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/verify-otp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, otp: otpString }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/reset-password', { state: { email, otp: otpString } });
      } else {
        setError(data.error || data.message || 'Invalid OTP. Please try again.');
      }
    } catch (err) {
      console.error('Verify OTP error:', err);
      setError('Cannot connect to the server. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) return;
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/send-otp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || data.message || 'Failed to resend OTP.');
      } else {
        // Optional: show a success toast or message here
      }
    } catch (err) {
      console.error('Resend OTP error:', err);
      setError('Cannot connect to the server.');
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

      {/* Right Panel - OTP Form */}
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
            <h1 className="text-3xl font-bold text-gray-900 mb-3 pt-6 md:pt-0">Verify Code</h1>
            <p className="text-gray-500">
              We've sent a 6-digit code to {email || 'your email'}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <div className="mb-10">
            <div className="flex gap-2 sm:gap-3 justify-between max-w-sm mx-auto md:mx-0">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  disabled={loading}
                  className="w-12 h-12 sm:w-14 sm:h-14 text-center text-2xl font-bold bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  required
                />
              ))}
            </div>
          </div>

          <div className="text-center md:text-left mb-10">
            <p className="text-gray-500 text-sm">Didn't receive the code?</p>
            <button
              onClick={handleResend}
              disabled={loading || !email}
              className="text-blue-600 font-bold text-sm mt-1 hover:text-blue-700 transition-colors disabled:opacity-50"
            >
              Resend Code
            </button>
          </div>

          <button
            onClick={handleVerify}
            disabled={otp.some(digit => !digit) || loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl active:scale-98 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            {loading ? 'Verifying...' : 'Verify Code'}
          </button>
        </div>
      </div>
    </div>
  );
}
