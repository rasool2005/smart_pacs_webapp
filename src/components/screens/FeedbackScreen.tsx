import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MessageSquare, Star } from 'lucide-react';

export default function FeedbackScreen() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      navigate('/settings');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600">Your feedback has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Feedback</h1>
        <p className="text-gray-600 text-sm mt-1">Share your thoughts and help us improve</p>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Feedback Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600 w-24 h-24 rounded-3xl flex items-center justify-center relative">
              <MessageSquare className="w-12 h-12 text-white" />
              <div className="absolute -top-1 -right-1 bg-white w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">!</span>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              We value your feedback!
            </h2>
            <p className="text-gray-600 text-lg">
              Rate your experience and help us improve.
            </p>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-4 mb-12">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-all duration-200 transform hover:scale-110"
              >
                <Star
                  className={`w-14 h-14 transition-colors ${
                    star <= (hoveredRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Feedback Text Area */}
          <div className="mb-8">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us what you think..."
              rows={6}
              className="w-full px-6 py-4 bg-gray-50 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none text-gray-700 placeholder-gray-400 resize-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all active:scale-98 shadow-lg shadow-blue-200"
          >
            Submit Feedback
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Your feedback helps us create a better experience for all healthcare professionals.
          </p>
        </div>
      </div>
    </div>
  );
}
