import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Filter } from 'lucide-react';

const studies = [
  { id: '1', patient: 'John Doe', mrn: 'MRN-12345', type: 'CT Chest', date: 'Jan 20, 2026', priority: 'High' },
  { id: '2', patient: 'Sarah Smith', mrn: 'MRN-12346', type: 'MRI Brain', date: 'Jan 19, 2026', priority: 'Critical' },
  { id: '3', patient: 'Mike Johnson', mrn: 'MRN-12347', type: 'X-Ray Chest', date: 'Jan 18, 2026', priority: 'Normal' },
  { id: '4', patient: 'Emily Davis', mrn: 'MRN-12348', type: 'CT Abdomen', date: 'Jan 17, 2026', priority: 'High' },
];

export default function StudyList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [studiesList, setStudiesList] = useState(studies);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-6 py-4 shadow-sm mb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Studies</h1>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search studies..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-gray-50 p-3 rounded-xl border border-gray-200">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="px-6 space-y-3">
        {studiesList.map((study) => (
          <div
            key={study.id}
            onClick={() => navigate(`/studies/${study.id}`)}
            className="bg-white rounded-2xl p-4 shadow-sm active:scale-98 transition-transform cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{study.type}</h3>
                <p className="text-sm text-gray-600">{study.patient} • {study.mrn}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${study.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                study.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                {study.priority}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{study.date}</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Are you sure you want to remove this study?')) {
                      setStudiesList(prev => prev.filter(s => s.id !== study.id));
                    }
                  }}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Remove
                </button>
                <button className="text-blue-600 font-semibold hover:underline">View Study</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
