import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Calendar, Clock, User, FileText, Edit2, X, IdCard, StickyNote, Loader2, AlertCircle } from 'lucide-react';

export default function AppointmentDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [study, setStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Ideally you would have a GET endpoint like `/api/studies/${id}/`. 
    // If you only have `/api/user-studies/`, we fetch all and find the matching one.
    const fetchStudyDetails = async () => {
      try {
        setLoading(true);
        // Using user-studies as a comprehensive fetch if a direct ID get isn't available
        const response = await fetch('http://127.0.0.1:8000/api/user-studies/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ user_id: 1 }) // Placeholder for logged-in user
        });

        const text = await response.text();
        const data = JSON.parse(text);

        if (response.ok && data.status === 'success') {
          const foundStudy = data.studies.find((s: any) => String(s.id) === String(id));
          if (foundStudy) {
            setStudy(foundStudy);
          } else {
            setError('Appointment not found in your records.');
          }
        } else {
          setError(data.message || 'Failed to fetch appointment details.');
        }
      } catch (err: any) {
        console.error('Fetch error:', err);
        setError(err.message || 'Cannot load appointment right now.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchStudyDetails();
    }
  }, [id]);

  // Helper function to extract time nicely if scheduled_date is a full timestamp
  const formatTime = (dateString: string) => {
    if (!dateString) return 'N/A';
    if (dateString.includes('T')) {
      const timePart = dateString.split('T')[1];
      // Convert 24hr string "14:13:00" to 12hr "2:13 PM" roughly
      const [hourStr, minuteStr] = timePart.split(':');
      let hour = parseInt(hourStr, 10);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12;
      hour = hour ? hour : 12;
      return `${hour}:${minuteStr} ${ampm}`;
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !study) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-24">
        <div className="bg-red-50 p-6 rounded-2xl flex flex-col items-center max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Appointment</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/follow-up')}
            className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Appointment Details</h1>
        <p className="text-gray-600 text-sm mt-1">View and manage appointment information</p>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Patient Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2.5 rounded-xl">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Patient Information</h2>
              </div>

              <div className="space-y-5">
                {/* Patient Name */}
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Patient Name</p>
                    <p className="font-semibold text-gray-900 text-lg">
                      {study.patient_name || `Patient #${study.patient_id}`}
                    </p>
                  </div>
                </div>

                {/* Patient ID */}
                <div className="flex items-start gap-3">
                  <IdCard className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Patient ID</p>
                    <p className="font-semibold text-gray-900">
                      PT-{study.patient_id || 'Unknown'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2.5 rounded-xl">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Appointment Information</h2>
              </div>

              <div className="space-y-5">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Date</p>
                    <p className="font-semibold text-gray-900 text-lg">
                      {formatDate(study.study_date || study.scheduled_date)}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Time</p>
                    <p className="font-semibold text-gray-900 text-lg">
                      {formatTime(study.study_time || study.scheduled_date)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Information */}
            {study.notes && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-2.5 rounded-xl">
                    <StickyNote className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Clinical Information</h2>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">Notes</p>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                          {study.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/schedule-appointment')}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-colors"
              >
                <Edit2 className="w-5 h-5" />
                Reschedule
              </button>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to cancel this appointment?')) {
                    navigate('/follow-up');
                  }
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-4 rounded-xl font-semibold border-2 border-red-200 transition-colors"
              >
                <X className="w-5 h-5" />
                Cancel Appointment
              </button>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Status</h3>
              <span className={`px-4 py-2 text-sm font-bold rounded-xl inline-block ${study.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                {study.status ? study.status.charAt(0).toUpperCase() + study.status.slice(1) : 'Pending'}
              </span>
            </div>

            {/* Appointment Type */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Type</h3>
              <p className="text-gray-700">{study.test_type || study.study_type}</p>
            </div>

            {/* Quick Info */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-3">Reminder</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Please arrive 15 minutes before your scheduled appointment time. Bring your insurance card and ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}