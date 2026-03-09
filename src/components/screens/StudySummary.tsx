import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Eye, FileText, Share2, Download } from 'lucide-react';

export default function StudySummary() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-xl">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Study Summary</h1>
        <button className="p-2"><Download className="w-6 h-6 text-gray-700" /></button>
      </div>

      <div className="p-6 space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-3">Study Information</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">Type:</span><span className="font-medium">CT Chest</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Date:</span><span className="font-medium">Jan 20, 2026</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Status:</span><span className="font-medium text-green-600">Completed</span></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => navigate(`/xray-viewer/${id}`)} className="bg-blue-600 text-white p-4 rounded-2xl font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform">
            <Eye className="w-5 h-5" />
            View Images
          </button>
          <button onClick={() => navigate(`/ai-results/${id}`)} className="bg-purple-600 text-white p-4 rounded-2xl font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform">
            <FileText className="w-5 h-5" />
            AI Results
          </button>
        </div>

        <button onClick={() => navigate(`/report/${id}`)} className="w-full bg-white text-gray-700 p-4 rounded-2xl font-semibold border-2 border-gray-200 flex items-center justify-center gap-2">
          <FileText className="w-5 h-5" />
          View Report
        </button>
      </div>
    </div>
  );
}
