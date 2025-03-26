import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-orange-500 text-black py-12 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Logo & Tagline */}
                    <div className="space-y-4">
                        <h2 className="text-white text-3xl font-extrabold tracking-tight uppercase">
                            Bovilla Quads
                        </h2>
                        <p className="text-white text-sm leading-relaxed max-w-xs">
                            Unleash the ride. Discover Bovilla's wild beauty.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 uppercase tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { to: "/", text: "Home" },
                                { to: "/booking", text: "Book Now" },
                                { to: "/gallery", text: "Gallery" },
                                { to: "/reviews", text: "Reviews" },
                                { to: "/contact", text: "Contact" },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-black hover:text-white transition-colors duration-200 ease-in-out"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 uppercase tracking-wide">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-black text-sm">

                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a
                                    href="tel:+355694445555"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    +355 69 444 5555
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>✉️</span>
                                <a
                                    href="mailto:info@bovillaquads.com"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    info@bovillaquads.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>💬</span>
                                <a
                                    href="https://wa.me/355694445555"
                                    className="hover:text-white transition-colors duration-200"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    WhatsApp Us
                                </a>
                            </li>
                            <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                                <span>📍</span> Zall Herr, Bovilla, Albania
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 uppercase tracking-wide">
                            Follow Us
                        </h3>
                        <div className="flex space-x-6 text-black">
                            {[
                                { href: "https://instagram.com", Icon: FaInstagram },
                                { href: "https://facebook.com", Icon: FaFacebookF },
                                { href: "https://tiktok.com", Icon: FaTiktok },
                            ].map(({ href, Icon }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transform hover:scale-110 transition-all duration-200 hover:text-white"
                                >
                                    <Icon className="text-2xl" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-orange-300 mt-12 pt-6 text-center">
                    <p className="text-black text-sm">
                        © {new Date().getFullYear()} Bovilla Quads. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
