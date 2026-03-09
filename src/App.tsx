import { HashRouter, Routes, Route, Navigate } from 'react-router';
import { useState, useEffect } from 'react';
import WebLayout from './components/layout/WebLayout';

// Auth Screens
import SplashScreen from './components/screens/SplashScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import SelectHospitalScreen from './components/screens/SelectHospitalScreen';
import LoginScreen from './components/screens/LoginScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import OTPVerificationScreen from './components/screens/OTPVerificationScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';

// Main Screens
import HomeDashboard from './components/screens/HomeDashboard';
import AIScannerScreen from './components/screens/AIScannerScreen';
import ChatbotTips from './components/screens/ChatbotTips';
import PatientList from './components/screens/PatientList';
import PatientDetails from './components/screens/PatientDetails';
import StudyList from './components/screens/StudyList';
import StudySummary from './components/screens/StudySummary';
import DicomViewer from './components/screens/DicomViewer';
import XRayViewer from './components/screens/XRayViewer';
import CTViewer from './components/screens/CTViewer';
import MRIViewer from './components/screens/MRIViewer';
import AIResults from './components/screens/AIResults';
import ReportEditor from './components/screens/ReportEditor';
import ShareCase from './components/screens/ShareCase';
import FollowUpDashboard from './components/screens/FollowUpDashboard';
import ScheduleAppointment from './components/screens/ScheduleAppointment';
import AppointmentDetails from './components/screens/AppointmentDetails';
import ProfileScreen from './components/screens/ProfileScreen';
import EditProfile from './components/screens/EditProfile';
import PersonalInfo from './components/screens/PersonalInfo';
import ChangePassword from './components/screens/ChangePassword';
import SecuritySettings from './components/screens/SecuritySettings';
import DataPrivacy from './components/screens/DataPrivacy';
import AppSettings from './components/screens/AppSettings';
import HelpSupport from './components/screens/HelpSupport';
import AboutApp from './components/screens/AboutApp';
import SecuritySignIn from './components/screens/SecuritySignIn';
import About from './components/screens/About';
import FeedbackScreen from './components/screens/FeedbackScreen';
import PrivacySettings from './components/screens/PrivacySettings';
import AddNewPatient from './components/screens/AddNewPatient';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <HashRouter>
      <Routes>
        {/* Auth Routes - No Layout */}
        <Route path="/" element={<Navigate to="/select-hospital" replace />} />
        <Route path="/select-hospital" element={<SelectHospitalScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/otp-verification" element={<OTPVerificationScreen />} />
        <Route path="/reset-password" element={<ResetPasswordScreen />} />

        {/* Main App Routes - With Web Layout */}
        <Route path="/home" element={<WebLayout><HomeDashboard /></WebLayout>} />
        <Route path="/ai-scanner" element={<WebLayout><AIScannerScreen /></WebLayout>} />
        <Route path="/chatbot-tips" element={<WebLayout><ChatbotTips /></WebLayout>} />
        <Route path="/patients" element={<WebLayout><PatientList /></WebLayout>} />
        <Route path="/patients/:patient_id" element={<WebLayout><PatientDetails /></WebLayout>} />
        <Route path="/studies" element={<WebLayout><StudyList /></WebLayout>} />
        <Route path="/studies/:id" element={<WebLayout><StudySummary /></WebLayout>} />
        <Route path="/viewer/:id" element={<WebLayout showSidebar={false}><DicomViewer /></WebLayout>} />
        <Route path="/xray-viewer/:id" element={<WebLayout showSidebar={false}><XRayViewer /></WebLayout>} />
        <Route path="/ct-viewer/:id" element={<WebLayout showSidebar={false}><CTViewer /></WebLayout>} />
        <Route path="/mri-viewer/:id" element={<WebLayout showSidebar={false}><MRIViewer /></WebLayout>} />
        <Route path="/ai-results/:id" element={<WebLayout><AIResults /></WebLayout>} />
        <Route path="/report/:id" element={<WebLayout><ReportEditor /></WebLayout>} />
        <Route path="/share-case/:id" element={<WebLayout><ShareCase /></WebLayout>} />
        <Route path="/follow-up" element={<WebLayout><FollowUpDashboard /></WebLayout>} />
        <Route path="/schedule-appointment" element={<WebLayout><ScheduleAppointment /></WebLayout>} />
        <Route path="/appointment/:id" element={<WebLayout><AppointmentDetails /></WebLayout>} />
        <Route path="/profile" element={<WebLayout><ProfileScreen /></WebLayout>} />
        <Route path="/profile/edit" element={<WebLayout><EditProfile /></WebLayout>} />
        <Route path="/profile/personal-info" element={<WebLayout><PersonalInfo /></WebLayout>} />
        <Route path="/profile/change-password" element={<WebLayout><ChangePassword /></WebLayout>} />
        <Route path="/profile/security" element={<WebLayout><SecuritySettings /></WebLayout>} />
        <Route path="/profile/privacy" element={<WebLayout><DataPrivacy /></WebLayout>} />
        <Route path="/settings" element={<WebLayout><AppSettings /></WebLayout>} />
        <Route path="/help" element={<WebLayout><HelpSupport /></WebLayout>} />
        <Route path="/about" element={<WebLayout><AboutApp /></WebLayout>} />
        <Route path="/security-signin" element={<WebLayout><SecuritySignIn /></WebLayout>} />
        <Route path="/about-us" element={<WebLayout><About /></WebLayout>} />
        <Route path="/feedback" element={<WebLayout><FeedbackScreen /></WebLayout>} />
        <Route path="/privacy-settings" element={<WebLayout><PrivacySettings /></WebLayout>} />
        <Route path="/add-new-patient" element={<WebLayout><AddNewPatient /></WebLayout>} />

        {/* Catch-all route - redirect to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
}