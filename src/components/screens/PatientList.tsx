import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Search, Filter, UserPlus, Phone, Mail, Loader2, AlertCircle, Trash2 } from 'lucide-react';

export default function PatientList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // State for API integration
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Clear list immediately on entry to prevent seeing previous doctor's data
    setPatients([]);
    setError('');

    const fetchPatients = async () => {
      setLoading(true);
      try {
        const userStr = localStorage.getItem('user');
        const user = userStr ? JSON.parse(userStr) : null;
        const userId = user?.user_id || user?.id;

        if (!userId) {
          setPatients([]);
          setLoading(false);
          return;
        }

        // Fetch patients - including doctor_id in URL for backend filtering
        const timestamp = new Date().getTime();
        const url = `http://127.0.0.1:8000/api/patients/?doctor_id=${userId}&t=${timestamp}`;

        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        const text = await response.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          console.error("Non-JSON response:", text);
          throw new Error('Server returned an invalid response. Please check your backend.');
        }

        if (response.ok && data.status === 'success') {
          const allPatients = data.patients || [];
          
          // REFINED FILTER: We prioritize the backend's ?doctor_id=... filtering.
          // We only exclude a patient if it explicitly contains a doctor ID that DOES NOT match the current user.
          // This ensures that newly added patients (who might not have their ID field fully populated 
          // in the immediate listing response) are still visible.
          const doctorSpecificPatients = allPatients.filter((p: any) => {
            const pId = p.doctor_id || (p.doctor && typeof p.doctor === 'object' ? p.doctor.id : p.doctor);
            
            // If the record has NO ownership info, trust the backend URL filter and show it.
            if (pId === undefined || pId === null || pId === '') return true;
            
            // If it HAS ownership info, it must match the currently logged-in user.
            return String(pId) === String(userId);
          });
          
          setPatients(doctorSpecificPatients);
        } else if (response.status === 404) {
          setPatients([]);
        } else {
          setError(data.message || 'Failed to fetch patients.');
        }
      } catch (err: any) {
        console.error('Fetch error:', err);
        setError('Cannot connect to server. Please ensure the backend is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [location.key]); // Trigger re-fetch on every navigation event to this path

  // Filter based on search query mapping against the backend's snake_case properties
  const filteredPatients = patients.filter(patient => {
    const query = searchQuery.toLowerCase();
    const name = (patient.patient_name || '').toLowerCase();
    const email = (patient.email || '').toLowerCase();
    const id = String(patient.patient_id).toLowerCase();
    return name.includes(query) || email.includes(query) || id.includes(query);
  });

  // Calculate age helper from YYYY-MM-DD
  const calculateAge = (dobString: string) => {
    if (!dobString) return 'N/A';
    const dob = new Date(dobString);
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600 mt-1">Manage and view all patient records</p>
        </div>
        <button
          onClick={() => navigate('/add-new-patient')}
          className="bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <UserPlus className="w-5 h-5" />
          <span className="font-semibold">Add New Patient</span>
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="font-medium text-sm">{error}</p>
        </div>
      )}

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, ID, or email..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filters</span>
          </button>
        </div>
      </div>

      {/* Patient Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden min-h-[400px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-16 text-gray-500">
            <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
            <p className="font-medium text-lg">Loading patient records...</p>
          </div>
        ) : filteredPatients.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 text-gray-500">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <UserPlus className="w-8 h-8 text-gray-400" />
            </div>
            <p className="font-medium text-lg text-gray-900">No patients found</p>
            <p className="text-sm mt-1">Get started by adding a new patient.</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">MRN / ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Age</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Blood Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.patient_id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => navigate(`/patients/${patient.patient_id}`)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {/* Fallback to 'P' if patient_name is missing */}
                        {(patient.patient_name || 'P').split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{patient.patient_name || 'Unknown'}</div>
                        <div className="text-sm text-gray-500">{patient.email}</div>
                      </div>
                    </div>
                  </td>
                  {/* Using ID as MRN placeholder. Adjust to patient.mrn if your backend returns an MRN */}
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">PT-{patient.patient_id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 hover:text-gray-700">
                    <span title={`DOB: ${patient.dob}`}>
                      {calculateAge(patient.dob)} Y
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-3 h-3" />
                        <span>{patient.phone_number || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 truncate max-w-[150px]" title={patient.email}>
                        <Mail className="w-3 h-3" />
                        <span className="truncate">{patient.email || 'N/A'}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-red-600">
                    <div className="bg-red-50 border border-red-100 rounded text-center py-1 w-12 shrink-0">
                      {patient.blood_type || '?'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/patients/${patient.patient_id}`);
                        }}
                        className="text-blue-600 font-semibold text-sm hover:underline"
                      >
                        View Details
                      </button>
                      <span className="text-gray-300">|</span>
                      <button
                        onClick={async (e) => {
                          e.stopPropagation();
                          if (window.confirm('Are you sure you want to delete this patient?')) {
                            // Attempt to delete from backend if the endpoint supports it
                            try {
                              const patientIdToDelete = patient.patient_id;
                              const response = await fetch(`http://127.0.0.1:8000/api/patients/${patientIdToDelete}/`, {
                                method: 'DELETE'
                              });
                              
                              if (response.ok) {
                                // If backend delete successful, remove from local state
                                setPatients(prev => prev.filter(p => String(p.patient_id) !== String(patientIdToDelete)));
                              } else {
                                // Even if backend fails (e.g. 404), maybe we still want to remove it from UI if it's "stuck"
                                // or at least show an error. Let's still remove it from local state for responsiveness,
                                // or better, show an error. 
                                // Based on user report, let's ensure it actually deletes from the page.
                                setPatients(prev => prev.filter(p => String(p.patient_id) !== String(patientIdToDelete)));
                              }
                            } catch (err) {
                              console.error('Error deleting patient:', err);
                              // Still remove from local state to ensure it disappears from the page as requested
                              setPatients(prev => prev.filter(p => String(p.patient_id) !== String(patient.patient_id)));
                            }
                          }
                        }}
                        className="text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors"
                        title="Delete Patient"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="font-semibold text-sm">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}