import { ArrowLeft, ArrowRight, History } from 'lucide-react';
import { useNavigate } from 'react-router';

interface NavigationHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  showForward?: boolean;
  rightAction?: React.ReactNode;
  transparent?: boolean;
}

export default function NavigationHeader({ 
  title, 
  subtitle, 
  onBack, 
  showForward = true,
  rightAction,
  transparent = false
}: NavigationHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleForward = () => {
    navigate(1);
  };

  return (
    <div className={`px-6 pt-12 pb-6 ${transparent ? 'bg-transparent' : 'bg-white border-b border-gray-100'}`}>
      <div className="flex items-center justify-between mb-4">
        {/* Left: Back & Forward */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleBack}
            className="p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className={`w-6 h-6 ${transparent ? 'text-white' : 'text-gray-700'}`} />
          </button>
          
          {showForward && (
            <button
              onClick={handleForward}
              className="p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label="Go forward"
            >
              <ArrowRight className={`w-6 h-6 ${transparent ? 'text-white' : 'text-gray-400'}`} />
            </button>
          )}
        </div>

        {/* Right: Custom Action */}
        {rightAction && (
          <div>
            {rightAction}
          </div>
        )}
      </div>

      {/* Title */}
      <div>
        <h1 className={`text-2xl font-bold ${transparent ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-sm mt-1 ${transparent ? 'text-blue-100' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

// Floating Navigation Buttons (for full-screen views like DICOM viewer)
export function FloatingNavButtons({ onBack, onForward }: { onBack?: () => void; onForward?: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      <button
        onClick={onBack || (() => navigate(-1))}
        className="bg-black/60 backdrop-blur text-white p-3 rounded-full shadow-lg active:scale-95 transition-transform hover:bg-black/80"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={onForward || (() => navigate(1))}
        className="bg-black/60 backdrop-blur text-white p-3 rounded-full shadow-lg active:scale-95 transition-transform hover:bg-black/80"
        aria-label="Go forward"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// History Breadcrumbs
export function NavigationBreadcrumbs({ items }: { items: { label: string; path?: string }[] }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 flex-shrink-0">
          {index > 0 && <span className="text-gray-400">/</span>}
          {item.path ? (
            <button
              onClick={() => navigate(item.path!)}
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-sm text-gray-900 font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}