import React from "react";
import { motion } from "framer-motion";
import {
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaInstagram,
    FaTiktok,
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
        <div className="relative bg-gray-950 min-h-screen pt-24 pb-12 text-gray-300 w-full">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-cyan-500 filter blur-3xl"></div>
                <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-blue-600 filter blur-3xl"></div>
            </div>

            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {/* Header */}
                <motion.div variants={fadeInUp} className="mb-16 text-center w-full">
                    <div className="flex justify-center mb-4">
                        <FaMotorcycle className="text-cyan-500 text-4xl" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-500 mb-3 tracking-tight">
                        CONTACT US
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Reach out to Moto Rent Bovilla. Let’s plan your ride!
                    </p>
                </motion.div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-12">
                    {/* Left side – Contact Info + Navigation */}
                    <motion.div variants={fadeInUp} className="w-full space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {/* Phone */}
                            <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 w-full">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <FaPhone className="text-cyan-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300">Call Us</p>
                                        <a href="tel:+355685776981" className="text-xl font-bold text-white hover:text-cyan-400 transition">
                                            +355 68 577 6981
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            {/* <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 w-full">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <FaEnvelope className="text-cyan-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300">Email Us</p>
                                        <a href="mailto:info@motorentbovilla.com" className="text-xl font-bold text-white hover:text-cyan-400 transition">
                                            info@motorentbovilla.com
                                        </a>
                                    </div>
                                </div>
                            </div> */}

                            {/* WhatsApp */}
                            <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 w-full">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                                        <FaWhatsapp className="text-cyan-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300">WhatsApp</p>
                                        <a href="https://wa.me/355685776981" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-cyan-400 transition">
                                            Chat Now
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 w-full">
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

                        {/* Quick Nav */}
                        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 w-full">
                            <h2 className="text-2xl font-bold text-cyan-500 mb-4 text-center">
                                Quick Navigation
                            </h2>
                            <div className="flex justify-center gap-6 text-cyan-400 text-lg font-medium flex-wrap">
                                <a href="/" className="hover:text-white transition">Home</a>
                                <a href="/about" className="hover:text-white transition">About</a>
                                <a href="/gallery" className="hover:text-white transition">Gallery</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side – Map & Social */}
                    <motion.div variants={fadeInUp} className="w-full space-y-8">
                        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-800 w-full">
                            <iframe
                                title="Bovilla Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.4831043580048!2d19.866340299999997!3d41.4452401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351cb2a52d90eeb%3A0x4262f3b705a16a34!2sBovilla%20Reservoir!5e1!3m2!1sen!2smt!4v1742914402953!5m2!1sen!2smt"
                                width="100%"
                                height="400"
                                allowFullScreen=""
                                loading="lazy"
                                className="w-full border-0"
                            ></iframe>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 w-full">
                            <h3 className="text-xl font-bold text-white mb-5 text-center">Follow Us</h3>
                            <div className="flex justify-center gap-4">
                                <a href="https://www.instagram.com/motorent_bovilla/" target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                                    <FaInstagram className="text-cyan-500 text-2xl" />
                                </a>
                                <a href="https://www.tiktok.com/@motorent_bovilla" target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
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
