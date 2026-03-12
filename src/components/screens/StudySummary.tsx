import { useLocation, useNavigate, useParams } from 'react-router';
import { ArrowLeft, Eye, FileText, Download } from 'lucide-react';

export default function StudySummary() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Try to get study details from navigation state
  const study = location.state?.study;
  const studyType = study?.type || 'CT Chest';
  const studyDate = study?.date || 'Jan 20, 2026';
  const studyStatus = study?.status || 'Completed';

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
            <div className="flex justify-between"><span className="text-gray-600">Type:</span><span className="font-medium">{studyType}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Date:</span><span className="font-medium">{studyDate}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Status:</span><span className="font-medium text-green-600">{studyStatus}</span></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => navigate(`/xray-viewer/${id}`, { state: { study } })} className="bg-blue-600 text-white p-4 rounded-2xl font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform">
            <Eye className="w-5 h-5" />
            View Images
          </button>
          <button onClick={() => navigate(`/ai-results/${id}`, { state: { study } })} className="bg-purple-600 text-white p-4 rounded-2xl font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform">
            <FileText className="w-5 h-5" />
            AI Results
          </button>
        </div>

        <button
          onClick={() => {
            const reportData = {
              patient_name: study?.patientName || "Guest Patient",
              examination_type: studyType.toUpperCase(),
              observation: "No observation notes available for this historical study. Please refer to AI results or previous records.",
              scan_image: study?.thumbnail
            };
            navigate(`/report/${id}`, { state: { reportData } });
          }}
          className="w-full bg-white text-gray-700 p-4 rounded-2xl font-semibold border-2 border-gray-200 flex items-center justify-center gap-2"
        >
          <FileText className="w-5 h-5" />
          View Report
        </button>
      </div>
    </div>
  );
}
