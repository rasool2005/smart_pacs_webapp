import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Shield, Download, Info, Lock
} from 'lucide-react';

export default function DataPrivacy() {
  const navigate = useNavigate();
  
  const [settings, setSettings] = useState({
    shareAnalytics: true,
    shareUsage: false,
    personalizedExperience: false,
  });

  const handleToggle = (field: string) => {
    setSettings(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Data & Privacy</h1>
        <p className="text-gray-600 text-sm mt-1">Manage your data and privacy preferences</p>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8">
        {/* Privacy Settings Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Privacy Settings</h2>
          </div>

          <div className="space-y-8">
            {/* Share Analytics Data */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-1.5">Share Analytics Data</h3>
                  <p className="text-sm text-gray-600">
                    Help us improve by sharing anonymous usage statistics
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('shareAnalytics')}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors flex-shrink-0 ${
                    settings.shareAnalytics ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      settings.shareAnalytics ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Share Usage Data */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-1.5">Share Usage Data</h3>
                  <p className="text-sm text-gray-600">
                    Share how you use the app to improve AI accuracy
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('shareUsage')}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors flex-shrink-0 ${
                    settings.shareUsage ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      settings.shareUsage ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Personalized Experience */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-1.5">Personalized Experience</h3>
                  <p className="text-sm text-gray-600">
                    Use your data to personalize your experience
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('personalizedExperience')}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors flex-shrink-0 ${
                    settings.personalizedExperience ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      settings.personalizedExperience ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Data Management Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 p-1 rounded">
              <div className="bg-blue-500 w-5 h-5 rounded flex items-center justify-center">
                <div className="space-y-0.5">
                  <div className="h-0.5 w-3 bg-white rounded"></div>
                  <div className="h-0.5 w-3 bg-white rounded"></div>
                  <div className="h-0.5 w-3 bg-white rounded"></div>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Data Management</h2>
          </div>

          <div className="space-y-4">
            {/* Download Your Data */}
            <button className="w-full flex items-center gap-4 p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors">
              <div className="bg-gray-400 p-3 rounded-full">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-gray-900 text-base mb-1">Download Your Data</h3>
                <p className="text-sm text-gray-600">Get a copy of all your data</p>
              </div>
            </button>

            {/* What Data We Collect */}
            <button className="w-full flex items-center gap-4 p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors">
              <div className="bg-gray-400 p-3 rounded-full">
                <Info className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-gray-900 text-base mb-1">What Data We Collect</h3>
                <p className="text-sm text-gray-600">Learn about our data practices</p>
              </div>
            </button>
          </div>
        </div>

        {/* HIPAA Compliance Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">HIPAA Compliance</h2>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <h3 className="font-bold text-gray-900 text-base">Protected Health Information</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed ml-8">
              Your medical data is encrypted and stored in compliance with HIPAA regulations. 
              We never share your PHI without explicit consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
