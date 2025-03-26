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
    FaRoute
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
        <div className="relative bg-gradient-to-b from-orange-50 via-white to-orange-100 min-h-screen pt-24 pb-12">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl md:text-6xl font-extrabold uppercase text-center text-orange-500 mb-12 tracking-tight"
                >
                    Contact Us
                </motion.h1>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Contact Info + Form */}
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-2 space-y-10"
                    >
                        {/* Contact Info Box */}
                        <div className="bg-orange-50 p-6 rounded-xl shadow-md space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <FaPhone className="text-orange-500 text-xl mt-1" />
                                    <div>
                                        <p className="font-semibold text-orange-500">Phone</p>
                                        <a
                                            href="tel:+355694445555"
                                            className="text-gray-700 hover:text-orange-400 transition"
                                        >
                                            +355 69 444 5555
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FaEnvelope className="text-orange-500 text-xl mt-1" />
                                    <div>
                                        <p className="font-semibold text-orange-500">Email</p>
                                        <a
                                            href="mailto:info@bovillaquads.com"
                                            className="text-gray-700 hover:text-orange-400 transition"
                                        >
                                            info@bovillaquads.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FaWhatsapp className="text-green-500 text-xl mt-1" />
                                    <div>
                                        <p className="font-semibold text-orange-500">WhatsApp</p>
                                        <a
                                            href="https://wa.me/355694445555"
                                            className="text-gray-700 hover:text-green-400 transition"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Chat Now
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
                                    <div>
                                        <p className="font-semibold text-orange-500">Location</p>
                                        <p className="text-gray-700">
                                            Zall Herr, Bovilla Reservoir, Albania
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Form Box */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Send Us a Message
                            </h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white font-bold py-3 rounded-full hover:bg-orange-600 transition shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right: Additional Content */}
                    <motion.div variants={fadeInUp} className="space-y-10 lg:sticky lg:top-32 h-fit">

                        {/* Google Map */}
                        <div className="overflow-hidden rounded-xl shadow-md border border-orange-100">
                            <iframe
                                title="Bovilla Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.4831043580048!2d19.866340299999997!3d41.4452401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351cb2a52d90eeb%3A0x4262f3b705a16a34!2sBovilla%20Reservoir!5e1!3m2!1sen!2smt!4v1742914402953!5m2!1sen!2smt"
                                width="100%"
                                height="300"
                                allowFullScreen=""
                                loading="lazy"
                                className="w-full border-0"
                            ></iframe>
                        </div>

                        {/* Adventure Highlight */}
                        <div className="bg-orange-50 p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <FaQuoteRight className="text-orange-500 text-2xl mr-3" />
                                <h3 className="text-xl font-bold text-gray-800">Why Choose Us</h3>
                            </div>
                            <p className="text-gray-700 italic">
                                "Discover the thrill of Bovilla Reservoir with our expert-guided quad adventures. Unforgettable experiences await!"
                            </p>
                        </div>

                        {/* Routes Highlight */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                            <div className="flex items-center mb-4">
                                <FaRoute className="text-orange-500 text-2xl mr-3" />
                                <h3 className="text-xl font-bold text-gray-800">Our Routes</h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-500 mr-2 rounded-full"></span>
                                    Beginner Trail
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-500 mr-2 rounded-full"></span>
                                    Intermediate Challenge
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-500 mr-2 rounded-full"></span>
                                    Advanced Expedition
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="bg-orange-50 p-6 rounded-xl shadow-md text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Connect with Us</h3>
                            <div className="flex justify-center gap-6 text-orange-500 text-3xl">
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-400">
                                    <FaInstagram />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-400">
                                    <FaFacebookF />
                                </a>
                                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-orange-400">
                                    <FaTiktok />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}