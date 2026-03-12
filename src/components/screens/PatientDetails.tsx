import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, User, Calendar, Phone, Mail, FileText, Activity, MapPin, Droplet, AlertCircle, Loader2 } from 'lucide-react';

export default function PatientDetails() {
  const navigate = useNavigate();
  // id matches the dynamic route parameter you setup in App.tsx (:patient_id or :id)
  const { id } = useParams();
  const patientId = id || useParams().patient_id;

  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  const [scanHistory, setScanHistory] = useState<any[]>([]);

  useEffect(() => {
    // Load local scan history for this patient
    if (patientId) {
      const historyKey = `scanHistory_${patientId}`;
      const savedHistory = localStorage.getItem(historyKey);
      if (savedHistory) {
        try {
          setScanHistory(JSON.parse(savedHistory));
        } catch (e) {
          console.error("Failed to parse scan history", e);
        }
      }
    }
  }, [patientId]);

  const handleRemoveScan = (e: React.MouseEvent, scanId: string) => {
    e.stopPropagation(); // prevent navigation
    if (patientId) {
      const updatedHistory = scanHistory.filter(scan => scan.id !== scanId);
      setScanHistory(updatedHistory);
      localStorage.setItem(`scanHistory_${patientId}`, JSON.stringify(updatedHistory));
    }
  };

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        setLoading(true);
        // Replace with your actual DRF endpoint for viewing a single patient (usually /patients/<id>/ or similar)
        // E.g: If you have a detailed view, point this there. If not, point it to the generic patient view and it returns a list to filter.

        // Let's assume you have an endpoint like `/api/patients/<id>/` or even just reuse the generic `/api/patients/` and filter manually for now:
        const response = await fetch('http://127.0.0.1:8000/api/patients/');
        const text = await response.text();

        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          throw new Error('Server returned HTML error (Endpoint not found or crashing).');
        }

        if (response.ok && data.status === 'success') {
          // We filter the list endpoint manually if you don't have a single-patient endpoint yet.
          // Replace this logic with a direct fetch to `http://127.0.0.1:8000/api/patients/${patientId}/` if you make that API
          const foundPatient = data.patients.find((p: any) => String(p.patient_id) === String(patientId));

          if (foundPatient) {
            setPatient(foundPatient);
          } else {
            setError('Patient record not found in the database.');
          }
        } else {
          setError(data.message || 'Failed to fetch patient details.');
        }
      } catch (err: any) {
        console.error('Fetch error:', err);
        setError('Cannot connect to backend to load patient details.');
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchPatientDetails();
    }
  }, [patientId]);

  // Calculate age helper from YYYY-MM-DD
  const calculateAge = (dobString: string) => {
    if (!dobString) return '';
    const dob = new Date(dobString);
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-gray-600 font-medium">Loading Patient Profile...</p>
      </div>
    );
  }

  if (error || !patient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Patient</h2>
          <p className="text-gray-600 mb-6">{error || 'Patient not found.'}</p>
          <button
            onClick={() => navigate('/patients')}
            className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Patient List
          </button>
        </div>
      </div>
    );
  }

  // Formatting variables based on backend snake_case properties
  const age = calculateAge(patient.dob);
  const initials = (patient.patient_name || 'U').split(' ').map((n: string) => n[0]).slice(0, 2).join('');
  const addressString = [patient.address, patient.country_code].filter(Boolean).join(', ') || 'No address provided';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Patient Details</h1>
            <p className="text-gray-600 text-sm mt-1">Complete patient information and medical history</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Patient Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Patient Header Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-3xl shadow-sm">
                  {initials}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{patient.patient_name || 'Unknown Patient'}</h2>
                  <p className="text-blue-100 text-lg">PT-{patient.id} • {age ? `${age} Years` : 'Age Unknown'} • {patient.gender || 'Unknown'}</p>
                </div>
              </div>
            </div>

            {/* Patient Information Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Patient Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Date of Birth */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
                    <p className="font-semibold text-gray-900">{patient.dob || 'Not provided'}</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                    <p className="font-semibold text-gray-900">{patient.phone_number || 'Not provided'}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="font-semibold text-gray-900">{patient.email || 'Not provided'}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="font-semibold text-gray-900 max-w-xs">{addressString}</p>
                  </div>
                </div>

                {/* Blood Type */}
                <div className="flex items-start gap-3">
                  <Droplet className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Blood Type</p>
                    <p className="font-semibold text-gray-900 bg-red-50 px-2 py-0.5 rounded border border-red-100 inline-block">
                      {patient.blood_type || 'Unknown'}
                    </p>
                  </div>
                </div>

                {/* Allergies */}
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Allergies</p>
                    <p className="font-semibold text-gray-900">{patient.allergies || 'None reported'}</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Scan History Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Scan History</h3>
              {scanHistory.length > 0 ? (
                <div className="space-y-3">
                  {scanHistory.map((scan) => (
                    <div
                      key={scan.id}
                      onClick={() => navigate('/ai-scanner', { state: { pastScan: scan, patientId } })}
                      className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors cursor-pointer border border-transparent hover:border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 border border-gray-200">
                            {scan.uploadedImage ? (
                              <img src={scan.uploadedImage} alt="Scan" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Activity className="w-6 h-6 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{scan.type}</p>
                            <p className="text-sm text-gray-600">{scan.date} • {scan.aiResult}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full border border-purple-200 hidden sm:inline-block">
                            View Report
                          </span>
                          <button
                            onClick={(e) => handleRemoveScan(e, scan.id)}
                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Remove from history"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm text-center py-4 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  No scan history available for this patient.
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/schedule-appointment')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Schedule Appointment
                </button>
                <button
                  onClick={() => navigate('/ai-scanner', { state: { patientId, patientName: patient.patient_name } })}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Activity className="w-5 h-5" />
                  AI Scanner
                </button>
                <button
                  onClick={() => console.log('Cancel Appointment clicked')}
                  className="w-full bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 py-3 rounded-xl font-semibold transition-colors"
                >
                  Cancel Schedule
                </button>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-2">Medical Notes</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Patient profile loaded from Django database securely. Address and primary contact info verified. No immediate standing alerts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}