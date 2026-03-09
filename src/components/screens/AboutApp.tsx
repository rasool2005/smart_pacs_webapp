import { useNavigate } from 'react-router';
import { ArrowLeft, Brain, Shield, Zap, Award } from 'lucide-react';

export default function AboutApp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 flex items-center gap-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-xl">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">About App</h1>
      </div>

      <div className="p-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-center mb-6">
          <div className="inline-flex bg-white rounded-2xl p-4 mb-4">
            <Brain className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-white text-2xl font-bold mb-2">Smart PACS AI</h2>
          <p className="text-blue-100 mb-4">Version 1.0.0</p>
          <p className="text-blue-50 text-sm">AI-Powered Medical Imaging Platform</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">HIPAA Compliant</p>
              <p className="text-sm text-gray-600">Enterprise-grade security</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
            <Zap className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">AI-Powered Analysis</p>
              <p className="text-sm text-gray-600">Deep learning technology</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">FDA Approved</p>
              <p className="text-sm text-gray-600">Clinical grade accuracy</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 text-center">
          <p className="text-sm text-gray-600">© 2026 Smart PACS AI</p>
          <p className="text-sm text-gray-600">All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
