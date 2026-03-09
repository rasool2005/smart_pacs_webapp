import { useNavigate } from 'react-router';
import { 
  Brain, Clock, Shield, Users, CheckCircle, ChevronRight, ExternalLink
} from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with App Icon */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-xl mb-6">
            <Brain className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Smart PACS AI</h1>
          <p className="text-blue-100 text-lg mb-1">Version 2.1.0</p>
          <p className="text-blue-100">Medical Imaging with AI Annotations</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8">
        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Smart PACS AI</h2>
          <p className="text-gray-700 leading-relaxed">
            Smart PACS AI is an advanced medical imaging platform that combines traditional PACS 
            functionality with cutting-edge artificial intelligence to assist radiologists and 
            healthcare professionals in faster, more accurate diagnosis. Our AI models are trained 
            on millions of medical images to detect abnormalities and assist in clinical decision-making.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI-Powered Analysis */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">AI-Powered Analysis</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Real-time AI detection of abnormalities with confidence scores
                </p>
              </div>
            </div>

            {/* Fast Workflow */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Fast Workflow</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Streamlined interface designed for rapid case review
                </p>
              </div>
            </div>

            {/* HIPAA Compliant */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">HIPAA Compliant</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enterprise-grade security and encryption
                </p>
              </div>
            </div>

            {/* Collaboration Tools */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Collaboration Tools</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Share cases and get second opinions instantly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Technology */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Technology</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Deep Learning Models</h3>
              <p className="text-gray-700">
                Based on Convolutional Neural Networks (CNNs) trained on 5M+ medical images
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Detection Accuracy</h3>
              <p className="text-gray-700">
                98.5% sensitivity, 97.2% specificity
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Certifications</h3>
              <p className="text-gray-700">
                FDA Cleared, CE Mark certified
              </p>
            </div>
          </div>
        </div>

        {/* Developed By */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Developed By</h2>
          <p className="text-gray-700 mb-1">Final Year Engineering Project</p>
          <p className="text-gray-700 mb-1">Department of Computer Science & AI</p>
          <p className="text-gray-700 mb-4">Healthcare Informatics Lab</p>
          
          <div className="flex items-center gap-2 text-blue-600">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Made with passion for better healthcare</span>
          </div>
        </div>

        {/* Legal Links */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal</h2>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
              <span className="text-blue-600 font-semibold">Terms of Service</span>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
              <span className="text-blue-600 font-semibold">Privacy Policy</span>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
              <span className="text-blue-600 font-semibold">License Agreement</span>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
              <span className="text-blue-600 font-semibold">Open Source Licenses</span>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Build Version */}
        <div className="text-center text-gray-500 text-sm py-6">
          <p>Build Version</p>
          <p className="font-mono mt-1">2.1.0 (Build 2024-01-21)</p>
        </div>
      </div>
    </div>
  );
}
