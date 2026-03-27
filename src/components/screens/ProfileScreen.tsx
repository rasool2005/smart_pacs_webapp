import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import {
  ArrowLeft, User, Key, Shield, Database, HelpCircle,
  FileText, LogOut, Camera, Upload, X
} from 'lucide-react';
import { API_BASE_URL } from '../../config';
import { useEffect } from 'react';

export default function ProfileScreen() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Get logged-in user data
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const doctorName = user?.name || 'Dr. Sarah Smith';

  const [profileImage, setProfileImage] = useState<string | null>(() => {
    if (user?.profile_photo) {
      if (user.profile_photo.startsWith('http')) return user.profile_photo;
      const baseUrl = API_BASE_URL.replace('/api', '');
      return `${baseUrl}${user.profile_photo}`;
    }
    return null;
  });
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  // Fetch latest info on mount to ensure photo is up to date
  useEffect(() => {
    const fetchLatestInfo = async () => {
      try {
        const userId = user?.user_id || user?.id;
        if (!userId) return;

        const response = await fetch(`${API_BASE_URL}/get-personal-info/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ user_id: userId })
        });

        const data = await response.json();
        if (response.ok && data.status === 'success' && data.data) {
          const info = data.data;
          if (info.profile_photo) {
            let photoUrl = info.profile_photo;
            if (!photoUrl.startsWith('http')) {
              const baseUrl = API_BASE_URL.replace('/api', '');
              photoUrl = `${baseUrl}${photoUrl}`;
            }
            setProfileImage(photoUrl);
            
            // Update localStorage as well
            const updatedUser = { ...user, profile_photo: info.profile_photo };
            localStorage.setItem('user', JSON.stringify(updatedUser));
          }
        }
      } catch (err) {
        console.error('Failed to fetch latest profile:', err);
      }
    };
    fetchLatestInfo();
  }, []);

  // Generate initials (up to 3 characters)
  const doctorInitials = doctorName
    .split(' ')
    .filter((n: string) => n.length > 0)
    .map((n: string) => n[0])
    .join('')
    .substring(0, 3)
    .toUpperCase();

  const [isUploading, setIsUploading] = useState(false);

  const uploadPhoto = async (file: File) => {
    setIsUploading(true);
    try {
      const userId = user?.user_id || user?.id;
      if (!userId) return;

      const formData = new FormData();
      formData.append('user_id', userId.toString());
      formData.append('profile_photo', file);

      // Using the same endpoint as PersonalInfo but with FormData
      const response = await fetch(`${API_BASE_URL}/update-profile/`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (response.ok && data.status === 'success') {
        const info = data.data;
        if (info?.profile_photo) {
          let photoUrl = info.profile_photo;
          if (!photoUrl.startsWith('http')) {
            const baseUrl = API_BASE_URL.replace('/api', '');
            photoUrl = `${baseUrl}${photoUrl}`;
          }
          setProfileImage(photoUrl);
          
          // Update localStorage
          const updatedUser = { ...user, profile_photo: info.profile_photo };
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
      }
    } catch (err) {
      console.error('Failed to upload photo:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 1. Show local preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
        setShowPhotoModal(false);
      };
      reader.readAsDataURL(file);

      // 2. Upload to server
      uploadPhoto(file);
    }
  };

  const handleTakePhoto = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.setAttribute('capture', 'user');
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // 1. Show local preview
        const reader = new FileReader();
        reader.onload = (event) => {
          setProfileImage(event.target?.result as string);
          setShowPhotoModal(false);
        };
        reader.readAsDataURL(file);

        // 2. Upload to server
        uploadPhoto(file);
      }
    };
    input.click();
  };

  const handleRemovePhoto = async () => {
    try {
      const userId = user?.user_id || user?.id;
      if (!userId) return;

      const response = await fetch(`${API_BASE_URL}/update-profile/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, profile_photo: null })
      });

      if (response.ok) {
        setProfileImage(null);
        setShowPhotoModal(false);
        const updatedUser = { ...user, profile_photo: null };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (err) {
      console.error('Failed to remove photo:', err);
    }
  };

  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: 'Personal Info', path: '/profile/personal-info' },
    { icon: <Key className="w-5 h-5" />, label: 'Password Change', path: '/profile/change-password' },
    { icon: <Shield className="w-5 h-5" />, label: 'Security & Sign In', path: '/security-signin' },
  ];

  const otherItems = [
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help & Support', path: '/help' },
    { icon: <FileText className="w-5 h-5" />, label: 'About App', path: '/about' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header with Profile Info */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 pt-12 pb-12 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-12 left-6 p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center mt-8">
          {/* Profile Photo with Camera Icon */}
          <div className="relative mb-4">
            <div
              onClick={() => setShowPhotoModal(true)}
              className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer relative overflow-hidden group"
            >
              {isUploading && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 backdrop-blur-[1px]">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${isUploading ? 'opacity-50' : 'opacity-100'}`}
                />
              ) : (
                <div className="text-blue-600 text-3xl font-bold">{doctorInitials}</div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
            </div>

            {/* Camera Button Overlay */}
            <button
              onClick={() => setShowPhotoModal(true)}
              className="absolute bottom-0 right-0 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>

          <h2 className="text-white text-2xl font-bold mb-1">{doctorName}</h2>
          <p className="text-blue-100 text-sm mb-4">Radiologist</p>

          <button
            onClick={() => navigate('/profile/personal-info')}
            className="bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/30 transition-all active:scale-95"
          >
            <User className="w-4 h-4" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 mb-6 mt-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className="text-gray-400">
                  {item.icon}
                </div>
                <span className="text-gray-900 font-medium">{item.label}</span>
              </div>
              <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </button>
          ))}
        </div>
      </div>

      {/* Other Items */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {otherItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className="text-gray-400">
                  {item.icon}
                </div>
                <span className="text-gray-900 font-medium">{item.label}</span>
              </div>
              <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button
            onClick={() => {
              // Clear everything to ensure a fresh state for the next user
              localStorage.clear();
              // Force a full page reload to clear any in-memory state
              window.location.href = '/#/select-hospital';
            }}
            className="w-full flex items-center justify-between p-4 hover:bg-red-50 active:bg-red-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">Logout</span>
            </div>
            <ArrowLeft className="w-5 h-5 text-red-400 rotate-180" />
          </button>
        </div>
      </div>

      {/* Photo Upload Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Change Profile Photo</h3>
              <button
                onClick={() => setShowPhotoModal(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Current Photo Preview */}
            {profileImage && (
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={profileImage}
                      alt="Current profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 mb-1">Current Photo</p>
                    <p className="text-xs text-gray-600">Click an option below to change</p>
                  </div>
                </div>
              </div>
            )}

            {/* Options */}
            <div className="p-4 space-y-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors active:scale-98"
              >
                <div className="bg-blue-600 p-2.5 rounded-xl">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">Upload from Gallery</p>
                  <p className="text-xs text-gray-600">Choose a photo from your device</p>
                </div>
              </button>

              <button
                onClick={handleTakePhoto}
                className="w-full flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-2xl transition-colors active:scale-98"
              >
                <div className="bg-purple-600 p-2.5 rounded-xl">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">Take a Photo</p>
                  <p className="text-xs text-gray-600">Use your camera to take a new photo</p>
                </div>
              </button>

              {profileImage && (
                <button
                  onClick={handleRemovePhoto}
                  className="w-full flex items-center gap-3 p-4 bg-red-50 hover:bg-red-100 rounded-2xl transition-colors active:scale-98"
                >
                  <div className="bg-red-600 p-2.5 rounded-xl">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-gray-900">Remove Photo</p>
                    <p className="text-xs text-gray-600">Use default initials instead</p>
                  </div>
                </button>
              )}
            </div>

            {/* Cancel Button */}
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => setShowPhotoModal(false)}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}