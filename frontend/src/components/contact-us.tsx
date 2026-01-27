'use client';
import { useState } from 'react';
import { X, Mail, User, Phone, MessageSquare } from 'lucide-react';
import { contactService } from '@/services/contactService';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await contactService.submitContact(formData);
      
      if (response.success) {
        setSubmitSuccess(true);
        
        // Reset form after 2 seconds
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitSuccess(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 2000);
      }
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitSuccess(false);
  };

  return (
    <>
      {/* Contact Section */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden">
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
            <h2 className="text-white mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium leading-tight sm:leading-tight md:leading-tight lg:leading-[80px]"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Let's start your new<br />dream project
            </h2>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-70 backdrop-blur-md overflow-y-auto">
          {/* Modal Container - Scrollable wrapper */}
          <div className="relative w-full max-w-4xl my-auto">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl transform transition-all animate-fadeIn overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col md:flex-row">
              
              {/* Decorative Side Panel - Hidden on mobile and small heights */}
              <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative flex-shrink-0">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div className="relative h-full flex flex-col justify-center p-6 lg:p-10 text-gray-800">
                  <h4 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Transform Your Space</h4>
                  <p className="text-base lg:text-lg mb-4 lg:mb-6 opacity-90">Let's bring your interior design vision to life with our expert team.</p>
                  <div className="space-y-2 lg:space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                        </svg>
                      </div>
                      <span className="font-medium text-sm lg:text-base">Expert Designers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-medium text-sm lg:text-base">Quality Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-medium text-sm lg:text-base">Timely Delivery</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all z-10"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
                {!submitSuccess ? (
                  <>
                    <div className="mb-4 sm:mb-6 lg:mb-8 pr-8">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Start Your Journey</h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Share your vision with us and let's create something extraordinary together.</p>
                    </div>

                    <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                      {/* Name Input */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4 sm:w-5 sm:h-5" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all hover:border-gray-300"
                          />
                        </div>
                      </div>

                      {/* Email & Phone - Side by side on larger screens */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {/* Email Input */}
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4 sm:w-5 sm:h-5" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all hover:border-gray-300"
                            />
                          </div>
                        </div>

                        {/* Phone Input */}
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4 sm:w-5 sm:h-5" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+1 (555) 000-0000"
                              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all hover:border-gray-300"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message Input */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                          Your Message *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 sm:left-4 top-3 sm:top-4 text-amber-600 w-4 h-4 sm:w-5 sm:h-5" />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="Tell us about your dream space..."
                            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none hover:border-gray-300"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                        className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-amber-700 hover:to-orange-700 focus:ring-4 focus:ring-amber-300 transition-all transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
                          'Start Your Project'
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 sm:py-12">
                    <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">We've Received Your Message!</h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Our design team will review your project and reach out within 24 hours.</p>
                  </div>
                )}
              </div>
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