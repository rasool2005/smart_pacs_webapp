import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Brain, AlertCircle, CheckCircle, Download, Share2 } from 'lucide-react';

export default function AIResults() {
  const navigate = useNavigate();
  const { id } = useParams();

  const findings = [
    { id: '1', condition: 'Pneumonia', severity: 'moderate', confidence: 87.5, location: 'Right lower lobe' },
    { id: '2', condition: 'Pleural Effusion', severity: 'low', confidence: 65.2, location: 'Left costophrenic angle' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 pt-12 pb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 mb-4 text-white hover:bg-white/10 rounded-xl">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold mb-1">AI Analysis Results</h1>
            <p className="text-purple-100 text-sm">Powered by deep learning</p>
          </div>
          <Brain className="w-12 h-12 text-white" />
        </div>
      </div>

      <div className="px-6 -mt-4 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg text-white">
          <p className="text-green-100 text-sm mb-1">Overall Confidence</p>
          <h3 className="text-4xl font-bold">76.4%</h3>
        </div>
      </div>

      <div className="px-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">{findings.length} Findings Detected</h2>
        <div className="space-y-3">
          {findings.map((finding) => (
            <div key={finding.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className={`w-5 h-5 ${finding.severity === 'moderate' ? 'text-orange-600' : 'text-yellow-600'}`} />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{finding.condition}</h3>
                  <p className="text-sm text-gray-600 mb-2">Location: {finding.location}</p>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Confidence</span>
                    <span className="font-semibold">{finding.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${finding.confidence}%` }}></div>
                  </div>
                </div>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                finding.severity === 'moderate' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {finding.severity.charAt(0).toUpperCase() + finding.severity.slice(1)} Severity
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-3">
        <button onClick={() => navigate(`/report/${id}`)} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold active:scale-98 transition-transform flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          Generate Report
        </button>
        <button onClick={() => navigate(`/share-case/${id}`)} className="w-full bg-white text-gray-700 py-4 rounded-2xl font-semibold border-2 border-gray-200 active:scale-98 transition-transform flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
          Share Case
        </button>
      </div>
    </div>
  );
}
