import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, ZoomIn, ZoomOut, RotateCw, Contrast, Download } from 'lucide-react';

export default function DicomViewer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [contrast, setContrast] = useState(100);

  const imageUrl = "https://images.unsplash.com/photo-1706065638524-eb52e7165abf?w=800";
  const title = "CT Chest - Slice 45/120";

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);
  const handleContrast = () => setContrast(prev => prev === 100 ? 150 : prev === 150 ? 200 : 100);

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.replace(/[\s/]+/g, '_')}_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = `${title.replace(/[\s/]+/g, '_')}.png`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between z-10 relative">
        <button onClick={() => navigate(-1)} className="text-white p-2 hover:bg-white/10 rounded-lg">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <p className="text-white text-sm">{title}</p>
        <button onClick={handleDownload} className="text-white p-2 hover:bg-white/10 rounded-lg">
          <Download className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center bg-black overflow-hidden relative">
        <img
          src={imageUrl}
          alt="Medical scan"
          className="max-w-full max-h-full object-contain transition-all duration-200"
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
            filter: `contrast(${contrast}%)`
          }}
        />
      </div>

      <div className="bg-gray-900 px-4 py-4 flex items-center justify-around z-10 relative">
        <button onClick={handleZoomIn} className="text-white p-3 hover:bg-white/10 rounded-lg"><ZoomIn className="w-6 h-6" /></button>
        <button onClick={handleZoomOut} className="text-white p-3 hover:bg-white/10 rounded-lg"><ZoomOut className="w-6 h-6" /></button>
        <button onClick={handleRotate} className="text-white p-3 hover:bg-white/10 rounded-lg"><RotateCw className="w-6 h-6" /></button>
        <button onClick={handleContrast} className="text-white p-3 hover:bg-white/10 rounded-lg"><Contrast className="w-6 h-6" /></button>
      </div>
    </div>
  );
}
