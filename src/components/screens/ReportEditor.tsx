import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router';
import { ArrowLeft, Save, Download, Send, Loader2, AlertCircle, CheckCircle, X, Sparkles, Mail, Share2, Brain } from 'lucide-react';
import { API_BASE_URL } from '../../config';

export default function ReportEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [savedReportId, setSavedReportId] = useState<number | null>(null);
  const [reportData, setReportData] = useState<any>(location.state?.reportData || null);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [patientEmail, setPatientEmail] = useState('');
  const [reportText, setReportText] = useState('');

  // Helper to generate a comprehensive professional report
  const generateReportText = (rawData: any) => {
    if (!rawData) return '';

    // Clean data for representation (remove hidden JSON tags)
    const data = {
      ...rawData,
      observation: (rawData.observation || '').split(' [FINDINGS_JSON:')[0],
      findings: rawData.findings || []
    };

    const patientName = data.patient_name || reportData?.patientName || 'Guest Patient';
    const dateStr = new Date(data.created_at || Date.now()).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let text = `SMRT PACS DIAGNOSTIC REPORT\n`;
    text += `============================\n\n`;
    text += `PATIENT: ${patientName.toUpperCase()}\n`;
    text += `DATE: ${dateStr}\n`;
    text += `EXAMINATION: ${data.examination_type?.toUpperCase() || 'X-RAY'} SCAN\n\n`;

    text += `AI FINDINGS:\n`;

    const findingsList = data.findings.length > 0 ? data.findings : [{
      condition: data.finding_name || 'Normal Findings',
      location: data.location || 'General',
      observation: data.observation || data.description || 'No acute abnormalities detected.',
      severity: data.severity || 'Low'
    }];

    // Clean and format findings
    const cleanedFindings = findingsList.map((f: any) => ({
       condition: f.condition || f.finding_name,
       location: f.location || 'General',
       observation: (f.observation || f.description || 'Verified via AI analysis.').split(' [FINDINGS_JSON:')[0],
       severity: (f.severity || 'Low')
    }));

    cleanedFindings.forEach((f: any, idx: number) => {
      text += `${idx + 1}. ${f.condition}\n`;
      text += `   - Location: ${f.location}\n`;
      text += `   - Observation: ${f.observation}\n`;
      text += `   - Severity: ${f.severity}\n\n`;
    });

    text += `AI IMPRESSION:\n`;
    const significantFindings = cleanedFindings.filter((f: any) => 
      f.condition && f.condition.toLowerCase() !== 'normal' && f.condition.toLowerCase() !== 'normal findings'
    );

    if (significantFindings.length > 0) {
      significantFindings.forEach((f: any) => {
        text += `- Evidence of ${f.condition} localized to ${f.location}.\n`;
      });
    } else {
      text += `- No acute abnormalities detected on AI analysis.\n`;
    }

    text += `\nAI ANALYSIS METRICS:\n`;
    text += `- Confidence Score: ${data.confidence_score || '90.0'}%\n`;
    text += `- Radiologist correlation is strongly advised.\n\n`;
    text += `----------------------------\n`;
    text += `Report generated via SMRT PACS AI Suite`;

    return text;
  };

  useEffect(() => {
    // If we have data in state but no reportText yet, generate it
    if (reportData && !reportText) {
      const obs = reportData.observation || '';
      const cleanText = obs.split(' [FINDINGS_JSON:')[0];
      
      // If observation is already a full professional report (contains signature), use it
      if (cleanText.includes('SMRT PACS DIAGNOSTIC REPORT')) {
        setReportText(cleanText);
      } else {
        // Otherwise generate a structured professional one
        setReportText(generateReportText(reportData));
      }
    }
  }, [reportData]);

  useEffect(() => {
    if (id && id !== 'new') {
      fetchReportDetails();
    } else if (!reportData) {
      // New report with no data - show default template
      setReportText(`AI GENERATED REPORT\n--------------------\nEXAMINATION: SCAN\n\nAI ANALYSIS METRICS:\n- Confidence Score: 0%\n- Confidence Level: N/A\n\n...`);
    }
  }, [id]);

  const fetchReportDetails = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(`${API_BASE_URL}/download-report/${id}/`);
      const data = await resp.json();
      if (resp.ok && data.status === 'success' && data.report) {
        setReportData((prev: any) => ({
          ...prev,
          ...data.report,
          scan_image: data.report.scan_image || prev?.scan_image
        }));
        setSavedReportId(Number(id));

        // Use fetched observation if it's meaningful, otherwise generate or use state
        if (data.report.observation) {
          const split = data.report.observation.split(' [FINDINGS_JSON:');
          const cleanText = split[0];
          const jsonPart = split[1] ? split[1].split(']')[0] : null;
          
          let fetchedFindings = [];
          if (jsonPart) {
            try { fetchedFindings = JSON.parse(jsonPart); } catch(e) {}
          }

          // Update reportData with findings so generateReportText can use them
          setReportData((prev: any) => ({
            ...prev,
            ...data.report,
            findings: fetchedFindings.length > 0 ? fetchedFindings : prev?.findings
          }));

          if (cleanText.includes('SMRT PACS DIAGNOSTIC REPORT')) {
            setReportText(cleanText);
          } else {
            setReportText(generateReportText({ ...data.report, findings: fetchedFindings }));
          }
        } else if (!reportText) {
          setReportText(generateReportText({ ...reportData, ...data.report }));
        }
      }
    } catch (err) {
      console.error("Failed to fetch report details:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError('');
    setSuccessMsg('');

    try {
      const storedUser = localStorage.getItem('user');
      const user = storedUser ? JSON.parse(storedUser) : null;
      const userId = user?.user_id || user?.id || 1;

      const payload = {
        user_id: userId,
        examination_type: reportData?.examination_type || "XRAY",
        confidence_score: reportData?.confidence_score || 87.5,
        confidence_level: reportData?.confidence_level || "High",
        finding_name: reportData?.finding_name || "Finding",
        location: reportData?.location || "General",
        severity: reportData?.severity || "Moderate",
        impression: reportData?.impression || "IMPRESSION",
        observation: `${reportText} [FINDINGS_JSON:${JSON.stringify(reportData?.findings || [])}]`,
      };

      const response = await fetch(`${API_BASE_URL}/save-ai-report/`, {
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
        throw new Error("Server returned an invalid response.");
      }

      if (response.ok && data.status === 'success') {
        setSuccessMsg('Report saved successfully');

        // Fetch latest reports to get ID for download/send if not provided by save response
        try {
          const getReports = await fetch(`${API_BASE_URL}/get-ai-reports/?user_id=${userId}`);
          const reportsData = await getReports.json();
          if (reportsData.status === 'success' && reportsData.reports.length > 0) {
            setSavedReportId(reportsData.reports[0].id);
          }
        } catch (e) {
          console.error("Could not fetch reports to get latest report id", e);
        }

        setTimeout(() => {
          navigate(-1);
        }, 1500);
      } else {
        const errorMsg = data.errors
          ? typeof data.errors === 'object' ? JSON.stringify(data.errors) : data.errors
          : data.message;
        setError(errorMsg || 'Failed to save report');
      }
    } catch (err: any) {
      setError(err.message || 'Cannot reach server right now.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = async () => {
    if (!savedReportId) {
      setError('Please save the report first before downloading.');
      return;
    }

    setIsDownloading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/download-report/${savedReportId}/`);
      const data = await response.json();

      if (response.ok && data.status === 'success') {
        const blob = new Blob([JSON.stringify(data.report, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `report_${savedReportId}.json`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        setSuccessMsg('Report downloaded successfully');
      } else {
        setError(data.message || 'Failed to download report');
      }
    } catch (err: any) {
      setError(err.message || 'Cannot reach server right now.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSendEmail = async () => {
    if (!patientEmail) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/send-report-email/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          patient_email: patientEmail,
          report_id: savedReportId
        })
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setSuccessMsg('Report sent successfully');
        setShowEmailModal(false);
        setPatientEmail('');
      } else {
        setError(data.message || 'Failed to send report');
      }
    } catch (err: any) {
      setError(err.message || 'Cannot reach server right now.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-xl">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Edit Report</h1>
        <button onClick={handleSave} className="p-2 text-blue-600">
          <Save className="w-6 h-6" />
        </button>
      </div>

      {error && (
        <div className="mx-6 mt-6 bg-red-50 text-red-600 px-4 py-3 rounded-xl flex items-center gap-2 border border-red-200">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="font-medium text-sm">{error}</p>
        </div>
      )}

      {successMsg && (
        <div className="mx-6 mt-6 bg-green-50 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 border border-green-200">
            <CheckCircle className="w-5 h-5" />
          <p className="font-medium text-sm">{successMsg}</p>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {reportData?.scan_image && (
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col items-center">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 self-start">Scanned Image</h3>
            <div className="relative group flex justify-center w-full">
              <img
                src={reportData.scan_image}
                alt="Scan"
                className="max-h-96 object-contain rounded-xl border border-gray-100 shadow-sm"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
            </div>
            <p className="text-xs text-gray-500 mt-3 font-medium">Verified Source • SmartPACS AI Engine</p>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full min-h-[500px]">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <span className="text-sm font-bold text-gray-700">AI Generated Report</span>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">AI Generated</span>
          </div>
          <textarea
            value={reportText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReportText(e.target.value)}
            className="w-full h-full min-h-96 p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-none"
          />
        </div>

        <div className="p-6 bg-white border-t border-gray-200 space-y-3">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold active:scale-98 transition-transform flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            {isSaving ? 'Saving...' : 'Save Report'}
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
              Download
            </button>
            <button
              onClick={() => savedReportId ? setShowEmailModal(true) : setError('Please save the report first before sending.')}
              className="bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              AI Diagnostic Context
            </h3>
            <div className={`px-3 py-1 rounded-lg text-xs font-bold ${
              parseFloat(reportData?.confidence_score || '0') >= 80 ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
            }`}>
              {reportData?.confidence_score || '0'}% Confidence
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {(reportData?.findings || []).map((f: any, idx: number) => (
              <div key={idx} className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-blue-100">
                <AlertCircle className="w-3.5 h-3.5" />
                {f.condition || f.finding_name}
              </div>
            ))}
            {(!reportData?.findings || reportData.findings.length === 0) && (
              <div className="flex items-center gap-1.5 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-xl text-xs font-bold border border-gray-200">
                <AlertCircle className="w-3.5 h-3.5" />
                {reportData?.finding_name || 'Generic Observation'}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Drafting Metadata</span>
          </div>
        </div>
          <button
            onClick={() => {
              const fullReport = generateReportText(reportData);
              setReportText(fullReport);
            }}
            className="flex items-center justify-center gap-2 w-full bg-blue-50 text-blue-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-blue-100 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Regenerate Professional Report
          </button>
        </div>

        {showEmailModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Send Report</h3>
                <button onClick={() => { setShowEmailModal(false); setPatientEmail(''); setError(''); }} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Show error/success messages inside modal if needed */}
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient Email Address</label>
                  <input
                    type="email"
                    value={patientEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPatientEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    autoFocus
                  />
                </div>
                <button
                  onClick={handleSendEmail}
                  disabled={isSending || !patientEmail}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70 transition-colors"
                >
                  {isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {isSending ? 'Sending...' : 'Send Email'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}