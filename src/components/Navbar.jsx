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
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram
} from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const navLinks = [
        { to: "/", text: t("navbar.home"), icon: <FaHome /> },
        { to: "/booking", text: t("navbar.booking"), icon: <FaCalendarAlt /> },
        { to: "/about", text: t("navbar.about"), icon: <FaInfoCircle /> },
        { to: "/gallery", text: t("navbar.gallery"), icon: <FaImages /> },
        { to: "/contact", text: t("navbar.contact"), icon: <FaEnvelope /> },
    ];

    return (
        <nav className="bg-white text-gray-900 py-3 px-2 md:px-12 fixed w-full top-0 z-50 shadow-lg">
            <div className="mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link onClick={scrollToTop} className="flex flex-row items-center space-x-2" to="/">
                    <h1 className="text-2xl ml-2 md:text-3xl font-extrabold tracking-wider uppercase text-orange-500 hover:text-orange-400 transition-colors duration-200">
                        Bovilla Quads
                    </h1>
                    <img src="/images/quad.png" className="invisible md:visible size-12" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center text-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={scrollToTop}
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
                    className="lg:hidden text-2xl mr-6 text-orange-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile & MD Drawer Menu */}
            <div
                className={`lg:hidden border-t-2 border-orange-500 fixed top-16 right-0 w-full md:max-w-xl bg-white z-50 transform transition-transform duration-500 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    h-[100dvh] overflow-y-auto pb-[env(safe-area-inset-bottom)]`}
            >
                <div className="flex flex-col h-fit p-4 gap-4 text-lg">
                    {/* Left Side: Navigation */}
                    <div className="flex-1 space-y-4 border border-orange-200 rounded-xl p-4 bg-white shadow-md">
                        <h3 className="text-xl font-bold text-orange-500 mb-2">Menu</h3>
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

                        <div className="w-full flex justify-start pt-4">
                            <div className="border-2 border-orange-300 -ml-2 rounded-full px-6 py-1">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Info & Socials */}
                    <div className="flex-1 border border-orange-300 rounded-xl p-4 bg-orange-50 shadow-md space-y-4 text-gray-800">
                        <h3 className="text-xl font-bold text-orange-500 mb-2">Contact Us</h3>

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

                        <div className="flex space-x-4 pt-2 text-2xl text-orange-500">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
