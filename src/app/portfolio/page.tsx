"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
    Home, Building2, Store, Hotel, Coffee, Dumbbell,
    ArrowRight, Eye, Heart, Share2, Filter, Grid3x3,
    LayoutGrid, Search, MapPin, Calendar, Award,
    ChevronLeft, ChevronRight, X, ZoomIn, ExternalLink,
    Star, TrendingUp, Clock, Users, Sparkles, Play
} from 'lucide-react';

// Dynamic imports with no SSR
const Navbar = dynamic(() => import("@/components").then(mod => ({ default: mod.Navbar })), { ssr: false });
const Footer = dynamic(() => import("@/components/footer1"), { ssr: false });

interface Project {
    id: number;
    title: string;
    category: string;
    location: string;
    year: string;
    size: string;
    images: string[];
    tags: string[];
    likes: number;
    views: number;
    featured: boolean;
    trending: boolean;
    description: string;
    client: string;
    duration: string;
}

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [likedProjects, setLikedProjects] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');
    const [showFilters, setShowFilters] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [animateStats, setAnimateStats] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);
        setTimeout(() => setAnimateStats(true), 500);
    }, []);

    const categories = [
        { id: 'all', name: 'All Projects', icon: LayoutGrid, count: 12 },
        { id: 'residential', name: 'Residential', icon: Home, count: 4 },
        { id: 'commercial', name: 'Commercial', icon: Building2, count: 2 },
        { id: 'retail', name: 'Retail', icon: Store, count: 2 },
        { id: 'hospitality', name: 'Hospitality', icon: Hotel, count: 1 },
        { id: 'cafe', name: 'Café & Restaurant', icon: Coffee, count: 2 },
        { id: 'fitness', name: 'Fitness & Wellness', icon: Dumbbell, count: 1 }
    ];

    const projects: Project[] = [
        {
            id: 1,
            title: "Modern Luxury Apartment",
            category: "residential",
            location: "Mumbai, India",
            year: "2024",
            size: "2,500 sq ft",
            images: [
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
                "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
            ],
            tags: ["Modern", "Luxury", "Minimalist"],
            likes: 234,
            views: 1205,
            featured: true,
            trending: true,
            description: "A contemporary 3BHK apartment featuring clean lines, natural materials, and smart home integration.",
            client: "Private Residence",
            duration: "4 months"
        },
        {
            id: 2,
            title: "Corporate Office Redesign",
            category: "commercial",
            location: "Bangalore, India",
            year: "2024",
            size: "15,000 sq ft",
            images: [
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
            ],
            tags: ["Corporate", "Tech", "Open Plan"],
            likes: 189,
            views: 876,
            featured: true,
            trending: false,
            description: "Tech startup office with collaborative spaces and vibrant color palette.",
            client: "Tech Corp India",
            duration: "6 months"
        },
        {
            id: 3,
            title: "Boutique Fashion Store",
            category: "retail",
            location: "Delhi, India",
            year: "2023",
            size: "1,800 sq ft",
            images: [
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
            ],
            tags: ["Retail", "Fashion", "Elegant"],
            likes: 312,
            views: 1543,
            featured: false,
            trending: true,
            description: "High-end boutique with sophisticated lighting and custom display fixtures.",
            client: "Fashion House",
            duration: "3 months"
        },
        {
            id: 4,
            title: "Luxury Villa Interior",
            category: "residential",
            location: "Goa, India",
            year: "2024",
            size: "6,000 sq ft",
            images: [
                "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
            ],
            tags: ["Luxury", "Villa", "Coastal"],
            likes: 421,
            views: 2134,
            featured: true,
            trending: true,
            description: "Beachside villa combining contemporary design with tropical elements.",
            client: "Private Estate",
            duration: "8 months"
        },
        {
            id: 5,
            title: "Rooftop Restaurant",
            category: "cafe",
            location: "Pune, India",
            year: "2023",
            size: "3,500 sq ft",
            images: [
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
            ],
            tags: ["Restaurant", "Rooftop", "Modern"],
            likes: 267,
            views: 1432,
            featured: false,
            trending: false,
            description: "Upscale dining space with panoramic city views and ambient lighting.",
            client: "Skyline Restaurants",
            duration: "5 months"
        },
        {
            id: 6,
            title: "Boutique Hotel Suite",
            category: "hospitality",
            location: "Jaipur, India",
            year: "2024",
            size: "800 sq ft",
            images: [
                "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800"
            ],
            tags: ["Hotel", "Boutique", "Heritage"],
            likes: 345,
            views: 1876,
            featured: true,
            trending: false,
            description: "Heritage hotel suite blending Rajasthani architecture with modern luxury.",
            client: "Royal Hotels Group",
            duration: "4 months"
        },
        {
            id: 7,
            title: "Premium Fitness Center",
            category: "fitness",
            location: "Hyderabad, India",
            year: "2024",
            size: "8,000 sq ft",
            images: [
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
            ],
            tags: ["Fitness", "Wellness", "Modern"],
            likes: 198,
            views: 943,
            featured: false,
            trending: true,
            description: "State-of-the-art gym with dedicated zones for cardio, strength, and yoga.",
            client: "FitLife Studios",
            duration: "5 months"
        },
        {
            id: 8,
            title: "Minimalist Studio Apartment",
            category: "residential",
            location: "Mumbai, India",
            year: "2023",
            size: "650 sq ft",
            images: [
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
            ],
            tags: ["Minimalist", "Studio", "Compact"],
            likes: 276,
            views: 1234,
            featured: false,
            trending: false,
            description: "Smart storage solutions and multi-functional furniture in a compact space.",
            client: "Urban Living Co.",
            duration: "2 months"
        },
        {
            id: 9,
            title: "Tech Startup Office",
            category: "commercial",
            location: "Bangalore, India",
            year: "2024",
            size: "12,000 sq ft",
            images: [
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
            ],
            tags: ["Tech", "Startup", "Collaborative"],
            likes: 223,
            views: 1098,
            featured: false,
            trending: false,
            description: "Dynamic workspace with breakout zones and gaming areas.",
            client: "InnoTech Solutions",
            duration: "4 months"
        },
        {
            id: 10,
            title: "Artisan Coffee House",
            category: "cafe",
            location: "Chennai, India",
            year: "2023",
            size: "1,200 sq ft",
            images: [
                "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800"
            ],
            tags: ["Café", "Artisan", "Cozy"],
            likes: 312,
            views: 1654,
            featured: false,
            trending: true,
            description: "Warm, inviting café with exposed brick and custom woodwork.",
            client: "Bean & Brew",
            duration: "3 months"
        },
        {
            id: 11,
            title: "Luxury Penthouse",
            category: "residential",
            location: "Delhi, India",
            year: "2024",
            size: "4,500 sq ft",
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
            ],
            tags: ["Penthouse", "Luxury", "Contemporary"],
            likes: 489,
            views: 2543,
            featured: true,
            trending: true,
            description: "Sky-high luxury with floor-to-ceiling windows and premium finishes.",
            client: "Elite Residences",
            duration: "7 months"
        },
        {
            id: 12,
            title: "Designer Jewelry Store",
            category: "retail",
            location: "Mumbai, India",
            year: "2023",
            size: "2,200 sq ft",
            images: [
                "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=800"
            ],
            tags: ["Jewelry", "Luxury", "Elegant"],
            likes: 267,
            views: 1432,
            featured: false,
            trending: false,
            description: "Sophisticated retail space with custom display cases and accent lighting.",
            client: "Gemstone Gallery",
            duration: "4 months"
        }
    ];

    const filteredProjects = projects
        .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
        .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
        .sort((a, b) => {
            if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
            if (sortBy === 'likes') return b.likes - a.likes;
            if (sortBy === 'views') return b.views - a.views;
            if (sortBy === 'recent') return b.year.localeCompare(a.year);
            return 0;
        });

    const toggleLike = (projectId: number) => {
        setLikedProjects(prev =>
            prev.includes(projectId)
                ? prev.filter(id => id !== projectId)
                : [...prev, projectId]
        );
    };

    const StatCounter = ({ end, duration, suffix = "" }: { end: number; duration: number; suffix?: string }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!animateStats) return;
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }, [end, duration, animateStats]);

        return <span>{count}{suffix}</span>;
    };

    const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
        const nextImage = () => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        };

        const prevImage = () => {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        };

        return (
            <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
                <div className="max-w-7xl w-full bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden shadow-2xl animate-slideUp" onClick={(e) => e.stopPropagation()}>
                    <div className="relative h-[65vh]">
                        <img src={project.images[currentImageIndex]} alt={project.title} className="w-full h-full object-cover" />

                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
                                >
                                    <ChevronRight size={24} />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {project.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:rotate-90 shadow-lg"
                        >
                            <X size={24} />
                        </button>

                        <div className="absolute top-4 left-4 flex gap-2">
                            {project.featured && (
                                <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full font-bold flex items-center gap-2 shadow-lg">
                                    <Award size={18} />
                                    Featured
                                </div>
                            )}
                            {project.trending && (
                                <div className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold flex items-center gap-2 shadow-lg">
                                    <TrendingUp size={18} />
                                    Trending
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-8 max-h-[35vh] overflow-y-auto">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex-1">
                                <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    {project.title}
                                </h2>
                                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full">
                                        <MapPin size={18} className="text-purple-600" />
                                        {project.location}
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full">
                                        <Calendar size={18} className="text-blue-600" />
                                        {project.year}
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                                        <LayoutGrid size={18} className="text-green-600" />
                                        {project.size}
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full">
                                        <Clock size={18} className="text-orange-600" />
                                        {project.duration}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => toggleLike(project.id)}
                                    className="w-14 h-14 bg-gradient-to-br from-red-50 to-pink-50 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg border-2 border-red-200"
                                >
                                    <Heart size={22} className={likedProjects.includes(project.id) ? "fill-red-500 text-red-500" : "text-red-400"} />
                                </button>
                                <button className="w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg border-2 border-blue-200">
                                    <Share2 size={22} className="text-blue-600" />
                                </button>
                                <button className="w-14 h-14 bg-gradient-to-br from-green-50 to-teal-50 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg border-2 border-green-200">
                                    <ExternalLink size={22} className="text-green-600" />
                                </button>
                            </div>
                        </div>

                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{project.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
                            <div className="flex items-center gap-3">
                                <Users size={20} className="text-purple-600" />
                                <div>
                                    <div className="text-xs text-gray-600">Client</div>
                                    <div className="font-semibold text-gray-900">{project.client}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={20} className="text-blue-600" />
                                <div>
                                    <div className="text-xs text-gray-600">Duration</div>
                                    <div className="font-semibold text-gray-900">{project.duration}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-gray-600 px-4 py-2 bg-gray-100 rounded-full">
                                <Eye size={20} />
                                <span className="font-semibold">{project.views.toLocaleString()}</span>
                                <span className="text-sm">views</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 px-4 py-2 bg-gray-100 rounded-full">
                                <Heart size={20} className={likedProjects.includes(project.id) ? "fill-red-500 text-red-500" : ""} />
                                <span className="font-semibold">{project.likes + (likedProjects.includes(project.id) ? 1 : 0)}</span>
                                <span className="text-sm">likes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900"></div>

                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 mb-6 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
                        <Sparkles size={20} className="text-yellow-400 animate-pulse" />
                        <span className="text-lg font-bold"><StatCounter end={500} duration={2000} suffix="+" /> Completed Projects</span>
                    </div>

                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">Portfolio</span>
                    </h1>

                    <p className="text-2xl md:text-3xl mb-12 text-purple-200 max-w-4xl mx-auto font-light">
                        Discover extraordinary spaces where imagination meets innovation
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
                        <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl border border-yellow-400/30 shadow-xl hover:scale-105 transition-transform">
                            <Award size={24} className="text-yellow-400" />
                            <div className="text-left">
                                <div className="text-sm text-yellow-200">Design Awards</div>
                                <div className="text-2xl font-bold"><StatCounter end={15} duration={2000} suffix="+" /></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-xl hover:scale-105 transition-transform">
                            <Eye size={24} className="text-blue-400" />
                            <div className="text-left">
                                <div className="text-sm text-blue-200">Total Views</div>
                                <div className="text-2xl font-bold"><StatCounter end={1} duration={2000} />M+</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-red-400/30 shadow-xl hover:scale-105 transition-transform">
                            <Heart size={24} className="text-red-400" />
                            <div className="text-left">
                                <div className="text-sm text-red-200">Total Likes</div>
                                <div className="text-2xl font-bold"><StatCounter end={50} duration={2000} />K+</div>
                            </div>
                        </div>
                    </div>

                    <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-3 mx-auto">
                        Explore Projects
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

            {/* Search and Filter Section */}
            <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    {/* Search Bar */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search projects by name, location, or tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:bg-white transition-all outline-none text-lg"
                            />
                        </div>
                        <div className="flex gap-2">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-purple-500 outline-none font-semibold cursor-pointer hover:bg-gray-100 transition-all"
                            >
                                <option value="featured">Featured First</option>
                                <option value="likes">Most Liked</option>
                                <option value="views">Most Viewed</option>
                                <option value="recent">Most Recent</option>
                            </select>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                            >
                                <Filter size={20} />
                                Filters
                            </button>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                                }`}
                            >
                                <category.icon size={20} />
                                {category.name}
                                <span className={`px-2 py-1 rounded-full text-xs ${selectedCategory === category.id ? 'bg-white/20' : 'bg-purple-100 text-purple-800'
                                    }`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-gray-600">
                            Showing <span className="font-bold text-purple-600 text-xl">{filteredProjects.length}</span> projects
                            {selectedCategory !== 'all' && (
                                <span> in <span className="font-bold text-purple-600">
                                    {categories.find(c => c.id === selectedCategory)?.name}
                                </span></span>
                            )}
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <Grid3x3 size={22} />
                            </button>
                            <button
                                onClick={() => setViewMode('masonry')}
                                className={`p-3 rounded-xl transition-all ${viewMode === 'masonry' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <LayoutGrid size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <div className="flex gap-2 mb-3 flex-wrap">
                                                    {project.tags.slice(0, 3).map((tag, idx) => (
                                                        <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-bold">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-4 text-white/90 text-sm">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {project.location}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {project.year}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            {project.featured && (
                                                <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full text-xs font-black flex items-center gap-1 shadow-lg animate-pulse">
                                                    <Award size={14} />
                                                    Featured
                                                </div>
                                            )}
                                            {project.trending && (
                                                <div className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                                                    <TrendingUp size={14} />
                                                    Trending
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={() => toggleLike(project.id)}
                                                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
                                            >
                                                <Heart
                                                    size={20}
                                                    className={likedProjects.includes(project.id) ? "fill-red-500 text-red-500" : "text-gray-700"}
                                                />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedProject(project);
                                                    setCurrentImageIndex(0);
                                                }}
                                                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
                                            >
                                                <ZoomIn size={20} className="text-gray-700" />
                                            </button>
                                        </div>

                                        {/* Image Count Indicator */}
                                        {project.images.length > 1 && (
                                            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-xs font-bold flex items-center gap-1">
                                                <Play size={12} />
                                                {project.images.length} photos
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-4 text-sm">
                                                <div className="flex items-center gap-1 text-gray-500">
                                                    <Eye size={16} />
                                                    <span className="font-semibold">{project.views}</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-500">
                                                    <Heart size={16} className={likedProjects.includes(project.id) ? "fill-red-500 text-red-500" : ""} />
                                                    <span className="font-semibold">{project.likes + (likedProjects.includes(project.id) ? 1 : 0)}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setSelectedProject(project);
                                                    setCurrentImageIndex(0);
                                                }}
                                                className="text-purple-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all group/btn"
                                            >
                                                View Details
                                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="break-inside-avoid group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            {project.featured && (
                                                <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                                                    <Award size={14} />
                                                    Featured
                                                </div>
                                            )}
                                            {project.trending && (
                                                <div className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                                                    <TrendingUp size={14} />
                                                    Trending
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={() => toggleLike(project.id)}
                                                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                                            >
                                                <Heart
                                                    size={20}
                                                    className={likedProjects.includes(project.id) ? "fill-red-500 text-red-500" : "text-gray-700"}
                                                />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedProject(project);
                                                    setCurrentImageIndex(0);
                                                }}
                                                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                                            >
                                                <ZoomIn size={20} className="text-gray-700" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-xs font-bold">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-4 text-sm">
                                                <div className="flex items-center gap-1 text-gray-500">
                                                    <Eye size={16} />
                                                    {project.views}
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-500">
                                                    <Heart size={16} />
                                                    {project.likes}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setSelectedProject(project);
                                                    setCurrentImageIndex(0);
                                                }}
                                                className="text-purple-600 font-bold text-sm flex items-center gap-1"
                                            >
                                                Details <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search size={48} className="text-purple-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">No projects found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                }}
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold hover:shadow-lg transition-all"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <Award size={40} className="text-white" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
                        Ready to Create Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Dream Space?</span>
                    </h2>
                    <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
                        Let's transform your vision into reality. Our award-winning team is ready to bring your project to life.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-3">
                            Start Your Project
                            <ArrowRight size={24} />
                        </button>
                        <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}

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
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                @keyframes slideUp {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slideUp {
                    animation: slideUp 0.4s ease-out;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            </div>
            <Footer />
        </>
    );
}