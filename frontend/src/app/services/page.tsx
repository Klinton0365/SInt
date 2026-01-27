"use client";
// import { useState } from 'react';
import Link from 'next/link';
import { X, Mail, User, Phone, MessageSquare } from 'lucide-react';
import { contactService } from '@/services/contactService';
import React, { useState, useEffect } from 'react';
import {
    Home, Building2, Store, Palette, Ruler, Lightbulb,
    CheckCircle2, Clock, Award, Users, ArrowRight,
    Sparkles, Package, Hammer, Shield, Star, Quote
} from 'lucide-react';

import { Navbar } from "@/components";
import Footer from "@/components/footer1";

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Contact Modal States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Form handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);
        try {
            const response = await contactService.submitContact(formData);
            if (response.success) {
                setSubmitSuccess(true);
                setTimeout(() => {
                    setIsModalOpen(false);
                    setSubmitSuccess(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                }, 2000);
            }
        } catch (error) {
            console.error('Failed to submit:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
    };

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        setTimeout(() => setIsVisible(true), 300);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            icon: Home,
            title: "Residential Design",
            tagline: "Transform Your Living Space",
            description: "Create the home of your dreams with our comprehensive residential design services. From modern apartments to luxury villas.",
            features: ["Space Planning", "Custom Furniture", "Lighting Design", "Color Consultation"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Building2,
            title: "Commercial Interiors",
            tagline: "Elevate Your Business Space",
            description: "Design workspaces that inspire productivity and reflect your brand identity. Perfect for offices, hotels, and corporate spaces.",
            features: ["Office Design", "Brand Integration", "Ergonomic Solutions", "Reception Areas"],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Store,
            title: "Retail Design",
            tagline: "Create Shopping Experiences",
            description: "Craft retail environments that captivate customers and drive sales through strategic design and layout optimization.",
            features: ["Store Layouts", "Display Design", "Customer Flow", "Brand Storytelling"],
            color: "from-orange-500 to-red-500"
        },
        {
            icon: Palette,
            title: "Renovation & Remodeling",
            tagline: "Reimagine Your Space",
            description: "Breathe new life into existing spaces with our expert renovation services. We handle everything from concept to completion.",
            features: ["Full Renovations", "Kitchen Remodeling", "Bathroom Upgrades", "Heritage Restoration"],
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Ruler,
            title: "Space Planning",
            tagline: "Optimize Every Square Foot",
            description: "Maximize functionality and flow with intelligent space planning that makes the most of your available area.",
            features: ["Layout Optimization", "Traffic Flow", "Furniture Placement", "Multi-functional Spaces"],
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: Lightbulb,
            title: "Lighting Design",
            tagline: "Illuminate Your Vision",
            description: "Create ambiance and functionality with expertly designed lighting schemes that enhance every aspect of your space.",
            features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Controls"],
            color: "from-yellow-500 to-orange-500"
        }
    ];

    const process = [
        {
            step: "01",
            title: "Consultation",
            description: "We start by understanding your vision, requirements, and budget through detailed discussions."
        },
        {
            step: "02",
            title: "Concept Design",
            description: "Our team creates initial concepts with mood boards, sketches, and 3D visualizations."
        },
        {
            step: "03",
            title: "Development",
            description: "We refine the design, select materials, and prepare detailed drawings and specifications."
        },
        {
            step: "04",
            title: "Execution",
            description: "Our project managers oversee implementation, ensuring quality and timeline adherence."
        },
        {
            step: "05",
            title: "Handover",
            description: "Final walkthrough, adjustments, and delivery of your beautifully transformed space."
        }
    ];

    const benefits = [
        {
            icon: Award,
            title: "Award-Winning Team",
            description: "Recognized designers with 15+ years of experience"
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description: "98% of projects completed on or before deadline"
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "Premium materials and certified contractors only"
        },
        {
            icon: Users,
            title: "Dedicated Support",
            description: "Single point of contact throughout your project"
        },
        {
            icon: Package,
            title: "Turnkey Solutions",
            description: "End-to-end service from design to installation"
        },
        {
            icon: Star,
            title: "Client Satisfaction",
            description: "500+ happy clients with 98% satisfaction rate"
        }
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Homeowner",
            content: "Subhash Interior transformed our apartment into a stunning modern home. Their attention to detail is incredible!",
            rating: 5
        },
        {
            name: "Rajesh Mehta",
            role: "Business Owner",
            content: "Our office redesign has boosted team morale and productivity. Best investment we've made!",
            rating: 5
        },
        {
            name: "Anita Patel",
            role: "Restaurant Owner",
            content: "The restaurant design exceeded our expectations. Our customers love the ambiance!",
            rating: 5
        }
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section with Parallax */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        transform: `translateY(${scrollY * 0.3}px)`
                    }}
                ></div>

                <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="text-sm font-medium">✨ Premium Design Services</span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                        Our Services
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                        Comprehensive interior design solutions tailored to your unique vision and lifestyle
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/portfolio" className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-50 transition-all hover:scale-105 flex items-center gap-2">
                            View Our Work <ArrowRight size={20} />
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
                        >
                            Get Free Consultation
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white/60 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                            What We Offer
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Design Services</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From concept to completion, we offer comprehensive solutions for every space
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 overflow-hidden"
                                onMouseEnter={() => setActiveService(index)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon size={32} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                                <p className="text-sm text-purple-600 font-semibold mb-4">{service.tagline}</p>
                                <p className="text-gray-600 mb-6">{service.description}</p>

                                <div className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle2 size={18} className={`bg-gradient-to-br ${service.color} bg-clip-text text-transparent flex-shrink-0`} />
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-3 bg-gray-900 text-white rounded-full font-semibold group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all flex items-center justify-center gap-2">
                                    Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-white text-purple-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
                            How We Work
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Design Process</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A streamlined approach that brings your vision to life, step by step
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 -translate-y-1/2"></div>

                        <div className="grid md:grid-cols-5 gap-8 relative">
                            {process.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-purple-100">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-center text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-600 text-center">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                            Why Choose Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">The Subhash Advantage</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experience the difference of working with India's leading interior design firm
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-purple-50 hover:to-blue-50 transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:shadow-lg group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <benefit.icon size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/20">
                            Client Stories
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
                        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                            Real experiences from real clients who trusted us with their spaces
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
                            >
                                <Quote size={40} className="text-purple-400 mb-4" />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-white/90 mb-6 italic">"{testimonial.content}"</p>
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-purple-300 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-white from-slate-50 via-purple-50 to-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <Sparkles size={48} className="mx-auto mb-6 animate-pulse text-purple-600" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Transform Your Space?</h2>
                    <p className="text-xl mb-8 text-gray-700">
                        Let's bring your vision to life. Schedule a free consultation with our design experts today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 flex items-center gap-2 shadow-xl"
                        >
                            Get Started Now <ArrowRight size={20} />
                        </button>
                        <Link href="/portfolio" className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all shadow-lg">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>
            {/* Contact Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-70 backdrop-blur-md overflow-y-auto">
                    <div className="relative w-full max-w-4xl my-auto">
                        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col md:flex-row animate-fadeIn">

                            {/* Decorative Side Panel */}
                            <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 relative flex-shrink-0">
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
                                                <Award className="w-4 h-4 lg:w-5 lg:h-5 text-purple-700" />
                                            </div>
                                            <span className="font-medium text-sm lg:text-base">Expert Designers</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-purple-700" />
                                            </div>
                                            <span className="font-medium text-sm lg:text-base">Quality Guarantee</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-purple-700" />
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

                            {/* Modal Content */}
                            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
                                {!submitSuccess ? (
                                    <>
                                        <div className="mb-4 sm:mb-6 lg:mb-8 pr-8">
                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Start Your Journey</h3>
                                            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Share your vision with us and let's create something extraordinary together.</p>
                                        </div>

                                        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                                            <div>
                                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Your Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder="John Doe"
                                                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all hover:border-gray-300"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                <div>
                                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Email Address *</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            placeholder="john@example.com"
                                                            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all hover:border-gray-300"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Phone Number</label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            placeholder="+1 (555) 000-0000"
                                                            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all hover:border-gray-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Your Message *</label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-3 sm:left-4 top-3 sm:top-4 text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        rows={3}
                                                        placeholder="Tell us about your dream space..."
                                                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all resize-none hover:border-gray-300"
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleSubmit}
                                                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                                                className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:ring-purple-300 transition-all transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center">
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : 'Start Your Project'}
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-8 sm:py-12">
                                        <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full">
                                            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Message Received!</h3>
                                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Our team will reach out within 24 hours.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }
    .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
`}</style>

            <Footer />

        </>
    );
}