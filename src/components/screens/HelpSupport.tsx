import { useNavigate } from 'react-router';
import { ArrowLeft, MessageCircle, Mail, Phone, Book } from 'lucide-react';

export default function HelpSupport() {
  const navigate = useNavigate();

  const helpOptions = [
    { icon: <MessageCircle className="w-6 h-6" />, title: 'Live Chat', description: 'Chat with support team', action: () => {} },
    { icon: <Mail className="w-6 h-6" />, title: 'Email Support', description: 'support@smartpacs.com', action: () => {} },
    { icon: <Phone className="w-6 h-6" />, title: 'Call Us', description: '+1 (800) 123-4567', action: () => {} },
    { icon: <Book className="w-6 h-6" />, title: 'Documentation', description: 'View user guides', action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 flex items-center gap-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-xl">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Help & Support</h1>
      </div>

      <div className="p-6 space-y-3">
        {helpOptions.map((option, index) => (
          <button
            key={index}
            onClick={option.action}
            className="w-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-md active:scale-98 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                {option.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-900">{option.title}</p>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
