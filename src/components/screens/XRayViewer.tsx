import { useState, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { ArrowLeft, ZoomIn, ZoomOut, Maximize2, Download } from 'lucide-react';

export default function XRayViewer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const study = location.state?.study;
  const studyType = study?.type || 'X-Ray Chest';

  let imageUrl = 'https://images.unsplash.com/photo-1584555684040-bad07f46a21f?w=800';
  let title = 'X-Ray Chest - AP View';
  if (studyType.toLowerCase().includes('ct')) {
    title = studyType;
  } else if (studyType.toLowerCase().includes('mri')) {
    title = studyType;
    imageUrl = '/mri-brain.png';
  } else if (studyType.toLowerCase().includes('spine')) {
    title = studyType;
    imageUrl = '/xray-spine.png';
  } else {
    title = studyType;
  }

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));

  const handleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.replace(/\s+/g, '_')}_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
      // Fallback for cross-origin images that prevent blob download
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = `${title.replace(/\s+/g, '_')}.png`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col" ref={containerRef}>
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
          alt={`${studyType} scan`}
          className="max-w-full max-h-full object-contain transition-transform duration-200"
          style={{ transform: `scale(${zoom})` }}
        />
      </div>

      <div className="bg-gray-900 px-4 py-4 flex items-center justify-around z-10 relative">
        <button onClick={handleZoomIn} className="text-white p-3 hover:bg-white/10 rounded-lg">
          <ZoomIn className="w-6 h-6" />
        </button>
        <button onClick={handleZoomOut} className="text-white p-3 hover:bg-white/10 rounded-lg">
          <ZoomOut className="w-6 h-6" />
        </button>
        <button onClick={handleFullscreen} className="text-white p-3 hover:bg-white/10 rounded-lg">
          <Maximize2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
