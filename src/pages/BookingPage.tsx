import React, { useState } from 'react';
import { Calendar, Clock, Phone, Mail, MapPin, CreditCard, Star, Sparkles } from 'lucide-react';
import SacredGeometry from '../components/SacredGeometry';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    email: '',
    phone: '',
    sessionType: '',
    mode: '',
    timeSlot: '',
    message: '',
  });

  const sessionTypes = [
    { value: 'life-path', label: 'Life Path Reading (60 min)', price: '₹1200' },
    { value: 'relationship', label: 'Relationship Compatibility (45 min)', price: '₹900' },
    { value: 'career', label: 'Career & Purpose Guidance (45 min)', price: '₹900' },
    { value: 'yearly', label: 'Personal Year Forecast (30 min)', price: '₹700' },
    { value: 'full-chart', label: 'Complete Numerology Chart (90 min)', price: '₹1800' },
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:30 PM - 4:30 PM',
    '5:00 PM - 6:00 PM',
    '7:00 PM - 8:00 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for booking! You will receive a confirmation email shortly.');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent block">
              Session
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Begin your journey of self-discovery through the ancient wisdom of numerology. 
            Choose the session that resonates with your current path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative overflow-hidden">
              <SacredGeometry className="absolute -top-8 -right-8 text-accent-400" size="lg" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <Calendar className="h-8 w-8 text-accent-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Session Booking</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Birth Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Birth Date *
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        required
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Birth Time
                      </label>
                      <input
                        type="time"
                        name="birthTime"
                        value={formData.birthTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Birth Place *
                      </label>
                      <input
                        type="text"
                        name="birthPlace"
                        required
                        value={formData.birthPlace}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  {/* Contact & Session Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="+91 1234567890"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Session Type *
                      </label>
                      <select
                        name="sessionType"
                        required
                        value={formData.sessionType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="">Select a session type</option>
                        {sessionTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-mystic-800">
                            {type.label} - {type.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Preferred Mode *
                      </label>
                      <select
                        name="mode"
                        required
                        value={formData.mode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="">Select mode</option>
                        <option value="online" className="bg-mystic-800">Online (Zoom/Video Call)</option>
                        <option value="phone" className="bg-mystic-800">Phone Call</option>
                        <option value="offline" className="bg-mystic-800">In-Person (Los Angeles)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Preferred Time Slot *
                      </label>
                      <select
                        name="timeSlot"
                        required
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-mystic-800">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}

                  {/* Message */}
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm resize-none"
                      placeholder="Tell me about your current situation or specific questions you'd like to explore..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-accent-500/30 flex items-center justify-center"
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Book Session & Pay Securely
                    <Sparkles className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Session Types */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Star className="mr-2 h-6 w-6 text-accent-400" />
                Session Types
              </h3>
              <div className="space-y-4">
                {sessionTypes.map((type, index) => (
                  <div key={index} className="border-b border-white/10 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-medium">{type.label.split(' (')[0]}</p>
                        <p className="text-white/60 text-sm">{type.label.match(/\(([^)]+)\)/)?.[1]}</p>
                      </div>
                      <span className="text-accent-400 font-bold">{type.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent-400 mr-3" />
                  <span className="text-white/90">hello@mysticnumbers.com</span>
                </div>
                {/* <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent-400 mr-3" />
                  <span className="text-white/90">+1 (555) 123-MYSTIC</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent-400 mr-3" />
                  <span className="text-white/90">Los Angeles, CA (In-person sessions)</span>
                </div> */}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/80 text-sm">
                  <strong>WhatsApp:</strong> Available for quick questions and scheduling
                </p>
                <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Message on WhatsApp
                </button>
              </div>
            </div>

            {/* Payment Options */}
            {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Secure Payment</h3>
              <div className="space-y-3">
                <p className="text-white/90 text-sm">We accept:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs">PayPal</span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded text-xs">Stripe</span>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded text-xs">Razorpay</span>
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">UPI</span>
                </div>
                <p className="text-white/70 text-xs mt-4">
                  All payments are processed securely. You'll receive a confirmation email immediately after booking.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;