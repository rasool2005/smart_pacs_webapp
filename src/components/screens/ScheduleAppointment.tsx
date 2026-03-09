import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Calendar, Clock, User, FileText, Loader2, AlertCircle } from 'lucide-react';

export default function ScheduleAppointment() {
  const navigate = useNavigate();
  const location = useLocation();

  // States for fetching patients
  const [patients, setPatients] = useState<any[]>([]);
  const [loadingPatients, setLoadingPatients] = useState(true);

  // Submit states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    patient: '',
    type: '',
    date: location.state?.date || '',
    time: '',
    notes: location.state?.notes || '',
  });

  // Fetch patients list for the dropdown when component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoadingPatients(true);
        const response = await fetch('http://127.0.0.1:8000/api/patients/', {
          headers: { 'Accept': 'application/json' }
        });
        const text = await response.text();
        const data = JSON.parse(text);

        if (response.ok && data.status === 'success') {
          const loadedPatients = data.patients || [];
          setPatients(loadedPatients);

          // Auto-select patient and type if passed from Dashboard
          if (location.state?.patientName || location.state?.type) {
            let matchedPatientId = '';
            if (location.state.patientName) {
              const matchedPatient = loadedPatients.find((p: any) =>
                p.patient_name?.toLowerCase().includes(location.state.patientName.toLowerCase()) ||
                location.state.patientName.toLowerCase().includes(p.patient_name?.toLowerCase())
              );
              if (matchedPatient) {
                matchedPatientId = String(matchedPatient.id || matchedPatient.patient_id);
              }
            }

            let mappedType = '';
            if (location.state.type) {
              const lowerType = location.state.type.toLowerCase();
              if (lowerType.includes('ct')) mappedType = 'CT Scan';
              else if (lowerType.includes('mri')) mappedType = 'MRI';
              else if (lowerType.includes('x-ray') || lowerType.includes('xray')) mappedType = 'X-Ray';
              else if (lowerType.includes('ultra')) mappedType = 'Ultrasound';
              else mappedType = location.state.type;
            }

            setFormData(prev => ({
              ...prev,
              patient: matchedPatientId || prev.patient,
              type: mappedType || prev.type
            }));
          }
        } else {
          console.error('Failed to load patients for dropdown:', data.message);
        }
      } catch (err) {
        console.error('Error fetching patients:', err);
      } finally {
        setLoadingPatients(false);
      }
    };

    fetchPatients();
  }, [location.state]);

  const handleSchedule = async () => {
    setError('');

    // Basic validation
    if (!formData.patient || !formData.type || !formData.date || !formData.time) {
      setError('Please fill in all required fields (Patient, Type, Date, Time).');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedPatient = patients.find(p => String(p.id || p.patient_id) === String(formData.patient));

      const payload = {
        user_id: 1, // Placeholder: Django expected a foreign key to the Doctor/User. Replace with correct logged-in User ID later if needed!
        patient_name: selectedPatient ? selectedPatient.patient_name : "Unknown",
        study_type: formData.type,
        study_date: formData.date,
        study_time: formData.time,
        notes: formData.notes
      };

      const response = await fetch('http://127.0.0.1:8000/api/schedule-study/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error('Server returned HTML error. Check endpoint `/api/schedule-study/`.');
      }

      if (response.ok && data.status === 'success') {
        navigate(-1);
      } else {
        // Handle serialization errors from Django, which often return objects
        const errorMsg = typeof data.message === 'object'
          ? JSON.stringify(data.message)
          : data.message;
        setError(`Error: ${errorMsg || 'Failed to schedule appointment'}`);
      }
    } catch (err: any) {
      setError(err.message || 'Cannot reach server right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 flex items-center gap-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-xl transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Schedule Appointment</h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-5">

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium text-sm">{error}</p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Patient <span className="text-red-500">*</span></label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={formData.patient}
              onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
              disabled={loadingPatients || isSubmitting}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <option value="">
                {loadingPatients ? 'Loading patients...' : 'Select patient...'}
              </option>
              {patients.map(p => (
                <option key={p.id || p.patient_id} value={p.id || p.patient_id}>
                  {p.patient_name || 'Unknown'} (PT-{p.id || p.patient_id})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Type <span className="text-red-500">*</span></label>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              disabled={isSubmitting}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <option value="">Select type...</option>
              <option value="CT Scan">CT Scan</option>
              <option value="MRI">MRI</option>
              <option value="X-Ray">X-Ray</option>
              <option value="Ultrasound">Ultrasound</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date <span className="text-red-500">*</span></label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                disabled={isSubmitting}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time <span className="text-red-500">*</span></label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                disabled={isSubmitting}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            disabled={isSubmitting}
            placeholder="Add any additional context or clinical notes..."
            className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:opacity-50"
            rows={4}
          />
        </div>

        <button
          onClick={handleSchedule}
          disabled={isSubmitting || loadingPatients}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-2xl font-semibold shadow-lg active:scale-98 transition-all mt-6 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Scheduling...
            </>
          ) : (
            'Schedule Appointment'
          )}
        </button>
      </div>
    </div>
  );
}
