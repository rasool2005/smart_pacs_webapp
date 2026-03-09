import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Shield, Smartphone, Lock } from 'lucide-react';

export default function SecuritySettings() {
  const navigate = useNavigate();
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 flex items-center gap-4 sticky top-0 z-10 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-xl">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Security & Sign In</h1>
      </div>

      <div className="p-6 space-y-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">Add extra security layer</p>
            </div>
          </div>
          <label className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <span className="absolute inset-0 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors cursor-pointer"></span>
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6 cursor-pointer"></span>
          </label>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Biometric Login</p>
              <p className="text-sm text-gray-600">Use fingerprint/face ID</p>
            </div>
          </div>
          <label className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              checked={biometricEnabled}
              onChange={(e) => setBiometricEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <span className="absolute inset-0 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors cursor-pointer"></span>
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6 cursor-pointer"></span>
          </label>
        </div>

        <button onClick={() => navigate('/profile/change-password')} className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 hover:bg-gray-50 active:bg-gray-100 transition-colors">
          <Lock className="w-5 h-5 text-gray-400" />
          <div className="flex-1 text-left">
            <p className="font-medium text-gray-900">Change Password</p>
            <p className="text-sm text-gray-600">Update your password</p>
          </div>
          <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
        </button>
      </div>
    </div>
  );
}
