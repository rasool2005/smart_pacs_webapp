import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Bell, Moon, Globe, Download, Monitor, Languages, Database, Shield, Info, MessageSquare, ChevronRight } from 'lucide-react';

export default function AppSettings() {
  const navigate = useNavigate();
  
  const [settings, setSettings] = useState({
    notifications: true,
    emailNotifications: true,
    darkMode: false,
    autoDownload: false,
    autoBackup: true,
  });

  const handleToggle = (field: string) => {
    setSettings(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 text-sm mt-1">Manage your application preferences</p>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8">
        {/* Notifications Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2.5 rounded-xl">
              <Bell className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
          </div>

          <div className="space-y-6">
            {/* Push Notifications */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Push Notifications</h3>
                <p className="text-sm text-gray-600">
                  Receive urgent case alerts and updates
                </p>
              </div>
              <button
                onClick={() => handleToggle('notifications')}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                  settings.notifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    settings.notifications ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Email Notifications */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Email Notifications</h3>
                <p className="text-sm text-gray-600">
                  Get email updates for important events
                </p>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Appearance Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2.5 rounded-xl">
              <Monitor className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Appearance</h2>
          </div>

          <div className="space-y-6">
            {/* Dark Mode */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Dark Mode</h3>
                <p className="text-sm text-gray-600">
                  Switch to dark theme (Coming soon)
                </p>
              </div>
              <button
                disabled
                className="relative inline-flex h-7 w-14 items-center rounded-full bg-gray-200 opacity-50 cursor-not-allowed"
              >
                <span className="inline-block h-5 w-5 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>

            {/* Language */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Language</h3>
                <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                  <option>Japanese</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Data & Storage Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2.5 rounded-xl">
              <Database className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Data & Storage</h2>
          </div>

          <div className="space-y-6">
            {/* Auto Download */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Auto-Download Images</h3>
                <p className="text-sm text-gray-600">
                  Automatically download medical images
                </p>
              </div>
              <button
                onClick={() => handleToggle('autoDownload')}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                  settings.autoDownload ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    settings.autoDownload ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Auto Backup */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Auto Backup</h3>
                <p className="text-sm text-gray-600">
                  Automatically backup your data to cloud
                </p>
              </div>
              <button
                onClick={() => handleToggle('autoBackup')}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                  settings.autoBackup ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    settings.autoBackup ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Storage Info */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Storage Usage</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Images & Scans</span>
                  <span className="text-gray-900 font-medium">2.4 GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">2.4 GB of 5 GB used</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2.5 rounded-xl">
              <Monitor className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">App Information</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-700">Version</span>
              <span className="font-semibold text-gray-900">2.1.0</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-700">Build</span>
              <span className="font-semibold text-gray-900">2024-01-21</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">License</span>
              <span className="font-semibold text-gray-900">Enterprise</span>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <button 
          onClick={() => navigate('/privacy-settings')}
          className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2.5 rounded-xl">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <h2 className="text-lg font-bold text-gray-900">Privacy Settings</h2>
                <p className="text-sm text-gray-600 mt-0.5">Manage your data and privacy preferences</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>

        {/* About App */}
        <button 
          onClick={() => navigate('/about')}
          className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2.5 rounded-xl">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <h2 className="text-lg font-bold text-gray-900">About App</h2>
                <p className="text-sm text-gray-600 mt-0.5">Learn more about Smart PACS AI</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>

        {/* Feedback */}
        <button 
          onClick={() => navigate('/feedback')}
          className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2.5 rounded-xl">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <h2 className="text-lg font-bold text-gray-900">Feedback</h2>
                <p className="text-sm text-gray-600 mt-0.5">Send us your feedback and suggestions</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>
      </div>
    </div>
  );
}