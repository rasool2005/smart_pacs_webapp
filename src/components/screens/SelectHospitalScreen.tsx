import { useNavigate } from 'react-router';
import { Building2, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const hospitals = [
    {
        id: 1,
        name: 'Apollo Hospitals',
        type: 'General Hospital',
        address: '21, Greams Lane, Off Greams Road, Chennai',
        phone: '+91 44 2829 3333',
        email: 'enquiry@apollohospitals.com',
    },
    {
        id: 2,
        name: 'Fortis Malar Hospital',
        type: 'Medical Center',
        address: '52, 1st Main Road, Gandhi Nagar, Adyar, Chennai',
        phone: '+91 44 4289 2222',
        email: 'malar@fortishealthcare.com',
    },
    {
        id: 3,
        name: 'MIOT International',
        type: 'Teaching Hospital',
        address: '4/112, Mount Poonamallee Road, Manapakkam, Chennai',
        phone: '+91 44 4200 2288',
        email: 'contactus@miotinternational.com',
    },
    {
        id: 4,
        name: 'Kauvery Hospital',
        type: 'Specialty Hospital',
        address: '81, TTK Road, Alwarpet, Chennai',
        phone: '+91 44 4000 6000',
        email: 'contactchennai@kauveryhospital.com',
    },
    {
        id: 5,
        name: 'Vijaya Hospital',
        type: 'Specialty Hospital',
        address: '180, NSK Salai, Vadapalani, Chennai',
        phone: '+91 44 2471 1000',
        email: 'mail@vijayahospital.com',
    },
    {
        id: 6,
        name: 'Sri Ramachandra Medical Centre',
        type: 'Teaching Hospital',
        address: 'No.1, Ramachandra Nagar, Porur, Chennai',
        phone: '+91 44 4592 4444',
        email: 'enquiry@sriramachandra.edu.in',
    },
    {
        id: 7,
        name: 'Saveetha Medical College & Hospital',
        type: 'Teaching Hospital',
        address: 'Saveetha Nagar, Thandalam, Chennai',
        phone: '+91 44 6681 1000',
        email: 'smch@saveetha.com',
    },
];

export default function SelectHospitalScreen() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 mt-1">Select Your Hospital</h1>
                    <p className="text-sm text-gray-500 mt-1">Choose your healthcare facility to continue</p>
                </div>
            </div>

            <div className="w-full max-w-7xl border-b border-gray-200 mb-8 w-[100vw] ml-[-1rem] mr-[-1rem] px-4"></div>

            {/* Grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitals.map((hospital) => (
                    <div key={hospital.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                        <div className="p-6 pb-4 flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                                    {hospital.type}
                                </span>
                            </div>

                            <h2
                                className="text-lg font-bold text-gray-900 mb-4 cursor-pointer hover:text-blue-600 transition-colors"
                                onClick={() => navigate('/login')}
                            >
                                {hospital.name}
                            </h2>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-600 leading-snug">{hospital.address}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <p className="text-sm text-gray-600">{hospital.phone}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <p className="text-sm text-gray-600">{hospital.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-50 bg-white p-4 flex justify-end">
                            <button
                                onClick={() => navigate('/login')}
                                className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:text-blue-700 transition-colors"
                            >
                                Select <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center text-sm text-gray-500 pb-8">
                Don't see your hospital? Contact support at <a href="mailto:support@smartpacsai.com" className="text-blue-600 font-semibold hover:underline">support@smartpacsai.com</a>
            </div>
        </div>
    );
}
