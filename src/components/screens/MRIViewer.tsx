import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Layers, Grid3x3 } from 'lucide-react';

export default function MRIViewer() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-white p-2 hover:bg-white/10 rounded-lg">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <p className="text-white text-sm">MRI Brain - T2 Weighted</p>
        <div className="flex gap-2">
          <button className="text-white p-2"><Layers className="w-5 h-5" /></button>
          <button className="text-white p-2"><Grid3x3 className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-black">
        <img 
          src="https://images.unsplash.com/photo-1758691463165-ca9b5bc2b28a?w=800" 
          alt="MRI scan"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="bg-gray-900 px-4 py-3 flex items-center justify-around">
        <button className="text-white text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg">Axial</button>
        <button className="text-white text-sm px-4 py-2 hover:bg-white/10 rounded-lg">Sagittal</button>
        <button className="text-white text-sm px-4 py-2 hover:bg-white/10 rounded-lg">Coronal</button>
      </div>
    </div>
  );
}
