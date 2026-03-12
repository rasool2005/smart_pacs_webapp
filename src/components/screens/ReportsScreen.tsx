import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Trash2, FileText, Search, Loader2, AlertCircle } from 'lucide-react';

interface AIReport {
    id: number;
    examination_type: string;
    confidence_score: number;
    finding_name: string;
    severity: string;
    impression: string;
    observation: string;
    created_at: string;
    patient_name?: string; // Optional if not in API initially
    scan_image?: string;
    thumbnail?: string;
}

export default function ReportsScreen() {
    const navigate = useNavigate();
    const [reports, setReports] = useState<AIReport[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            setLoading(true);
            const storedUser = localStorage.getItem('user');
            const user = storedUser ? JSON.parse(storedUser) : null;
            const userId = user?.user_id || user?.id || 1;

            const response = await fetch(`http://127.0.0.1:8000/api/get-ai-reports/?user_id=${userId}`, {
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                const data = await response.json();
                const reportsList = data.reports || data.data || [];

                // Removed dummy data injection to ensure persistent deletion state.
                // Enhance API data with thumbnails/names for better UI matching
                const enhancedReports = reportsList.map((r: any) => ({
                    ...r,
                    patient_name: r.patient_name || 'Unknown Patient',
                    thumbnail: r.scan_image || r.thumbnail || 'https://images.unsplash.com/photo-1584555684040-bad07f46a21f?w=100&h=100&fit=crop'
                })).sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                setReports(enhancedReports);
            } else {
                setError('Failed to fetch reports');
            }
        } catch (err) {
            console.error('Error fetching reports:', err);
            setError('Cannot reach server');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/delete-ai-report/${id}/`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Only remove from local state if backend delete was successful
                setReports(prev => prev.filter(r => r.id !== id));
                console.log(`Report ${id} deleted successfully`);
            } else {
                alert('Failed to delete report from server. Please try again.');
            }
        } catch (err) {
            console.error('Error calling delete API:', err);
            alert('Cannot reach server to delete report.');
        }
    };

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const filteredReports = reports.filter(r =>
        r.patient_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.examination_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.finding_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">Reports</h1>
                </div>
                <div className="w-10" />
            </div>

            <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-4">
                {/* Search Bar */}
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search reports by patient or type..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                        <Loader2 className="w-12 h-12 animate-spin text-blue-500 mb-4" />
                        <p className="font-medium">Loading your reports...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center space-y-3">
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
                        <h3 className="text-red-900 font-bold text-lg">Failed to load reports</h3>
                        <p className="text-red-700">{error}</p>
                        <button onClick={fetchReports} className="px-6 py-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors">
                            Retry
                        </button>
                    </div>
                ) : filteredReports.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="w-10 h-10 text-gray-300" />
                        </div>
                        <h3 className="text-gray-900 font-bold text-xl mb-2">No reports found</h3>
                        <p className="text-gray-500 max-w-xs mx-auto mb-6">
                            {searchQuery ? `No reports match your search "${searchQuery}"` : "You haven't scanned any images with AI yet."}
                        </p>
                        {!searchQuery && (
                            <button
                                onClick={() => navigate('/ai-scanner')}
                                className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all"
                            >
                                Scan Now
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredReports.map((report) => (
                            <div
                                key={report.id}
                                onClick={() => navigate(`/report/${report.id}`, { state: { reportData: report } })}
                                className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group"
                            >
                                {/* Thumbnail */}
                                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0">
                                    <img src={report.thumbnail} alt="Scan Result" className="w-full h-full object-cover" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5">
                                        <h3 className="font-bold text-gray-900 text-lg truncate group-hover:text-blue-600 transition-colors">
                                            {report.patient_name}
                                        </h3>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(report.id);
                                            }}
                                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-gray-700 font-medium text-sm mb-1">{report.examination_type}</p>
                                    <p className="text-gray-500 text-xs font-semibold">
                                        {formatDate(report.created_at)} • <span className={report.severity === 'Critical' ? 'text-red-600' : 'text-blue-600'}>{report.finding_name}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
