import React from "react";
import { motion } from "framer-motion";
import {
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaQuoteRight,
    FaRoute,
    FaMotorcycle
} from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function Contact() {
    return (
        <div className="relative bg-gray-950 min-h-screen pt-24 pb-12 text-gray-300">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-cyan-500 filter blur-3xl"></div>
                <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-blue-600 filter blur-3xl"></div>
            </div>

            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {/* Header */}
                <motion.div variants={fadeInUp} className="mb-16 text-center">
                    <div className="flex justify-center mb-4">
                        <FaMotorcycle className="text-cyan-500 text-4xl" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-500 mb-3 tracking-tight">
                        CONTACT US
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Ready for an adventure? Reach out to Moto Rent Bovilla today.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Contact Info + Form */}
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-2 space-y-10"
                    >
                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 hover:shadow-cyan-900/30 hover:shadow-lg transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <FaPhone className="text-cyan-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300">Call Us</p>
                                        <a
                                            href="tel:+355694445555"
                                            className="text-xl font-bold text-white hover:text-cyan-400 transition"
                                        >
                                            +355 69 444 5555
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 hover:shadow-cyan-900/30 hover:shadow-lg transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <FaEnvelope className="text-cyan-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300">Email Us</p>
                                        <a
                                            href="mailto:info@motorentbovilla.com"
                                            className="text-xl font-bold text-white hover:text-cyan-400 transition"
                                        >
                                            info@motorentbovilla.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 hover:shadow-cyan-900/30 hover:shadow-lg transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <FaWhatsapp className="text-cyan-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300">WhatsApp</p>
                                        <a
                                            href="https://wa.me/355694445555"
                                            className="text-xl font-bold text-white hover:text-cyan-400 transition"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Chat Now
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 hover:shadow-cyan-900/30 hover:shadow-lg transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <FaMapMarkerAlt className="text-cyan-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300">Find Us</p>
                                        <p className="text-xl font-bold text-white">
                                            Zall Herr, Bovilla Reservoir, Albania
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Box */}
                        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
                            <h2 className="text-2xl font-bold text-cyan-500 mb-6">
                                Send Us a Message
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        rows="5"
                                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 px-6 text-white font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition shadow-lg flex items-center justify-center"
                                >
                                    <span>Send Message</span>
                                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right: Additional Content */}
                    <motion.div variants={fadeInUp} className="space-y-8 lg:sticky lg:top-32 h-fit">
                        {/* Google Map */}
                        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-800">
                            <iframe
                                title="Bovilla Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.4831043580048!2d19.866340299999997!3d41.4452401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351cb2a52d90eeb%3A0x4262f3b705a16a34!2sBovilla%20Reservoir!5e1!3m2!1sen!2smt!4v1742914402953!5m2!1sen!2smt"
                                width="100%"
                                height="250"
                                allowFullScreen=""
                                loading="lazy"
                                className="w-full border-0"
                            ></iframe>
                        </div>

                        {/* Adventure Highlight */}
                        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
                                    <path fill="#0891B2" d="M42.7,-51.1C52.9,-41.9,57.2,-25.7,59.4,-9.7C61.5,6.3,61.5,22.2,53.7,33.5C45.9,44.8,30.3,51.4,13.7,58.3C-2.9,65.2,-20.4,72.3,-34.7,67.7C-49,63.1,-60.1,46.7,-64.5,29.3C-68.9,11.9,-66.6,-6.5,-60.1,-22.6C-53.6,-38.7,-42.9,-52.5,-29.4,-60.1C-15.9,-67.7,0.4,-68.9,15.2,-64C30,-59.1,32.5,-60.3,42.7,-51.1Z" transform="translate(100 100)" />
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <FaQuoteRight className="text-cyan-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-bold text-white">Why Choose Us</h3>
                                </div>
                                <p className="text-gray-300 italic">
                                    "Experience the thrill of Bovilla Reservoir with our premium motorcycle rentals. Expert guides, top-notch vehicles, and breathtaking routes await you!"
                                </p>
                            </div>
                        </div>

                        {/* Routes Highlight */}
                        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
                            <div className="flex items-center mb-5">
                                <FaRoute className="text-cyan-500 text-2xl mr-3" />
                                <h3 className="text-xl font-bold text-white">Popular Routes</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-800/80 transition cursor-pointer">
                                    <span className="w-3 h-3 bg-green-500 mr-3 rounded-full"></span>
                                    <span className="font-medium">Beginner Trail</span>
                                    <span className="ml-auto text-cyan-500">1.5 hrs</span>
                                </li>
                                <li className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-800/80 transition cursor-pointer">
                                    <span className="w-3 h-3 bg-yellow-500 mr-3 rounded-full"></span>
                                    <span className="font-medium">Intermediate Challenge</span>
                                    <span className="ml-auto text-cyan-500">3 hrs</span>
                                </li>
                                <li className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-800/80 transition cursor-pointer">
                                    <span className="w-3 h-3 bg-red-500 mr-3 rounded-full"></span>
                                    <span className="font-medium">Advanced Expedition</span>
                                    <span className="ml-auto text-cyan-500">5 hrs</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-5 text-center">Connect With Us</h3>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
                                >
                                    <FaInstagram className="text-cyan-500 text-2xl" />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
                                >
                                    <FaFacebookF className="text-cyan-500 text-2xl" />
                                </a>
                                <a
                                    href="https://tiktok.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
                                >
                                    <FaTiktok className="text-cyan-500 text-2xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}