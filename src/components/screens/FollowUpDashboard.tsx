import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Calendar, Clock, Plus, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '../../config';

export default function FollowUpDashboard() {
  const navigate = useNavigate();

  const [studies, setStudies] = useState<any[]>([]);
  const [counts, setCounts] = useState({ pending: 0, confirmed: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Follow-up required list is now empty by default for a fresh doctor login
  const [followUpList, setFollowUpList] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserStudies = async () => {
      try {
        setLoading(true);
        const userStr = localStorage.getItem('user');
        const user = userStr ? JSON.parse(userStr) : null;
        const userId = user?.user_id || user?.id;

        if (!userId) {
          setLoading(false);
          return;
        }

        const response = await fetch(`${API_BASE_URL}/user-studies/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ user_id: userId })
        });

        const text = await response.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          throw new Error('Server returned HTML error. Check endpoint `/api/user-studies/`.');
        }

        if (response.ok && data.status === 'success') {
          setStudies(data.studies || []);
          setCounts(data.counts || { pending: 0, confirmed: 0 });
        } else {
          setError(data.message || 'Failed to fetch appointments.');
        }
      } catch (err: any) {
        console.error('Fetch error:', err);
        setError(err.message || 'Cannot load appointments right now.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserStudies();
  }, []);

  // Helper function to extract time nicely if scheduled_date is a full timestamp
  const formatTime = (dateString: string) => {
    if (!dateString) return 'N/A';
    // If your backend gives "2026-02-26T14:13:00", get the part after T
    if (dateString.includes('T')) {
      const timePart = dateString.split('T')[1];
      return timePart.substring(0, 5); // Returns HH:MM
    }
    return dateString;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    if (dateString.includes('T')) {
      return dateString.split('T')[0];
    }
    return dateString;
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 mb-8 shadow-lg">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Follow-Up</h1>
            <p className="text-blue-100 text-lg">Schedule & manage appointments</p>
          </div>
          <button
            onClick={() => navigate('/schedule-appointment')}
            className="bg-white text-blue-600 w-14 h-14 rounded-2xl hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center shadow-lg"
          >
            <Plus className="w-7 h-7" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-500/40 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-5xl font-bold text-white mb-2">
              {loading ? <Loader2 className="w-10 h-10 animate-spin" /> : counts.confirmed}
            </div>
            <div className="text-blue-100 text-lg">Confirmed</div>
          </div>
          <div className="bg-blue-500/40 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-5xl font-bold text-white mb-2">
              {loading ? <Loader2 className="w-10 h-10 animate-spin" /> : counts.pending}
            </div>
            <div className="text-blue-100 text-lg">Pending</div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="font-medium text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Appointments */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>

          <div className="space-y-4">
            {loading ? (
              <div className="bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-gray-500">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-4" />
                <p>Loading appointments...</p>
              </div>
            ) : studies.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No upcoming appointments</p>
              </div>
            ) : (
              studies.map((study) => (
                <div
                  key={study.id}
                  onClick={() => navigate(`/appointment/${study.id}`)}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {study.patient_name || `Patient #${study.patient_id}`}
                      </h3>
                      <p className="text-gray-600">{study.test_type || study.study_type}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-2 text-sm font-bold rounded-xl ${study.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {study.status ? study.status.charAt(0).toUpperCase() + study.status.slice(1) : 'Pending'}
                      </span>
                      <button
                        onClick={async (e) => {
                          e.stopPropagation();
                          if (window.confirm('Are you sure you want to remove this appointment?')) {
                            // Attempt to delete from backend if the endpoint supports it (placeholder)
                            try {
                              await fetch(`${API_BASE_URL}/user-studies/${study.id}/`, {
                                method: 'DELETE'
                              });
                            } catch (err) {
                              console.error('Error deleting appointment:', err);
                            }
                            setStudies(prev => prev.filter(s => s.id !== study.id));
                          }
                        }}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove Appointment"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      {/* Uses either study_date or scheduled_date based on backend response */}
                      <span>{formatDate(study.study_date || study.scheduled_date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{formatTime(study.study_time || study.scheduled_date)}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Follow-Up Required */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow-Up Required</h2>
          <div className="space-y-4">
            {followUpList.map((followUp) => (
              <div
                key={followUp.id}
                className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-orange-400 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{followUp.patient}</h3>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-xl text-sm font-bold ${followUp.priority === 'High'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-orange-100 text-orange-700'
                      }`}>
                      {followUp.priority}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (window.confirm('Are you sure you want to remove this follow-up?')) {
                          setFollowUpList(prev => prev.filter(f => f.id !== followUp.id));
                        }
                      }}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove Follow-up"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{followUp.type}</p>

                <div className="bg-amber-50 rounded-xl p-4 mb-4">
                  <p className="text-gray-800">{followUp.note}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Due: {followUp.dueDate}</span>
                  </div>
                  <button
                    onClick={() => navigate('/schedule-appointment', {
                      state: {
                        patientName: followUp.patient,
                        type: followUp.type,
                        notes: followUp.note,
                        date: followUp.dueDate
                      }
                    })}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate('/schedule-appointment')}
          className="w-full max-w-2xl mx-auto block bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 active:scale-98 transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <Plus className="w-6 h-6" />
          Schedule New Appointment
        </button>
      </div>
    </div>
  );
}