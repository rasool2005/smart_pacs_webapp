import { Brain, Activity } from 'lucide-react';

export default function SplashScreen() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex flex-col items-center justify-center">
      <div className="relative animate-pulse">
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
        <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
          <Brain className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
        </div>
      </div>
      
      <h1 className="mt-8 text-white font-bold text-3xl tracking-tight">Smart PACS AI</h1>
      <p className="mt-2 text-blue-100 text-sm">Medical Imaging with AI Annotations</p>
      
      <div className="mt-12 flex items-center gap-2 text-white/80">
        <Activity className="w-4 h-4 animate-pulse" />
        <span className="text-sm">Loading...</span>
      </div>
    </div>
  );
}
