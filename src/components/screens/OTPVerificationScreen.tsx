import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Loader2 } from 'lucide-react';

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
    <div className="h-screen w-full bg-gradient-to-b from-blue-50 to-white px-6 py-8 flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className="self-start p-2 mb-8 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
        disabled={loading}
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Enter Verification Code</h1>
      <p className="text-gray-600 mb-8">
        We've sent a 6-digit code to {email || 'your email'}
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      <div className="mb-8">
        <div className="flex gap-3 justify-between max-w-sm mx-auto">
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
              className="w-14 h-14 text-center text-2xl font-bold bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
            />
          ))}
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-gray-600 text-sm">Didn't receive the code?</p>
        <button
          onClick={handleResend}
          disabled={loading || !email}
          className="text-blue-600 font-semibold text-sm mt-1 disabled:opacity-50 hover:underline"
        >
          Resend Code
        </button>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleVerify}
          disabled={otp.some(digit => !digit) || loading}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold shadow-lg active:scale-98 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-5 h-5 animate-spin" />}
          {loading ? 'Verifying...' : 'Verify Code'}
        </button>
      </div>
    </div>
  );
}
