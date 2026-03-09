import { useNavigate } from 'react-router';
import { Brain } from 'lucide-react';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-12">
          <div className="bg-blue-500 rounded-3xl p-6 shadow-lg mb-6">
            <Brain className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Smart PACS AI</h1>
          <p className="text-gray-600 text-center max-w-sm">
            AI-powered medical imaging platform for faster and more accurate diagnosis
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-blue-600 text-white py-3.5 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 active:scale-98 transition-all"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="w-full bg-white text-blue-600 py-3.5 rounded-2xl font-semibold border-2 border-blue-600 hover:bg-blue-50 active:scale-98 transition-all"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}