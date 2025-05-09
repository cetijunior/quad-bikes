import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaCalendarAlt,
    FaInfoCircle,
    FaImages,
    FaEnvelope,
    FaPhone,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaTiktok
} from "react-icons/fa";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = [
        { to: "/", text: ("Home"), icon: <FaHome /> },
        // { to: "/booking", text: ("Booking"), icon: <FaCalendarAlt /> },
        { to: "/about", text: ("About"), icon: <FaInfoCircle /> },
        { to: "/gallery", text: ("Gallery"), icon: <FaImages /> },
        { to: "/contact", text: ("Contact"), icon: <FaEnvelope /> },
    ];

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <nav
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
                    ? "py-2 bg-blue-950/20 backdrop-blur-3xl  shadow-lg "
                    : "py-3 bg-transparent  shadow-md"
                    }`}
            >
                <div className="mx-auto flex justify-between items-center md:px-10 px-4">
                    {/* Logo */}
                    <Link
                        onClick={scrollToTop}
                        className="flex items-center space-x-3"
                        to="/"
                    >
                        <div className="w-14 h-10 md:w-14 md:h-14 rounded-2xl md:rounded-full overflow-hidden shadow-md">
                            <img
                                src="/images/logo-motorent.jpg"
                                alt="Moto Rent Bovilla"
                                className="w-full h-full object-cover transition-transform hover:animate-spin duration-300"
                            />
                        </div>
                        <h1 className="text-lg md:text-3xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text hover:from-blue-600 hover:to-cyan-500 transition duration-500">
                            Moto <span className="md:hidden sm:visible" >Rent</span> Bovilla
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center text-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={scrollToTop}
                                className={`flex items-center space-x-2 px-4 py-2 transition-colors duration-200 relative ${isActiveLink(link.to)
                                    ? " text-cyan-500 after:scale-x-100"
                                    : `${scrolled
                                        ? "text-white"
                                        : "text-white"
                                    } text-gray-700 hover:text-cyan-500 after:scale-x-0 hover:after:scale-x-100`
                                    } after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-cyan-500 after:bottom-0 after:left-0 after:origin-left after:transition-transform after:duration-300`}
                            >
                                <span className="text-xl">{link.icon}</span>
                                <span>{link.text}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>






            {/* Mobile Drawer with Overlay */}
            <div className={`fixed inset-0 z-40 lg:hidden ${isOpen ? "block" : "hidden"}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Mobile Menu Panel */}
                <div
                    className={`fixed top-0 right-0 w-full h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out 
                        ${isOpen ? "translate-x-0 mt-16" : " translate-x-full"} overflow-y-auto flex flex-col`}
                >

                    {/* Menu Content */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {/* Navigation Links */}
                        <div className="rounded-2xl bg-gray-50 p-4 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 px-2 text-cyan-600">Navigation</h3>

                            <div className="space-y-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActiveLink(link.to)
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md"
                                            : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <span className="text-xl">{link.icon}</span>
                                        <span>{link.text}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="relative rounded-xl overflow-hidden p-4 shadow-sm border-4 border-cyan-500 text-center bg-white/80">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src="/rides/I4.jpg"
                                        alt="Viator Background"
                                        className="w-full h-full object-cover opacity-100 blur-xs"
                                    />
                                    <div className="absolute inset-0 bg-white/80" />
                                </div>

                                {/* Foreground Content */}
                                <div className="relative z-10">
                                    <p className="text-md font-semibold text-gray-800 mb-2">Prefer to book with Viator?</p>
                                    <a
                                        href="https://www.viator.com/search/5569821P2?mcid=64243"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-2 rounded-full text-sm transition"
                                    >
                                        Book on Viator
                                    </a>
                                </div>
                            </div>


                        </div>

                        {/* Contact Section */}
                        <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-4 shadow-sm border border-blue-100">
                            <h3 className="font-bold text-lg mb-4 px-2 text-cyan-600">Contact Us</h3>

                            <div className="space-y-4">
                                <a
                                    href="tel:+355685776981"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                                        <FaPhone />
                                    </div>
                                    <span className="font-medium text-gray-800">+355 68 577 6981</span>
                                </a>

                                <a
                                    href="https://wa.me/355685776981"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-sm hover:shadow-md transition-all duration-200"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <FaWhatsapp />
                                    </div>
                                    <span className="font-medium text-gray-800">WhatsApp</span>
                                </a>

                                <a
                                    href="https://maps.app.goo.gl/r3G6PzzQrbDwQZu36"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <span className="font-medium text-gray-800">Moto Rent Bovilla</span>
                                </a>
                            </div>
                        </div>


                        {/* Social Media */}
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.instagram.com/motorent_bovilla/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.tiktok.com/@motorent_bovilla"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-xl text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                            >
                                <FaTiktok />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

