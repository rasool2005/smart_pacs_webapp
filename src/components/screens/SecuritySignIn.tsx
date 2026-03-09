import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Shield, Fingerprint, Calendar, ChevronRight, Lightbulb
} from 'lucide-react';

interface ActiveSession {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
}

export default function SecuritySignIn() {
  const navigate = useNavigate();
  
  const [settings, setSettings] = useState({
    twoFactorAuth: false,
    biometricAuth: true,
  });

  const [activeSessions, setActiveSessions] = useState<ActiveSession[]>([
    {
      id: '1',
      device: 'iPhone 13 Pro',
      location: 'New York, NY',
      lastActive: '2 minutes ago',
      isCurrent: true,
    },
    {
      id: '2',
      device: 'iPad Air',
      location: 'New York, NY',
      lastActive: '2 days ago',
      isCurrent: false,
    },
    {
      id: '3',
      device: 'MacBook Pro',
      location: 'New York, NY',
      lastActive: '1 week ago',
      isCurrent: false,
    },
  ]);

  const handleToggle = (field: string) => {
    setSettings(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }));
  };

  const handleSignOut = (sessionId: string) => {
    setActiveSessions(prev => prev.filter(s => s.id !== sessionId));
  };

  const handleSignOutAll = () => {
    setActiveSessions(prev => prev.filter(s => s.isCurrent));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Security & Sign In</h1>
        <p className="text-gray-600 text-sm mt-1">Manage your account security settings</p>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8">
        {/* Two-Factor Authentication */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Two-Factor Authentication</h2>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-base mb-1.5">Enable 2FA</h3>
              <p className="text-sm text-gray-600">
                Add an extra layer of security to your account
              </p>
            </div>
            <button
              onClick={() => handleToggle('twoFactorAuth')}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors flex-shrink-0 ${
                settings.twoFactorAuth ? 'bg-cyan-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.twoFactorAuth ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Biometric Authentication */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Biometric Authentication</h2>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-base mb-1.5">Face ID / Fingerprint</h3>
              <p className="text-sm text-gray-600">
                Use biometrics to sign in quickly
              </p>
            </div>
            <button
              onClick={() => handleToggle('biometricAuth')}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors flex-shrink-0 ${
                settings.biometricAuth ? 'bg-cyan-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.biometricAuth ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Session Management */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Session Management</h2>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-base mb-4">Auto-logout after inactivity</h3>
            <div className="inline-block bg-gray-100 px-6 py-3.5 rounded-2xl border border-gray-200">
              <span className="text-gray-700 font-medium">15 minutes</span>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Active Sessions</h2>
            </div>
            <span className="text-sm text-gray-500">{activeSessions.length} devices</span>
          </div>

          <div className="space-y-5">
            {activeSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{session.device}</h3>
                    {session.isCurrent && (
                      <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-md">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{session.location}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Last active: {session.lastActive}</p>
                </div>
                {!session.isCurrent && (
                  <button
                    onClick={() => handleSignOut(session.id)}
                    className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors mt-1"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            ))}
          </div>

          {activeSessions.length > 1 && (
            <button
              onClick={handleSignOutAll}
              className="w-full mt-6 px-4 py-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-2xl font-bold transition-colors"
            >
              Sign Out All Devices
            </button>
          )}
        </div>

        {/* Login Activity */}
        <button className="w-full bg-gray-100 hover:bg-gray-200 rounded-2xl p-6 mb-6 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-gray-700" />
              <h2 className="text-lg font-bold text-gray-900">Login Activity</h2>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
        </button>

        {/* Security Tip */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Security Tip</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We recommend enabling two-factor authentication for maximum security. This helps 
                protect your account even if your password is compromised.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
