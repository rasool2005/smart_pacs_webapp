import { useState, useRef, useEffect } from 'react';
import { Search, Bell, User, X, AlertCircle, CheckCircle, Clock, Info, Scan } from 'lucide-react';
import { useNavigate } from 'react-router';

const notifications = [
  {
    id: 1,
    type: 'critical',
    title: 'Critical Finding — John Doe',
    message: 'AI detected pulmonary nodule with 95% confidence on CT Chest.',
    time: '5 min ago',
    read: false,
    route: '/ai-results/1',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Urgent Review — Sarah Smith',
    message: 'Possible hemorrhage on MRI Brain. High priority flagged.',
    time: '12 min ago',
    read: false,
    route: '/ai-results/2',
  },
  {
    id: 3,
    type: 'warning',
    title: 'AI Alert — Mike Johnson',
    message: 'Rib fracture detected on X-Ray Chest. 92% confidence.',
    time: '28 min ago',
    read: false,
    route: '/ai-results/3',
  },
  {
    id: 4,
    type: 'success',
    title: 'Report Finalized',
    message: 'MRI Spine report for Robert Wilson has been completed.',
    time: '1 hour ago',
    read: true,
    route: '/report/1',
  },
  {
    id: 5,
    type: 'info',
    title: 'New Study Uploaded',
    message: 'CT Abdomen for Emily Davis is ready for review.',
    time: '2 hours ago',
    read: true,
    route: '/studies/1',
  },
  {
    id: 6,
    type: 'info',
    title: 'Appointment Reminder',
    message: 'Follow-up appointment with Lisa Anderson at 3:00 PM today.',
    time: '3 hours ago',
    read: true,
    route: '/follow-up',
  },
];

const typeConfig = {
  critical: {
    icon: <AlertCircle className="w-4 h-4" />,
    iconBg: 'bg-red-100 text-red-600',
    dot: 'bg-red-500',
    label: 'Critical',
    labelClass: 'bg-red-100 text-red-700',
  },
  warning: {
    icon: <Scan className="w-4 h-4" />,
    iconBg: 'bg-orange-100 text-orange-600',
    dot: 'bg-orange-500',
    label: 'Urgent',
    labelClass: 'bg-orange-100 text-orange-700',
  },
  success: {
    icon: <CheckCircle className="w-4 h-4" />,
    iconBg: 'bg-green-100 text-green-600',
    dot: 'bg-green-500',
    label: 'Done',
    labelClass: 'bg-green-100 text-green-700',
  },
  info: {
    icon: <Info className="w-4 h-4" />,
    iconBg: 'bg-blue-100 text-blue-600',
    dot: 'bg-blue-400',
    label: 'Info',
    labelClass: 'bg-blue-100 text-blue-700',
  },
};

export default function WebTopBar() {
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifs, setNotifs] = useState(notifications);
  const panelRef = useRef<HTMLDivElement>(null);
  const bellRef = useRef<HTMLButtonElement>(null);

  // Get logged-in user name
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const doctorName = user?.name || 'Doctor';

  const unreadCount = notifs.filter(n => !n.read).length;

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        bellRef.current &&
        !bellRef.current.contains(e.target as Node)
      ) {
        setNotifOpen(false);
      }
    }
    if (notifOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [notifOpen]);

  const markAllRead = () => {
    setNotifs(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleNotifClick = (notif: typeof notifications[0]) => {
    markRead(notif.id);
    setNotifOpen(false);
    navigate(notif.route);
  };

  const dismissNotif = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setNotifs(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients, studies, reports..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-6 relative">

        {/* Notification Bell */}
        <button
          ref={bellRef}
          onClick={() => setNotifOpen(prev => !prev)}
          className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <Bell className={`w-5 h-5 ${notifOpen ? 'text-blue-600' : ''}`} />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 min-w-[16px] h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[9px] font-bold px-0.5">{unreadCount}</span>
            </span>
          )}
        </button>

        {/* Notification Panel */}
        {notifOpen && (
          <div
            ref={panelRef}
            className="absolute right-16 top-12 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-600 to-indigo-600">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-white" />
                <h3 className="text-white font-semibold">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    {unreadCount} new
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-blue-100 text-xs hover:text-white transition-colors"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={() => setNotifOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Notification List */}
            <div className="max-h-[420px] overflow-y-auto divide-y divide-gray-50">
              {notifs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                  <Bell className="w-10 h-10 mb-3 opacity-30" />
                  <p className="text-sm font-medium">No notifications</p>
                  <p className="text-xs mt-1">You're all caught up!</p>
                </div>
              ) : (
                notifs.map(notif => {
                  const cfg = typeConfig[notif.type as keyof typeof typeConfig];
                  return (
                    <div
                      key={notif.id}
                      onClick={() => handleNotifClick(notif)}
                      className={`flex gap-3 px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors group relative ${!notif.read ? 'bg-blue-50/40' : 'bg-white'
                        }`}
                    >
                      {/* Unread dot */}
                      {!notif.read && (
                        <span className={`absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                      )}

                      {/* Icon */}
                      <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${cfg.iconBg} mt-0.5`}>
                        {cfg.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className={`text-sm leading-snug ${!notif.read ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                            {notif.title}
                          </p>
                          <button
                            onClick={(e) => dismissNotif(e, notif.id)}
                            className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-0.5 hover:bg-gray-200 rounded transition-all"
                          >
                            <X className="w-3 h-3 text-gray-400" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{notif.message}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{notif.time}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${cfg.labelClass}`}>
                            {cfg.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
              <button
                onClick={() => { setNotifOpen(false); navigate('/follow-up'); }}
                className="w-full text-center text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                View All Activity
              </button>
            </div>
          </div>
        )}

        {/* Profile */}
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center gap-3 pl-3 pr-4 py-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">{doctorName}</p>
            <p className="text-xs text-gray-500">Radiologist</p>
          </div>
        </button>
      </div>
    </div>
  );
}
