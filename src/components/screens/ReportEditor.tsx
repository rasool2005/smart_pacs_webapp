import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Save, Download, Send, Loader2, AlertCircle, CheckCircle2, X } from 'lucide-react';

export default function ReportEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSaving, setIsSaving] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [savedReportId, setSavedReportId] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [patientEmail, setPatientEmail] = useState('');
  const [reportText, setReportText] = useState(`RADIOLOGY REPORT

PATIENT INFORMATION:
Name: John Doe
MRN: 12345
Date of Birth: January 15, 1981
Age: 45 Years
Gender: Male

EXAMINATION: Chest X-Ray (PA and Lateral Views)
DATE: March 2, 2026
TIME: 10:30 AM
ORDERING PHYSICIAN: Dr. Sarah Smith
REPORTING RADIOLOGIST: Dr. Michael Johnson

CLINICAL INDICATION:
Patient presents with persistent cough for 2 weeks, shortness of breath, and chest discomfort. Rule out pneumonia or other pulmonary pathology.

TECHNIQUE:
Standard PA (posteroanterior) and lateral chest radiographs were obtained using digital radiography. Images were acquired at 120 kVp with appropriate exposure settings.

COMPARISON:
Previous chest X-ray dated January 15, 2026 available for comparison.

AI ANALYSIS RESULTS:
The examination was processed through our AI-powered diagnostic system with an overall confidence level of 87.5%.

FINDINGS:

LUNGS:
- RIGHT LUNG: Evidence of consolidation in the right lower lobe, measuring approximately 4.5 x 3.2 cm, consistent with pneumonia (AI Confidence: 87.5%)
  * Location: Right lower lobe, posterior segment
  * Severity: Moderate
  * Air bronchograms visible within the consolidation
  * No cavitation identified
  
- LEFT LUNG: Small area of increased opacity in the left costophrenic angle, suggesting pleural effusion (AI Confidence: 65.2%)
  * Estimated volume: Minimal to small (approximately 100-200 mL)
  * Blunting of costophrenic angle present
  * No associated pneumothorax

- Remaining lung parenchyma demonstrates normal aeration
- No masses or nodules identified
- No evidence of interstitial lung disease

PLEURA:
- Small left-sided pleural effusion as described above
- No pneumothorax on either side
- Right pleural surface appears normal

HEART & MEDIASTINUM:
- Cardiac silhouette size is within normal limits (Cardiothoracic ratio: 0.45)
- Mediastinal contours are normal
- No mediastinal widening or lymphadenopathy
- Aortic arch appears normal for age

OSSEOUS STRUCTURES:
- No acute fractures or destructive bone lesions
- Age-appropriate degenerative changes in the thoracic spine
- Ribs intact bilaterally
- Shoulders symmetric

SOFT TISSUES:
- Soft tissues of the chest wall are unremarkable
- No subcutaneous emphysema

IMPRESSION:

1. RIGHT LOWER LOBE PNEUMONIA (Moderate Severity)
   - Community-acquired pneumonia most likely
   - Consolidation measuring 4.5 x 3.2 cm in right lower lobe
   - Recommend clinical correlation and appropriate antibiotic therapy
   - AI Priority: HIGH - Requires prompt treatment

2. SMALL LEFT PLEURAL EFFUSION (Mild)
   - Likely reactive in nature, secondary to pneumonia
   - May consider follow-up imaging if clinically indicated
   - Currently does not require drainage

3. NO PNEUMOTHORAX OR MEDIASTINAL ABNORMALITY

4. CARDIAC SILHOUETTE NORMAL

RECOMMENDATIONS:
1. Initiate appropriate antibiotic therapy for community-acquired pneumonia
2. Clinical correlation with symptoms, physical examination, and laboratory findings
3. Follow-up chest X-ray in 4-6 weeks to ensure resolution after treatment
4. If symptoms worsen or fail to improve within 48-72 hours, consider chest CT for further evaluation
5. Monitor for signs of respiratory distress or complications

QUALITY ASSURANCE:
This report was generated with AI assistance (Deep Learning Model v4.2) and reviewed by a board-certified radiologist. The AI analysis achieved a diagnostic confidence score of 87.5% for primary findings.

URGENCY: Routine - Report communicated to ordering physician via secure messaging system.

_______________________________________________
Electronically signed by: Dr. Michael Johnson, MD
Board Certified Radiologist
License #: RAD-45821
Date: March 2, 2026, 11:45 AM

This report was AI-assisted and physician-verified.`);

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
        examination_type: "Chest X-Ray",
        confidence_score: 87.5,
        confidence_level: "High",
        finding_name: "Pneumonia",
        location: "Right lower lobe",
        severity: "Moderate",
        impression: "RIGHT LOWER LOBE PNEUMONIA",
        observation: reportText,
      };

      const response = await fetch('http://127.0.0.1:8000/api/save-ai-report/', {
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
          const getReports = await fetch(`http://127.0.0.1:8000/api/get-ai-reports/?user_id=${userId}`);
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
      const response = await fetch(`http://127.0.0.1:8000/api/download-report/${savedReportId}/`);
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
      const response = await fetch('http://127.0.0.1:8000/api/send-report-email/', {
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
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <p className="font-medium text-sm">{successMsg}</p>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-6">
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
  );
}