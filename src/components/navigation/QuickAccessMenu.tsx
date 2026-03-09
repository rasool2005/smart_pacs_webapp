import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Zap, X, Search, Home, Users, Calendar, User, Brain, Eye, 
  FileText, Share2, Settings, HelpCircle, Info, Lock, UserPlus,
  Activity, Scan, MessageSquare, Bell
} from 'lucide-react';

interface Screen {
  name: string;
  path: string;
  icon: React.ReactNode;
  category: string;
}

const screens: Screen[] = [
  // Auth Screens
  { name: 'Welcome', path: '/welcome', icon: <Home />, category: 'Auth' },
  { name: 'Login', path: '/login', icon: <Lock />, category: 'Auth' },
  { name: 'Sign Up', path: '/signup', icon: <UserPlus />, category: 'Auth' },
  { name: 'Forgot Password', path: '/forgot-password', icon: <Lock />, category: 'Auth' },
  { name: 'OTP Verification', path: '/otp-verification', icon: <Lock />, category: 'Auth' },
  { name: 'Reset Password', path: '/reset-password', icon: <Lock />, category: 'Auth' },
  
  // Main Screens
  { name: 'Home Dashboard', path: '/home', icon: <Home />, category: 'Main' },
  { name: 'Patient List', path: '/patients', icon: <Users />, category: 'Main' },
  { name: 'Patient Details', path: '/patients/1', icon: <User />, category: 'Main' },
  { name: 'Study List', path: '/studies', icon: <Scan />, category: 'Main' },
  { name: 'Study Summary', path: '/studies/1', icon: <FileText />, category: 'Main' },
  
  // Viewer & AI
  { name: 'DICOM Viewer', path: '/viewer/1', icon: <Eye />, category: 'Viewer & AI' },
  { name: 'X-Ray Viewer', path: '/xray-viewer/3', icon: <Eye />, category: 'Viewer & AI' },
  { name: 'CT Viewer', path: '/ct-viewer/1', icon: <Eye />, category: 'Viewer & AI' },
  { name: 'MRI Viewer', path: '/mri-viewer/2', icon: <Eye />, category: 'Viewer & AI' },
  { name: 'AI Results', path: '/ai-results/1', icon: <Brain />, category: 'Viewer & AI' },
  { name: 'Report Editor', path: '/report/1', icon: <FileText />, category: 'Viewer & AI' },
  
  // Collaboration
  { name: 'Share Case', path: '/share-case/1', icon: <Share2 />, category: 'Collaboration' },
  
  // Scheduling
  { name: 'Follow-Up Dashboard', path: '/follow-up', icon: <Calendar />, category: 'Scheduling' },
  { name: 'Schedule Appointment', path: '/schedule-appointment', icon: <Calendar />, category: 'Scheduling' },
  { name: 'Appointment Details', path: '/appointment/1', icon: <Activity />, category: 'Scheduling' },
  
  // Profile & Settings
  { name: 'Profile', path: '/profile', icon: <User />, category: 'Profile' },
  { name: 'Edit Profile', path: '/profile/edit', icon: <User />, category: 'Profile' },
  { name: 'Personal Info', path: '/profile/personal-info', icon: <User />, category: 'Profile' },
  { name: 'Change Password', path: '/profile/change-password', icon: <Lock />, category: 'Profile' },
  { name: 'Security & Sign In', path: '/profile/security', icon: <Lock />, category: 'Profile' },
  { name: 'Data & Privacy', path: '/profile/privacy', icon: <Lock />, category: 'Profile' },
  { name: 'Settings', path: '/settings', icon: <Settings />, category: 'Profile' },
  
  // Support
  { name: 'Help & Support', path: '/help', icon: <HelpCircle />, category: 'Support' },
  { name: 'About App', path: '/about', icon: <Info />, category: 'Support' },
];

export default function QuickAccessMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Array.from(new Set(screens.map(s => s.category)));

  const filteredScreens = screens.filter(screen =>
    screen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    screen.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedScreens = categories.reduce((acc, category) => {
    acc[category] = filteredScreens.filter(s => s.category === category);
    return acc;
  }, {} as Record<string, Screen[]>);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
        title="Quick Access Menu (Dev Mode)"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden flex flex-col animate-slide-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Quick Access</h2>
                  <p className="text-purple-100 text-sm">Jump to any screen</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/20 p-2 rounded-xl text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search screens..."
                  className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur border border-white/30 text-white placeholder-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>

            {/* Screen List */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {Object.entries(groupedScreens).map(([category, categoryScreens]) => (
                categoryScreens.length > 0 && (
                  <div key={category} className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categoryScreens.map((screen) => (
                        <button
                          key={screen.path}
                          onClick={() => handleNavigate(screen.path)}
                          className="flex items-center gap-3 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-purple-50 hover:to-pink-50 active:scale-95 transition-all border border-gray-200 hover:border-purple-300"
                        >
                          <div className="bg-white p-2 rounded-lg text-purple-600">
                            {screen.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-900 text-left">
                            {screen.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )
              ))}

              {filteredScreens.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No screens found</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-6 py-3 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                🚀 Developer Mode • {screens.length} Screens Available
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}