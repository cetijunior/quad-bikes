import React from "react";
import { Link } from "react-router-dom";
import {
    FaInstagram, FaFacebookF, FaTiktok, FaChevronRight,
    FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-16 pb-8 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-cyan-500/20">
                                <img src="/images/logo-motorent.jpg" alt="Moto Rent Bovilla" className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                Moto Rent Bovilla
                            </h2>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Explore Albania’s wild side with our guided ATV experiences. Scenic routes, thrilling rides, and a team that puts your safety and fun first.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg hover:translate-y-[-2px] transition-all duration-300"
                        >
                            Book Your Ride
                            <FaChevronRight className="text-xs" />
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-cyan-500/30 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { to: "/", text: "Home" },
                                { to: "/about", text: "About Us" },
                                // { to: "/booking", text: "Book Now" },
                                { to: "/gallery", text: "Gallery" },
                                { to: "/contact", text: "Contact" },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="text-gray-300 hover:text-cyan-400 transition-all flex items-center gap-2 group">
                                        <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyan-400" />
                                        <span>{link.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-cyan-500/30 pb-2 inline-block">Contact</h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-cyan-400">
                                    <FaPhone />
                                </div>
                                <a href="tel:+355685776981" className="hover:text-cyan-400">+355 68 577 6981</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-cyan-400">
                                    <FaEnvelope />
                                </div>
                                <a href="mailto:info@motorentbovilla.com" className="hover:text-cyan-400">info@motorentbovilla.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-cyan-400">
                                    <FaWhatsapp />
                                </div>
                                <a
                                    href="https://wa.me/355685776981"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-cyan-400"
                                >
                                    Chat on WhatsApp
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-cyan-400 mt-1">
                                    <FaMapMarkerAlt />
                                </div>
                                Zall Herr, Albania
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Socials */}
                    <div>
                        {/* <h3 className="text-lg font-semibold mb-6 border-b border-cyan-500/30 pb-2 inline-block">Stay Connected</h3>

                        <div className="mb-6">
                            <p className="text-sm text-gray-300 mb-3">Get ride offers & trail updates</p>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-blue-900/50 border border-blue-800 rounded-l-lg px-3 py-2 text-sm flex-grow focus:outline-none focus:ring-1 focus:ring-cyan-400"
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div> */}

                        <p className="text-sm text-gray-300 mb-3">Follow us</p>
                        <div className="flex space-x-4">
                            {[
                                { href: "https://www.instagram.com/motorent_bovilla/", Icon: FaInstagram, bg: "bg-gradient-to-br from-purple-600 to-pink-500" },
                                // { href: "https://facebook.com/motorentbovilla", Icon: FaFacebookF, bg: "bg-gradient-to-br from-blue-600 to-blue-800" },
                                { href: "https://www.tiktok.com/@motorent_bovilla", Icon: FaTiktok, bg: "bg-gradient-to-br from-gray-800 to-black" },
                            ].map(({ href, Icon, bg }, i) => (
                                <a key={i} href={href} target="_blank" rel="noreferrer"
                                    className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300`}
                                >
                                    <Icon className="text-white text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-blue-800/50 mt-12 pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>
                        © {new Date().getFullYear()} Moto Rent Bovilla. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-cyan-400">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="hover:text-cyan-400">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
