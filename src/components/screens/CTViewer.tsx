import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Play, Pause, SkipForward, SkipBack } from 'lucide-react';

export default function CTViewer() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-white p-2 hover:bg-white/10 rounded-lg">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <p className="text-white text-sm">CT Scan - Axial View</p>
        <div className="w-10" />
      </div>

      <div className="flex-1 flex items-center justify-center bg-black">
        <img 
          src="https://images.unsplash.com/photo-1706065638524-eb52e7165abf?w=800" 
          alt="CT scan"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="bg-gray-900 px-4 py-4">
        <div className="flex items-center justify-center gap-4 mb-3">
          <button className="text-white p-3 hover:bg-white/10 rounded-lg"><SkipBack className="w-6 h-6" /></button>
          <button className="text-white p-4 bg-blue-600 hover:bg-blue-700 rounded-full"><Play className="w-6 h-6" /></button>
          <button className="text-white p-3 hover:bg-white/10 rounded-lg"><SkipForward className="w-6 h-6" /></button>
        </div>
        <div className="w-full bg-gray-700 h-2 rounded-full"><div className="w-1/3 bg-blue-600 h-2 rounded-full"></div></div>
      </div>
    </div>
  );
}
