'use client';
import { useState } from 'react';
import { X, Mail, User, Phone, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitSuccess(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitSuccess(false);
  };

  return (
    <>
      {/* Contact Section */}
      <section className="relative w-full py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-white mb-8" style={{
              fontSize: '70px',
              fontWeight: 500,
              lineHeight: '80px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Let's start your new<br />dream project
            </h2>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-4 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl transform transition-all animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {!submitSuccess ? (
                <>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2">Get in Touch</h3>
                  <p className="text-gray-600 mb-6">We'd love to hear about your project. Fill out the form below and we'll get back to you soon.</p>

                  <div className="space-y-5">
                    {/* Name Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us about your project..."
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}