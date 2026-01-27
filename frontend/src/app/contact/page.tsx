"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Clock, Send, MessageSquare, 
  User, Building2, Sparkles, ArrowRight, CheckCircle,
  Instagram, Facebook, Linkedin, Twitter, Youtube,
  Globe, Award, Users, TrendingUp, Zap, Heart
} from 'lucide-react';
import { Navbar } from "@/components";
import Footer from "@/components/footer1";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "from-blue-500 to-cyan-500",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@spaceinnovate.com", "design@spaceinnovate.com"],
      color: "from-purple-500 to-pink-500",
      link: "mailto:info@spaceinnovate.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Design Street, Bangalore", "Karnataka, India - 560001"],
      color: "from-orange-500 to-red-500",
      link: "#"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 5:00 PM"],
      color: "from-green-500 to-teal-500",
      link: "#"
    }
  ];

  const services = [
    "Residential Design",
    "Commercial Design",
    "Retail & Hospitality",
    "Space Planning",
    "3D Visualization",
    "Consultation",
    "Turnkey Projects",
    "Other"
  ];

  const budgetRanges = [
    "Under ₹5 Lakhs",
    "₹5 - 10 Lakhs",
    "₹10 - 25 Lakhs",
    "₹25 - 50 Lakhs",
    "₹50 Lakhs - 1 Crore",
    "Above ₹1 Crore"
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", color: "hover:text-pink-500", link: "#" },
    { icon: Facebook, name: "Facebook", color: "hover:text-blue-600", link: "#" },
    { icon: Linkedin, name: "LinkedIn", color: "hover:text-blue-700", link: "#" },
    { icon: Twitter, name: "Twitter", color: "hover:text-sky-500", link: "#" },
    { icon: Youtube, name: "YouTube", color: "hover:text-red-600", link: "#" }
  ];

  const stats = [
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: TrendingUp, value: "15+", label: "Years Experience" },
    { icon: Heart, value: "98%", label: "Client Satisfaction" }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope, but most residential projects take 2-4 months from concept to completion."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a complimentary initial consultation to discuss your project and vision."
    },
    {
      question: "What is your design process?",
      answer: "We follow a 5-step process: Consultation, Concept Design, Design Development, Documentation, and Implementation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-6 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
            <Sparkles size={20} className="text-yellow-400 animate-pulse" />
            <span className="text-lg font-bold">24/7 Available for Your Queries</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
            Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">Connect</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 text-purple-200 max-w-4xl mx-auto font-light">
            Transform your space into something extraordinary. We're here to bring your vision to life.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
                <stat.icon size={32} className="mx-auto mb-3 text-yellow-400" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-3 mx-auto"
          >
            Get Started
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 -mt-32 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <info.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 rounded-full mb-6">
              <MessageSquare size={20} className="text-purple-600" />
              <span className="text-purple-600 font-bold">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Start Your Dream Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                {submitSuccess ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle size={48} className="text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully! 🎉</h3>
                    <p className="text-gray-600 text-lg">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Service Required *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none appearance-none bg-white"
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none appearance-none bg-white"
                      >
                        <option value="">Select your budget</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">15+ Years Experience</div>
                      <div className="text-sm text-purple-100">Industry-leading expertise</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">500+ Projects</div>
                      <div className="text-sm text-purple-100">Proven track record</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Award-Winning</div>
                      <div className="text-sm text-purple-100">Recognized excellence</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">24/7 Support</div>
                      <div className="text-sm text-purple-100">Always here for you</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Connect With Us</h3>
                <p className="text-gray-600 mb-6">Follow us on social media for inspiration</p>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Zap size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Quick Response</div>
                    <div className="text-sm text-gray-600">Within 24 hours</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  We value your time. Our team ensures prompt responses to all inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452026856!3d12.953959988118734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Ready to Get <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Started?</span>
          </h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
            Book a free consultation today and let's discuss how we can transform your space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-3">
              Schedule Call
              <Phone size={24} />
            </button>
            {/* <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-3">
              View Portfolio
              <ArrowRight size={24} />
            </button> */}
             <Link href="/portfolio" className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-3">
                                        View Portfolio
                                    </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}