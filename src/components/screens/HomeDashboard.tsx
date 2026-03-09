import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AlertCircle, Clock, Activity, Calendar, FileText, Brain, TrendingUp, Users, Scan } from 'lucide-react';
import WebTopBar from '../layout/WebTopBar';

const urgentCases = [
  { id: 1, patient: 'John Doe', age: 45, mrn: 'MRN-12345', type: 'CT Chest', aiPriority: 'Critical', confidence: 95, finding: 'Pulmonary nodule detected', time: '5 min ago' },
  { id: 2, patient: 'Sarah Smith', age: 62, mrn: 'MRN-12346', type: 'MRI Brain', aiPriority: 'High', confidence: 88, finding: 'Possible hemorrhage', time: '12 min ago' },
  { id: 3, patient: 'Mike Johnson', age: 38, mrn: 'MRN-12347', type: 'X-Ray Chest', aiPriority: 'High', confidence: 92, finding: 'Rib fracture detected', time: '28 min ago' },
];

const recentStudies = [
  { id: 1, patient: 'Emily Davis', mrn: 'MRN-12348', type: 'CT Abdomen', date: 'Today, 10:30 AM', status: 'Pending Review' },
  { id: 2, patient: 'Robert Wilson', mrn: 'MRN-12349', type: 'MRI Spine', date: 'Today, 09:15 AM', status: 'Completed' },
  { id: 3, patient: 'Lisa Anderson', mrn: 'MRN-12350', type: 'X-Ray Knee', date: 'Today, 08:45 AM', status: 'Completed' },
];

export default function HomeDashboard() {
  const navigate = useNavigate();

  // Dynamic state for dashboard stats
  const [patientsCount, setPatientsCount] = useState<number | string>('...');
  const [studiesCount, setStudiesCount] = useState<number | string>('...');
  const [urgentStudiesCount, setUrgentStudiesCount] = useState<number | string>('...');
  const [aiAnalysisCount, setAiAnalysisCount] = useState<number | string>('...');
  const [appointmentsCount, setAppointmentsCount] = useState<number | string>('...');

  useEffect(() => {
    // Get logged-in user from localStorage or fallback to 1 
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;
    const userId = user?.user_id || 1;

    // Fetch Total Patients
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/patients/', {
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'success' && data.patients) {
            setPatientsCount(data.patients.length);
          } else {
            setPatientsCount(0);
          }
        }
      } catch (err) {
        console.error('Failed to fetch patients:', err);
        setPatientsCount(0); // fallback
      }
    };
    fetchPatients();

    // Fetch user studies (Pending Studies & Appointments)
    const fetchUserStudies = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user-studies/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ user_id: userId })
        });
        if (response.ok) {
          const data = await response.json();
          const studiesList = data.studies || [];
          const pending = studiesList.filter((s: any) => s.status?.toLowerCase().includes('pending'));
          const urgent = studiesList.filter((s: any) => s.priority === 'Critical' || s.priority === 'High' || s.urgent);

          setStudiesCount(pending.length > 0 ? pending.length : (studiesList.length > 0 ? studiesList.length : 0));
          setUrgentStudiesCount(urgent.length);
          setAppointmentsCount(studiesList.length);
        } else {
          setStudiesCount(0);
          setUrgentStudiesCount(0);
          setAppointmentsCount(0);
        }
      } catch (err) {
        setStudiesCount(0);
        setUrgentStudiesCount(0);
        setAppointmentsCount(0);
      }
    };
    fetchUserStudies();

    // Fetch AI Analyses
    const fetchAIAnalyses = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/get-ai-reports/?user_id=${userId}`, {
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          const data = await response.json();
          const reportsList = data.reports || data.data || [];
          setAiAnalysisCount(reportsList.length);
        } else {
          setAiAnalysisCount(0);
        }
      } catch (err) {
        setAiAnalysisCount(0);
      }
    };
    fetchAIAnalyses();

  }, []);

  // Get logged-in user name
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const doctorName = user?.name || 'Doctor';

  return (
    <div className="flex-1 bg-gray-50/50 min-h-screen">
      <main className="p-8 max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {doctorName}</h1>
          <p className="text-gray-500 mt-2">Here's what's happening with your patients today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Users className="w-6 h-6" />}
            label="Total Patients"
            value={String(patientsCount)}
            change="Updated live"
            color="blue"
          />
          <StatCard
            icon={<Scan className="w-6 h-6" />}
            label="Pending Studies"
            value={String(studiesCount)}
            change={`${urgentStudiesCount !== '...' ? urgentStudiesCount : '-'} urgent`}
            color="orange"
          />
          <StatCard
            icon={<Brain className="w-6 h-6" />}
            label="AI Analyses"
            value={String(aiAnalysisCount)}
            change="Updated live"
            color="purple"
          />
          <StatCard
            icon={<Calendar className="w-6 h-6" />}
            label="Appointments"
            value={String(appointmentsCount)}
            change="Updated live"
            color="green"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ActionCard
              icon={<Brain className="w-6 h-6" />}
              title="AI Scanner"
              description="Upload & analyze scans"
              onClick={() => navigate('/ai-scanner')}
              gradient="from-purple-600 to-blue-600"
            />
            <ActionCard
              icon={<Users className="w-6 h-6" />}
              title="Patients"
              description="View patient records"
              onClick={() => navigate('/patients')}
              gradient="from-blue-600 to-cyan-600"
            />
            <ActionCard
              icon={<Activity className="w-6 h-6" />}
              title="Studies"
              description="Browse all studies"
              onClick={() => navigate('/studies')}
              gradient="from-cyan-600 to-teal-600"
            />
            <ActionCard
              icon={<FileText className="w-6 h-6" />}
              title="Reports"
              description="Create & edit reports"
              onClick={() => navigate('/report/1')}
              gradient="from-teal-600 to-green-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Urgent Cases */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Urgent Cases (AI Priority)</h2>
              <button className="text-blue-600 text-sm font-semibold hover:underline">See All</button>
            </div>

            <div className="space-y-4">
              {urgentCases.map((case_) => (
                <div
                  key={case_.id}
                  onClick={() => navigate(`/ai-results/${case_.id}`)}
                  className="bg-white rounded-xl p-5 shadow-sm border border-red-100 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{case_.patient}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${case_.aiPriority === 'Critical'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-orange-100 text-orange-700'
                          }`}>
                          {case_.aiPriority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{case_.mrn} • {case_.age}Y • {case_.type}</p>
                    </div>
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>

                  <div className="bg-red-50 rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium text-gray-900 mb-2">{case_.finding}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-red-500"
                          style={{ width: `${case_.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{case_.confidence}%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">{case_.time}</span>
                    </div>
                    <button className="text-blue-600 text-sm font-semibold hover:underline">Review Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Studies */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Studies</h2>
              <button
                onClick={() => navigate('/studies')}
                className="text-blue-600 text-sm font-semibold hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              {recentStudies.map((study) => (
                <div
                  key={study.id}
                  onClick={() => navigate(`/studies/${study.id}`)}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <h3 className="font-bold text-gray-900 mb-1">{study.patient}</h3>
                  <p className="text-sm text-gray-600 mb-2">{study.mrn}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Scan className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{study.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{study.date}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${study.status === 'Pending Review'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                      }`}>
                      {study.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Scanner Promo */}
            <div
              onClick={() => navigate('/ai-scanner')}
              className="mt-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-5 shadow-lg cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">AI Scanner</h3>
                  <p className="text-purple-100 text-xs">Instant diagnosis</p>
                </div>
              </div>
              <div className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm text-center">
                Scan Now
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, change, color }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  color: string;
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    orange: 'bg-orange-50 text-orange-600',
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600',
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className={`w-12 h-12 rounded-xl ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm mb-1">{label}</p>
      <p className="text-xs text-gray-500">{change}</p>
    </div>
  );
}

function ActionCard({ icon, title, description, onClick, gradient }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  gradient: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-br ${gradient} rounded-xl p-5 text-left hover:shadow-lg transition-all active:scale-95`}
    >
      <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-white">
        {icon}
      </div>
      <h3 className="text-white font-bold mb-1">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </button>
  );
}