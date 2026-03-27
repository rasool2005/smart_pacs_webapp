import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '../../config';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPasswords, setShowPasswords] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const requirements = [
    { met: formData.newPassword.length >= 8, text: 'At least 8 characters' },
    { met: /[A-Z]/.test(formData.newPassword), text: 'One uppercase letter' },
    { met: /[0-9]/.test(formData.newPassword), text: 'One number' },
    { met: formData.newPassword === formData.confirmPassword && formData.newPassword.length > 0, text: 'Passwords match' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Pre-validate
    const allReqsMet = requirements.every(req => req.met);
    if (!allReqsMet) {
      setError('Please ensure all password requirements are met.');
      return;
    }

    setIsLoading(true);

    try {
      const userStr = localStorage.getItem('user');
      const user = userStr ? JSON.parse(userStr) : null;
      const userId = user?.user_id || user?.id || 1;

      const response = await fetch(`${API_BASE_URL}/change-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          current_password: formData.currentPassword,
          new_password: formData.newPassword,
          confirm_password: formData.confirmPassword,
          old_password: formData.currentPassword // included both variations
        })
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        throw new Error('Invalid response from server.');
      }

      if (response.ok && data.status === 'success') {
        setSuccess(data.message || 'Password updated successfully!');
        setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });

        setTimeout(() => {
          navigate(-1);
        }, 1500);
      } else {
        const errorMsg = typeof data.errors === 'object'
          ? JSON.stringify(data.errors)
          : data.message || 'Failed to update password';
        setError(`Error: ${errorMsg}`);
      }
    } catch (err: any) {
      setError(err.message || 'Unable to connect to server.');
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 flex items-center gap-4 sticky top-0 z-10 shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Change Password</h1>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Messages */}
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl mb-6 flex items-start gap-2 border border-red-200">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="font-medium text-sm break-all">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-2 border border-green-200">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium text-sm">{success}</p>
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPasswords ? 'text' : 'password'}
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPasswords(!showPasswords)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPasswords ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPasswords ? 'text' : 'password'}
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPasswords ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-4 mb-6">
          <p className="text-sm font-medium text-gray-700 mb-3">Password must contain:</p>
          <div className="space-y-2">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${req.met ? 'text-green-500' : 'text-gray-300'}`} />
                <span className={`text-sm ${req.met ? 'text-green-700' : 'text-gray-600'}`}>
                  {req.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-semibold shadow-lg active:scale-98 transition-transform disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Updating...
            </>
          ) : (
            'Update Password'
          )}
        </button>
      </form>
    </div>
  );
}
