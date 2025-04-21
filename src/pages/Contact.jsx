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
import { ArrowUpRight, Compass, MapPin, MessageCircle, Phone } from "lucide-react";
import { Navigation } from "yet-another-react-lightbox";

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
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-60">
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


                            {/* Phone Card */}
                            <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-tr-full"></div>

                                <div className="p-6 relative z-10 h-full flex flex-col">
                                    <div className="p-3 bg-gray-800/80 rounded-lg w-fit mb-4 group-hover:bg-cyan-900/60 transition-colors">
                                        <Phone className="text-cyan-400 h-6 w-6" strokeWidth={2} />
                                    </div>

                                    <h3 className="font-medium text-gray-300 mb-1">Call Us</h3>
                                    <a
                                        href="tel:+355685776981"
                                        className="text-xl font-bold text-white hover:text-cyan-400 transition-colors flex items-center"
                                    >
                                        +355 68 577 6981
                                        <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <div className="mt-auto pt-4 text-sm text-gray-400">
                                        <p>Available 7 days a week</p>
                                        <p>9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>

                            {/* WhatsApp */}
                            <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-tr-full"></div>

                                <div className="p-6 relative z-10 h-full flex flex-col">
                                    <div className="p-3 bg-gray-800/80 rounded-lg w-fit mb-4 group-hover:bg-cyan-900/60 transition-colors">
                                        <MessageCircle className="text-cyan-400 h-6 w-6" strokeWidth={2} />
                                    </div>

                                    <h3 className="font-medium text-gray-300 mb-1">WhatsApp</h3>
                                    <a
                                        href="https://wa.me/355685776981"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold text-white hover:text-cyan-400 transition-colors flex items-center"
                                    >
                                        Chat Now
                                        <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <div className="mt-auto pt-4 text-sm text-gray-400">
                                        <p>Quick responses</p>
                                        <p>Send us a message anytime</p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>

                            {/* Location Card */}
                            <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-tr-full"></div>

                                <div className="p-6 relative z-10 h-full flex flex-col">
                                    <div className="p-3 bg-gray-800/80 rounded-lg w-fit mb-4 group-hover:bg-cyan-900/60 transition-colors">
                                        <MapPin className="text-cyan-400 h-6 w-6" strokeWidth={2} />
                                    </div>

                                    <h3 className="font-medium text-gray-300 mb-1">Find Us</h3>
                                    <a
                                        href="https://maps.app.goo.gl/SrZmTMuN5Ro39DUW9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold text-white hover:text-cyan-400 transition-colors flex items-center"
                                    >
                                        Zall Herr, Bovilla Reservoir
                                        <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <div className="mt-auto pt-4 flex space-x-2">
                                        <a
                                            href="https://maps.app.goo.gl/r3G6PzzQrbDwQZu36"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-2 bg-gray-800 text-cyan-400 rounded-lg text-sm hover:bg-cyan-900/60 transition-colors flex items-center gap-1"
                                        >
                                            <Compass className="w-4 h-4" /> Google Maps
                                        </a>
                                        {/* <a
                                            href="https://www.waze.com/ul?ll=41.391389,19.854722&navigate=yes"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-2 bg-gray-800 text-cyan-400 rounded-lg text-sm hover:bg-cyan-900/60 transition-colors flex items-center gap-1"
                                        >
                                            <Navigation className="w-4 h-4" /> Waze
                                        </a> */}
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
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

                        {/* Viator Section */}
                        <div className="relative w-full rounded-2xl overflow-hidden border shadow-lg text-center">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="/rides/I4.jpg"
                                    alt="Viator Background"
                                    className="w-full h-full object-cover opacity-60 blur-sm"
                                />
                                <div className="absolute inset-0" />
                            </div>

                            {/* Foreground Content */}
                            <div className="relative z-10 p-6 sm:p-8">
                                <h3 className="text-3xl font-extrabold text-white mb-2">Book on Viator</h3>
                                <p className="text-gray-300 mb-2 text-lg">Highlights Tour in Bovillas Lake with ATV QuadBikes</p>
                                <p className="text-sm text-cyan-300 mb-4">- From <span className="font-bold">$46.48</span></p>

                                <a
                                    href="https://www.viator.com/search/5569821P2?mcid=64243"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md"
                                >
                                    View on Viator
                                </a>

                                <p className="text-xs text-gray-400 mt-4">
                                    Don’t have the app?{" "}
                                    <a
                                        href="https://my-viator.onelink.me/y0Xw/c4ddd6d9"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline text-cyan-400 hover:text-cyan-300"
                                    >
                                        Download here
                                    </a>
                                </p>
                            </div>
                        </div>


                    </motion.div>

                    {/* Right side – Map & Social */}
                    <motion.div variants={fadeInUp} className="w-full space-y-8">
                        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-800 w-full">
                            <iframe
                                title="Moto Rent Bovilla"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.1754762773518!2d19.834155812093957!3d41.400534399899094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135033007653f9e3%3A0xa1165c57a4f4f5ef!2sMoto%20Rent%20Bovilla!5e1!3m2!1sen!2smt!4v1745255569619!5m2!1sen!2smt"
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
