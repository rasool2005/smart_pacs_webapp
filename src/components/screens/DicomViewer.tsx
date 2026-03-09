import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, ZoomIn, ZoomOut, RotateCw, Contrast, Download } from 'lucide-react';

export default function DicomViewer() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-white p-2 hover:bg-white/10 rounded-lg">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <p className="text-white text-sm">CT Chest - Slice 45/120</p>
        <button className="text-white p-2"><Download className="w-6 h-6" /></button>
      </div>

      <div className="flex-1 flex items-center justify-center bg-black">
        <img 
          src="https://images.unsplash.com/photo-1706065638524-eb52e7165abf?w=800" 
          alt="Medical scan"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="bg-gray-900 px-4 py-4 flex items-center justify-around">
        <button className="text-white p-3 hover:bg-white/10 rounded-lg"><ZoomIn className="w-6 h-6" /></button>
        <button className="text-white p-3 hover:bg-white/10 rounded-lg"><ZoomOut className="w-6 h-6" /></button>
        <button className="text-white p-3 hover:bg-white/10 rounded-lg"><RotateCw className="w-6 h-6" /></button>
        <button className="text-white p-3 hover:bg-white/10 rounded-lg"><Contrast className="w-6 h-6" /></button>
      </div>
    </div>
  );
}
