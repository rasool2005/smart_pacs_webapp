import { useNavigate, useLocation } from 'react-router';
import {
  Home,
  Users,
  Scan,
  Calendar,
  User,
  Settings,
  LogOut,
  Brain,
  FileText,
  MessagesSquare,
  Activity,
  HelpCircle
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
}

function NavItem({ icon, label, path, active }: NavItemProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-600 hover:bg-gray-100'
        }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  );
}

export default function WebSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/home') return currentPath === '/home';
    return currentPath.startsWith(path);
  };

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-900">Smart PACS</h1>
            <p className="text-xs text-gray-500">AI Medical Imaging</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        <NavItem
          icon={<Home />}
          label="Home"
          path="/home"
          active={isActive('/home')}
        />
        <NavItem
          icon={<Users />}
          label="Patients"
          path="/patients"
          active={isActive('/patients')}
        />
        <NavItem
          icon={<Activity />}
          label="Follow-ups"
          path="/follow-up"
          active={isActive('/follow-up')}
        />
        <NavItem
          icon={<MessagesSquare />}
          label="AI Assistant"
          path="/chatbot-tips"
          active={isActive('/chatbot-tips')}
        />

        <div className="pt-4 mt-4 border-t border-gray-200">
          <NavItem
            icon={<User />}
            label="Profile"
            path="/profile"
            active={isActive('/profile')}
          />
          <NavItem
            icon={<Settings />}
            label="Settings"
            path="/settings"
            active={isActive('/settings')}
          />
          <NavItem
            icon={<HelpCircle />}
            label="Help & Support"
            path="/help"
            active={isActive('/help')}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => {
            localStorage.removeItem('user');
            navigate('/select-hospital');
          }}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}