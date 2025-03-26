import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    FaMapMarkerAlt
} from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const navLinks = [
        { to: "/", text: t("navbar.home"), icon: <FaHome /> },
        { to: "/booking", text: t("navbar.booking"), icon: <FaCalendarAlt /> },
        { to: "/about", text: t("navbar.about"), icon: <FaInfoCircle /> },
        { to: "/gallery", text: t("navbar.gallery"), icon: <FaImages /> },
        { to: "/contact", text: t("navbar.contact"), icon: <FaEnvelope /> },
    ];

    return (
        <nav className="bg-white text-gray-900 py-4 px-6 md:px-12 fixed w-full top-0 z-50 shadow-lg">
            <div className="mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase text-orange-500 hover:text-orange-400 transition-colors duration-200">
                        Bovilla Quads
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center  text-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            <span className="text-xl">{link.icon}</span>
                            <span>{link.text}</span>
                        </Link>
                    ))}
                    <LanguageSwitcher />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-orange-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <div
                className={`md:hidden fixed top-16 right-0 h-screen w-full bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full p-4 space-y-2 text-lg overflow-y-auto">
                    {/* Navigation Links */}
                    <div className="space-y-4 border border-orange-200 rounded-xl p-4 bg-white shadow">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 text-gray-800 hover:text-orange-500 transition-colors duration-200 text-xl font-medium"
                            >
                                <span className="text-2xl">{link.icon}</span>
                                <span>{link.text}</span>
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="w-full flex justify-start ">
                            <div className="border border-orange-300 scale-75 rounded-full -ml-4 px-6 py-1">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 border border-orange-300 rounded-xl p-4 bg-orange-50 shadow text-gray-800">
                        <h3 className="text-xl font-bold text-orange-500 mb-2">Contact</h3>

                        <div className="space-y-3">
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-full bg-orange-100 text-orange-600 text-xl">
                                    <FaPhone />
                                </div>
                                <a href="tel:+355694445555" className="font-medium hover:text-orange-600">
                                    +355 69 444 5555
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-full bg-green-100 text-green-600 text-xl">
                                    <FaWhatsapp />
                                </div>
                                <a
                                    href="https://wa.me/355694445555"
                                    className="font-medium hover:text-green-600"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    WhatsApp
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-full bg-orange-100 text-orange-600 text-xl">
                                    <FaEnvelope />
                                </div>
                                <a href="mailto:info@bovillaquads.com" className="font-medium hover:text-orange-600">
                                    info@bovillaquads.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-full bg-orange-100 text-orange-600 text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <span className="font-medium">Zall Herr, Albania</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
}
