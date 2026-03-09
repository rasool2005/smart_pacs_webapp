import { useNavigate } from 'react-router';
import { Home, Users, User, Settings } from 'lucide-react';

// Google Gemini Logo Component
function GeminiLogo({ className = "w-6 h-6", isActive = false }: { className?: string; isActive?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={isActive ? "url(#gemini-gradient-active)" : "currentColor"}/>
      <defs>
        <linearGradient id="gemini-gradient-active" x1="2" y1="2" x2="22" y2="21.02" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285F4"/>
          <stop offset="25%" stopColor="#9B72CB"/>
          <stop offset="50%" stopColor="#D96570"/>
          <stop offset="75%" stopColor="#F2A654"/>
          <stop offset="100%" stopColor="#4285F4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

interface BottomNavProps {
  active?: 'home' | 'patients' | 'schedule' | 'profile' | 'settings';
}

export default function BottomNav({ active = 'home' }: BottomNavProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-3 safe-area-bottom z-40">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <NavItem
          icon={<Home className="w-6 h-6" />}
          label="Home"
          active={active === 'home'}
          onClick={() => navigate('/home')}
        />
        <NavItem
          icon={<Users className="w-6 h-6" />}
          label="Patients"
          active={active === 'patients'}
          onClick={() => navigate('/patients')}
        />
        <NavItem
          icon={<GeminiLogo className="w-6 h-6" isActive={active === 'schedule'} />}
          label="Gemini AI"
          active={active === 'schedule'}
          onClick={() => navigate('/chatbot-tips')}
        />
        <NavItem
          icon={<User className="w-6 h-6" />}
          label="Profile"
          active={active === 'profile'}
          onClick={() => navigate('/profile')}
        />
        <NavItem
          icon={<Settings className="w-6 h-6" />}
          label="Settings"
          active={active === 'settings'}
          onClick={() => navigate('/settings')}
        />
      </div>
    </div>
  );
}

function NavItem({ 
  icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 py-2 px-4 transition-colors"
    >
      <div className={active ? 'text-blue-600' : 'text-gray-400'}>
        {icon}
      </div>
      <span className={`text-xs font-medium ${active ? 'text-blue-600' : 'text-gray-400'}`}>
        {label}
      </span>
    </button>
  );
}