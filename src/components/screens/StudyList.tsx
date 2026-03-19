import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Search, Filter, Loader2, AlertCircle, FileStack, Trash2 } from 'lucide-react';

export default function StudyList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [studiesList, setStudiesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        setLoading(true);
        const userStr = localStorage.getItem('user');
        if (!userStr) {
            setLoading(false);
            return;
        }
        
        const user = JSON.parse(userStr);
        const userId = user?.user_id || user?.id;

        if (!userId) {
          setLoading(false);
          return;
        }

        // Fetch BOTH scheduled studies AND AI scan results to show everything in Studies
        const [studiesRes, reportsRes] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/user-studies/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId })
          }),
          fetch(`http://127.0.0.1:8000/api/get-ai-reports/?user_id=${userId}`)
        ]);

        let combinedData: any[] = [];

        if (studiesRes.ok) {
          const data = await studiesRes.json();
          if (data.status === 'success') {
            const mapped = (data.studies || []).map((s: any) => ({
              id: `study-${s.id}`,
              patient: s.patient_name || "Unknown",
              mrn: s.mrn || `MRN-${s.patient_id || 'N/A'}`,
              type: s.study_type,
              date: s.study_date,
              priority: s.priority || (s.status === 'confirmed' ? 'Normal' : 'High'),
              status: s.status,
              isScan: false,
              raw: s
            }));
            combinedData = [...combinedData, ...mapped];
          }
        }

        if (reportsRes.ok) {
          const data = await reportsRes.json();
          if (data.status === 'success') {
            const mapped = (data.reports || []).map((r: any) => ({
              id: `report-${r.id}`,
              patient: r.patient_name || "Guest Patient",
              mrn: `SCAN-${r.id}`,
              type: `${r.examination_type} Result`,
              date: new Date(r.created_at).toLocaleDateString(),
              priority: r.severity === 'Critical' ? 'Critical' : 'Normal',
              status: 'Completed',
              isScan: true,
              result: r.finding_name,
              confidence: r.confidence_score,
              image: r.scan_image,
              raw: r
            }));
            combinedData = [...combinedData, ...mapped];
          }
        }

        setStudiesList(combinedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      } catch (err) {
        console.error('Study fetch error:', err);
        setError('Cannot connect to server.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudies();
  }, [navigate]);

  const filteredStudies = studiesList.filter(study => 
    (study.patient || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (study.type || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (study.mrn || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (study.result || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (e: React.MouseEvent, study: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Get the real database ID - check multiple possible fields just in case
    const dbId = study.raw?.id || study.raw?.study_id || study.raw?.report_id;
    
    if (!dbId) {
      alert("Error: Record ID not found. Cannot delete.");
      console.error("Missing ID in study data:", study);
      return;
    }

    if (!window.confirm(`Delete ${study.type} for ${study.patient} permanently?`)) return;

    try {
      const isReport = study.isScan;
      const endpoint = isReport 
        ? `http://127.0.0.1:8000/api/delete-ai-report/${dbId}/`
        : `http://127.0.0.1:8000/api/delete-study/${dbId}/`;

      console.log(`Attempting to delete ${isReport ? 'Report' : 'Study'} with ID: ${dbId}`);

      const response = await fetch(endpoint, { 
        method: 'DELETE',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json().catch(() => ({}));

      if (response.ok || response.status === 404) {
        // If 404, it's already gone from DB, so we should still remove it from UI
        setStudiesList(prev => prev.filter(s => s.id !== study.id));
        if (response.status === 404) {
          console.warn("Record already deleted from server, removing from UI.");
        }
      } else {
        alert(`Failed to delete: ${data.message || 'Server error'}`);
      }
    } catch (err: any) {
      console.error('Delete error:', err);
      // Even on connection error, if the user really wants it gone, we could remove from UI? 
      // No, better to alert that it didn't sync.
      alert(`Connection error: ${err.message || 'Could not reach server'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-6 py-4 shadow-sm mb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Studies & Results</h1>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search patients, results or types..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="px-6 space-y-3">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-12 text-gray-500">
            <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
            <p className="font-medium">Loading records...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-2xl flex flex-col items-center gap-2">
            <AlertCircle className="w-8 h-8" />
            <p className="font-semibold">{error}</p>
          </div>
        ) : filteredStudies.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 text-gray-500">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <FileStack className="w-8 h-8 text-gray-400" />
            </div>
            <p className="font-medium text-lg text-gray-900">No records found</p>
          </div>
        ) : (
          filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={(e) => {
                // Only navigate if we didn't click the delete button or another action
                if ((e.target as HTMLElement).closest('button')) return;

                // Ensure the object has the correct fields for the Results page
                const navigateData = study.isScan ? {
                  ...study.raw,
                  type: study.raw.examination_type,
                  uploadedImage: study.raw.scan_image,
                  patientName: study.raw.patient_name
                } : study.raw;

                navigate(`/ai-results/${study.raw.id || study.id}`, { 
                  state: { study: navigateData } 
                });
              }}
              className={`bg-white rounded-2xl p-4 shadow-sm active:scale-[0.99] transition-all cursor-pointer border ${study.isScan ? 'border-l-4 border-l-purple-500' : 'border-transparent'} hover:border-blue-200 hover:shadow-md`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1 truncate">
                    {study.type} 
                    {study.isScan && <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] rounded uppercase shrink-0">Scan Result</span>}
                  </h3>
                  <p className="text-sm text-gray-600 truncate">{study.patient} • {study.mrn}</p>
                  {study.result && (
                    <p className="mt-2 text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg inline-block">
                      Diagnosis: {study.result}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3 ml-4 shrink-0">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${study.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                    study.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                    {study.priority}
                  </span>
                  <button 
                    onClick={(e) => handleDelete(e, study)}
                    className="flex items-center gap-1.5 p-2 px-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                    title="Delete Record"
                  >
                    <Trash2 className="w-5 h-5" />
                    <span className="text-xs font-bold">Delete</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-600 font-medium">{study.date}</span>
                <div className="flex items-center gap-4">
                  <button className="text-blue-600 font-bold hover:underline">
                    View Analysis Result
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
