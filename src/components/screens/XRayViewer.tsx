import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, ZoomIn, ZoomOut, Maximize2, Download } from 'lucide-react';

export default function XRayViewer() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-white p-2 hover:bg-white/10 rounded-lg">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <p className="text-white text-sm">X-Ray Chest - AP View</p>
        <button className="text-white p-2"><Download className="w-6 h-6" /></button>
      </div>

      <div className="flex-1 flex items-center justify-center bg-black">
        <img 
          src="https://images.unsplash.com/photo-1584555684040-bad07f46a21f?w=800" 
          alt="X-Ray scan"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="bg-gray-900 px-4 py-4 flex items-center justify-around">
        <button className="text-white p-3 hover:bg-white/10 rounded-lg"><ZoomIn className="w-6 h-6" /></button>
        <button className="text-white p-3 hover:bg-white/10 rounded-lg"><ZoomOut className="w-6 h-6" /></button>
        <button className="text-white p-3 hover:bg-white/10 rounded-lg"><Maximize2 className="w-6 h-6" /></button>
      </div>
    </div>
  );
}
