import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Search, UserPlus, Send } from 'lucide-react';

export default function ShareCase() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDoctors, setSelectedDoctors] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const doctors = [
    { id: '1', name: 'Dr. Emily Wilson', specialization: 'Radiologist', avatar: 'EW' },
    { id: '2', name: 'Dr. Robert Brown', specialization: 'Cardiologist', avatar: 'RB' },
    { id: '3', name: 'Dr. Lisa Chen', specialization: 'Pulmonologist', avatar: 'LC' },
  ];

  const toggleDoctor = (doctorId: string) => {
    setSelectedDoctors(prev =>
      prev.includes(doctorId) ? prev.filter(id => id !== doctorId) : [...prev, doctorId]
    );
  };

  const handleShare = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="bg-white px-6 py-4 flex items-center gap-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-xl">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Share Case</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <h2 className="text-sm font-semibold text-gray-700 mb-3">Select Recipients</h2>
        <div className="space-y-2 mb-6">
          {doctors.map((doctor) => (
            <button
              key={doctor.id}
              onClick={() => toggleDoctor(doctor.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-all ${selectedDoctors.includes(doctor.id)
                  ? 'bg-blue-50 border-blue-600'
                  : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {doctor.avatar}
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-900">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.specialization}</p>
              </div>
              {selectedDoctors.includes(doctor.id) && (
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">✓</div>
              )}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Add Message (Optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add a note for the recipient..."
            className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
          />
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-200">
        <button
          onClick={handleShare}
          disabled={selectedDoctors.length === 0}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold active:scale-98 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Share with {selectedDoctors.length} Doctor{selectedDoctors.length !== 1 ? 's' : ''}
        </button>
      </div>
    </div>
  );
}
